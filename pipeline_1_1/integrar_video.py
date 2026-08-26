#!/usr/bin/env python3
"""
Integra ConjuntoONo.mp4 (Manim, sin audio) con 5 bloques MP3 usando ffmpeg.

Uso:
    python integrar_video.py

Ajusta TIMESTAMPS al inicio del archivo tras escuchar el primer corte.
Si dos bloques se traslapan, el segundo espera a que termine el anterior.
"""

from __future__ import annotations

import shutil
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parent
AUDIO_DIR = ROOT / "audio"
OUTPUT = ROOT / "video_1_1_final.mp4"

# Rutas posibles del video renderizado (se usa la primera que exista)
VIDEO_CANDIDATES = [
    ROOT / "ConjuntoONo.mp4",
    ROOT / "media" / "videos" / "video_1_1_conjunto_o_no" / "1080p60" / "ConjuntoONo.mp4",
]

# Si True, retrasa un bloque cuando su audio se solaparia con el anterior.
# Desactivalo si ya ajustaste TIMESTAMPS a mano y quieres tiempos exactos.
ANTI_TRASLAPE = False

# Debe coincidir con el FadeIn de cada sección en video_1_1_conjunto_o_no.py
#   bloque1 → 0 s    | ¿Qué es un conjunto?
#   bloque2 → 15 s   | Regla de oro
#   bloque3 → 46 s   | Sí son conjuntos  (tras fin bloque2 ~31 s)
#   bloque4 → 65 s   | No son conjuntos
#   bloque5 → 81 s   | Pertenencia ∈
TIMESTAMPS: dict[str, float] = {
    "1_1_bloque1.mp3": 0,
    "1_1_bloque2.mp3": 15,
    "1_1_bloque3.mp3": 46,
    "1_1_bloque4.mp3": 65,
    "1_1_bloque5.mp3": 81,
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
    timestamp_objetivo: float
    inicio_real: float
    duracion_s: float
    delay_ms: int


def verificar_ffmpeg() -> tuple[str, str]:
    """Devuelve rutas a ffmpeg y ffprobe."""
    ffmpeg = shutil.which("ffmpeg")
    ffprobe = shutil.which("ffprobe")
    if not ffmpeg or not ffprobe:
        print("ERROR: ffmpeg no esta instalado o no esta en el PATH.")
        print()
        print("Instalacion:")
        print("  - Descarga: https://ffmpeg.org/download.html")
        print("  - Windows (winget): winget install Gyan.FFmpeg")
        print("  - macOS (Homebrew): brew install ffmpeg")
        print("  - Linux (Debian/Ubuntu): sudo apt install ffmpeg")
        print()
        print("Cierra y vuelve a abrir la terminal despues de instalar.")
        sys.exit(1)
    return ffmpeg, ffprobe


def buscar_video() -> Path:
    for candidato in VIDEO_CANDIDATES:
        if candidato.exists():
            return candidato
    print("ERROR: No se encontro ConjuntoONo.mp4")
    print("  Buscado en:")
    for candidato in VIDEO_CANDIDATES:
        print(f"    - {candidato}")
    print()
    print("Renderiza primero:")
    print("  manim -pqh video_1_1_conjunto_o_no.py ConjuntoONo")
    sys.exit(1)


def duracion_audio(ffprobe: str, ruta: Path) -> float:
    cmd = [
        ffprobe,
        "-v",
        "error",
        "-show_entries",
        "format=duration",
        "-of",
        "default=noprint_wrappers=1:nokey=1",
        str(ruta),
    ]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        return float(result.stdout.strip())
    except (subprocess.CalledProcessError, ValueError) as err:
        print(f"ERROR: No se pudo leer la duracion de {ruta.name}: {err}")
        sys.exit(1)


def preparar_pistas(ffprobe: str) -> list[PistaAudio]:
    print("Paso 1/3 — Verificar audios y calcular tiempos")
    print("-" * 50)

    if not AUDIO_DIR.is_dir():
        print(f"ERROR: No existe la carpeta {AUDIO_DIR}")
        sys.exit(1)

    pistas: list[PistaAudio] = []
    fin_anterior = 0.0

    for nombre, timestamp_objetivo in TIMESTAMPS.items():
        ruta = AUDIO_DIR / nombre
        if not ruta.exists():
            print(f"ERROR: Falta audio: {ruta}")
            sys.exit(1)

        duracion = duracion_audio(ffprobe, ruta)
        if ANTI_TRASLAPE:
            inicio_real = max(timestamp_objetivo, fin_anterior)
        else:
            inicio_real = timestamp_objetivo

        if ANTI_TRASLAPE and inicio_real > timestamp_objetivo + 0.01:
            print(
                f"  {nombre}: objetivo {timestamp_objetivo:.1f}s "
                f"-> inicio {inicio_real:.1f}s (espera fin del bloque anterior)"
            )
        else:
            print(
                f"  {nombre}: inicio {inicio_real:.1f}s, "
                f"duracion {duracion:.1f}s"
            )

        pistas.append(
            PistaAudio(
                nombre=nombre,
                ruta=ruta,
                timestamp_objetivo=timestamp_objetivo,
                inicio_real=inicio_real,
                duracion_s=duracion,
                delay_ms=int(round(inicio_real * 1000)),
            )
        )
        fin_anterior = inicio_real + duracion if ANTI_TRASLAPE else fin_anterior

    print()
    return pistas


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
            "libx264",
            "-preset",
            "medium",
            "-crf",
            "20",
            "-profile:v",
            "high",
            "-level",
            "4.2",
            "-pix_fmt",
            "yuv420p",
            "-c:a",
            "aac",
            "-b:a",
            "192k",
            "-ar",
            "48000",
            "-ac",
            "2",
            "-movflags",
            "+faststart",
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
        fin = pista.inicio_real + pista.duracion_s
        print(
            f"  {pista.nombre} @ {pista.inicio_real:.2f}s "
            f"(termina ~{fin:.2f}s)"
        )
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
    print("Integracion Video 1.1 — Conjunto o no conjunto")
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
