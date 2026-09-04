#!/usr/bin/env python3
"""Integra ConjuntoSolucion.mp4 (Manim, sin audio) con bloques MP3 usando ffmpeg."""

from __future__ import annotations

import argparse
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
OUTPUT_SHORT = ROOT / "video_s2c2_conjunto_solucion_final.mp4"
OUTPUT_FULL = ROOT / "video_s2c2_conjunto_solucion_final2.mp4"

VIDEO_CANDIDATES = {
    "short": [
        ROOT / "ConjuntoSolucion.mp4",
        ROOT / "media" / "videos" / "video_s2c2_conjunto_solucion" / "1080p60" / "ConjuntoSolucion.mp4",
    ],
    "full": [
        ROOT / "ConjuntoSolucionFull.mp4",
        ROOT / "media" / "videos" / "video_s2c2_conjunto_solucion" / "1080p60" / "ConjuntoSolucionFull.mp4",
    ],
}


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


def buscar_video(variante: str) -> Path:
    for candidato in VIDEO_CANDIDATES[variante]:
        if candidato.exists():
            return candidato
    escena = "ConjuntoSolucionFull" if variante == "full" else "ConjuntoSolucion"
    print(f"ERROR: No se encontro {escena}.mp4")
    sys.exit(1)


def preparar_pistas(ffprobe: str, variante: str) -> list[PistaAudio]:
    print("Paso 1/3 — Verificar audios y calcular tiempos")
    print("-" * 50)
    try:
        bloques = calcular_linea_de_tiempo(ffprobe, variante)
    except FileNotFoundError as err:
        print(f"ERROR: {err}")
        sys.exit(1)
    imprimir_linea_de_tiempo(bloques)
    print(f"  Sync Manim: {exportar_section_starts(bloques, variante)}")
    print()
    return [
        PistaAudio(b.nombre, AUDIO_DIR / b.nombre, b.inicio_s, b.duracion_s,
                   int(round(b.inicio_s * 1000)))
        for b in bloques
    ]


def construir_comando_ffmpeg(ffmpeg: str, video: Path, pistas: list[PistaAudio], output: Path) -> list[str]:
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
        "-movflags", "+faststart", str(output),
    ])
    return cmd


def integrar(variante: str, output: Path) -> Path:
    ffmpeg, ffprobe = verificar_ffmpeg()
    video = buscar_video(variante)
    pistas = preparar_pistas(ffprobe, variante)
    print("Paso 2/3 — Entradas")
    print("-" * 50)
    print(f"  Video: {video.resolve()}")
    for p in pistas:
        print(f"  {p.nombre} @ {p.inicio_s:.2f}s (termina ~{p.inicio_s + p.duracion_s:.2f}s)")
    print()
    print("Paso 3/3 — Mezclar con ffmpeg")
    print("-" * 50)
    subprocess.run(construir_comando_ffmpeg(ffmpeg, video, pistas, output), check=True)
    if not output.exists():
        print(f"ERROR: No se genero {output}")
        sys.exit(1)
    return output.resolve()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--full",
        action="store_true",
        help="Integra version completa (9 bloques) → video_s2c2_conjunto_solucion_final2.mp4",
    )
    args = parser.parse_args()
    variante = "full" if args.full else "short"
    output = OUTPUT_FULL if args.full else OUTPUT_SHORT
    n_bloques = 9 if args.full else 8

    print("=" * 50)
    print(f"Integracion — ConjuntoSolucion + {n_bloques} audios")
    print("=" * 50)
    final = integrar(variante, output)
    print()
    print("=" * 50)
    print("LISTO")
    print("=" * 50)
    print(f"Video final:\n  {final}")


if __name__ == "__main__":
    main()
