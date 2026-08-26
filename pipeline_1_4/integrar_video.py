#!/usr/bin/env python3
"""
Integra Pertenencia.mp4 (Manim, sin audio) con 5 bloques MP3 usando ffmpeg.
"""

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
AUDIO_DIR = ROOT / "audios" if (ROOT / "audios").is_dir() else ROOT / "audio"
OUTPUT = ROOT / "video_1_4_final.mp4"

VIDEO_CANDIDATES = [
    ROOT / "Pertenencia.mp4",
    ROOT
    / "media"
    / "videos"
    / "video_1_4_pertenencia"
    / "1080p60"
    / "Pertenencia.mp4",
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
    print("ERROR: No se encontro Pertenencia.mp4")
    print("Renderiza primero:")
    print("  manim -pqh video_1_4_pertenencia.py Pertenencia")
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
    sync_path = exportar_section_starts(bloques)
    print(f"  Sync Manim: {sync_path}")
    print()

    return [
        PistaAudio(
            nombre=b.nombre,
            ruta=AUDIO_DIR / b.nombre,
            inicio_s=b.inicio_s,
            duracion_s=b.duracion_s,
            delay_ms=int(round(b.inicio_s * 1000)),
        )
        for b in bloques
    ]


def construir_comando_ffmpeg(
    ffmpeg: str, video: Path, pistas: list[PistaAudio]
) -> list[str]:
    cmd = [ffmpeg, "-y", "-i", str(video)]
    for pista in pistas:
        cmd.extend(["-i", str(pista.ruta)])

    filtros: list[str] = []
    etiquetas: list[str] = []

    for i, pista in enumerate(pistas):
        idx = i + 1
        tag = f"a{i}"
        filtros.append(
            f"[{idx}:a]adelay={pista.delay_ms}|{pista.delay_ms},volume=1.0[{tag}]"
        )
        etiquetas.append(f"[{tag}]")

    n = len(pistas)
    filtros.append(
        f"{''.join(etiquetas)}amix=inputs={n}:duration=longest:dropout_transition=0[aout]"
    )

    cmd.extend(
        [
            "-filter_complex",
            ";".join(filtros),
            "-map",
            "0:v:0",
            "-map",
            "[aout]",
            "-c:v",
            "copy",
            "-c:a",
            "aac",
            "-b:a",
            "192k",
            str(OUTPUT),
        ]
    )
    return cmd


def integrar() -> Path:
    ffmpeg, ffprobe = verificar_ffmpeg()
    video = buscar_video()
    pistas = preparar_pistas(ffprobe)

    print("Paso 2/3 — Entradas")
    print("-" * 50)
    print(f"  Video: {video.resolve()}")
    for pista in pistas:
        fin = pista.inicio_s + pista.duracion_s
        print(f"  {pista.nombre} @ {pista.inicio_s:.2f}s (termina ~{fin:.2f}s)")
    print()

    cmd = construir_comando_ffmpeg(ffmpeg, video, pistas)

    print("Paso 3/3 — Mezclar con ffmpeg")
    print("-" * 50)
    print("  Ejecutando ffmpeg …")

    try:
        subprocess.run(cmd, check=True)
    except subprocess.CalledProcessError as err:
        print(f"ERROR: ffmpeg fallo (codigo {err.returncode})")
        sys.exit(1)

    if not OUTPUT.exists():
        print(f"ERROR: No se genero {OUTPUT}")
        sys.exit(1)

    return OUTPUT.resolve()


def main() -> None:
    print("=" * 50)
    print("Integracion Video 1.4 — Pertenencia")
    print("=" * 50)
    print()

    final = integrar()

    print()
    print("=" * 50)
    print("LISTO")
    print("=" * 50)
    print(f"Video final:\n  {final}")


if __name__ == "__main__":
    main()
