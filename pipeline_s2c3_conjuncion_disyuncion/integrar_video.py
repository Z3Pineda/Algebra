#!/usr/bin/env python3
"""Integra ConjuncionDisyuncion.mp4 con 9 bloques MP3 usando ffmpeg."""

from __future__ import annotations

import shutil
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

from sync_timeline import (
    calcular_linea_de_tiempo,
    exportar_section_starts,
    imprimir_linea_de_tiempo,
)

ROOT = Path(__file__).resolve().parent
AUDIO_DIR = ROOT / "audio"
OUTPUT = ROOT / "video_s2c3_conjuncion_disyuncion_final.mp4"

VIDEO_CANDIDATES = [
    ROOT / "ConjuncionDisyuncion.mp4",
    ROOT / "media" / "videos" / "video_s2c3_conjuncion_disyuncion" / "1080p60" / "ConjuncionDisyuncion.mp4",
]


def _fix_console_encoding() -> None:
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, "reconfigure"):
            try:
                stream.reconfigure(encoding="utf-8", errors="replace")
            except Exception:
                pass


_fix_console_encoding()


@dataclass
class PistaAudio:
    nombre: str
    ruta: Path
    inicio_s: float
    duracion_s: float
    delay_ms: int


def verificar_ffmpeg() -> tuple[str, str]:
    ffmpeg = shutil.which("ffmpeg")
    ffprobe = shutil.which("ffprobe")
    if not ffmpeg or not ffprobe:
        print("ERROR: ffmpeg no esta instalado o no esta en el PATH.")
        sys.exit(1)
    return ffmpeg, ffprobe


def buscar_video() -> Path:
    for candidato in VIDEO_CANDIDATES:
        if candidato.exists():
            return candidato
    print("ERROR: No se encontro ConjuncionDisyuncion.mp4")
    sys.exit(1)


def preparar_pistas(ffprobe: str) -> list[PistaAudio]:
    print("Paso 1/3 — Verificar audios y calcular tiempos")
    print("-" * 50)
    try:
        bloques = calcular_linea_de_tiempo(ffprobe)
    except FileNotFoundError as err:
        print(f"ERROR: {err}")
        sys.exit(1)
    imprimir_linea_de_tiempo(bloques)
    print(f"  Sync Manim: {exportar_section_starts(bloques)}")
    print()
    return [
        PistaAudio(b.nombre, AUDIO_DIR / b.nombre, b.inicio_s, b.duracion_s,
                   int(round(b.inicio_s * 1000)))
        for b in bloques
    ]


def construir_comando_ffmpeg(ffmpeg: str, video: Path, pistas: list[PistaAudio]) -> list[str]:
    cmd = [ffmpeg, "-y", "-i", str(video)]
    for p in pistas:
        cmd.extend(["-i", str(p.ruta)])
    filtros, tags = [], []
    for i, p in enumerate(pistas):
        tag = f"a{i}"
        filtros.append(f"[{i+1}:a]adelay={p.delay_ms}|{p.delay_ms},volume=1.0[{tag}]")
        tags.append(f"[{tag}]")
    n = len(pistas)
    filtros.append(f"{''.join(tags)}amix=inputs={n}:duration=longest:dropout_transition=0[aout]")
    cmd.extend([
        "-filter_complex", ";".join(filtros),
        "-map", "0:v:0", "-map", "[aout]",
        "-c:v", "libx264", "-preset", "medium", "-crf", "20",
        "-profile:v", "high", "-level", "4.2", "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-ac", "2",
        "-movflags", "+faststart", str(OUTPUT),
    ])
    return cmd


def integrar() -> Path:
    ffmpeg, ffprobe = verificar_ffmpeg()
    video = buscar_video()
    pistas = preparar_pistas(ffprobe)
    print("Paso 2/3 — Entradas")
    print("-" * 50)
    print(f"  Video: {video.resolve()}")
    for p in pistas:
        print(f"  {p.nombre} @ {p.inicio_s:.2f}s (termina ~{p.inicio_s + p.duracion_s:.2f}s)")
    print()
    print("Paso 3/3 — Mezclar con ffmpeg")
    print("-" * 50)
    subprocess.run(construir_comando_ffmpeg(ffmpeg, video, pistas), check=True)
    if not OUTPUT.exists():
        print(f"ERROR: No se genero {OUTPUT}")
        sys.exit(1)
    return OUTPUT.resolve()


def main() -> None:
    print("=" * 50)
    print("Integracion — ConjuncionDisyuncion + 9 audios")
    print("=" * 50)
    final = integrar()
    print()
    print("=" * 50)
    print("LISTO")
    print("=" * 50)
    print(f"Video final:\n  {final}")


if __name__ == "__main__":
    main()
