#!/usr/bin/env python3
"""
Pipeline — Conjuntos con piezas mecánicas (ConjuntoPiezas)

Pasos:
  0. Calcular section_starts desde audios (ffprobe)
  1. Render Manim (1080p60)
  2. Integrar 7 audios Artlist con ffmpeg

Uso:
  python run_all.py
  python run_all.py --skip-sync
  python run_all.py --skip-manim
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MANIM_SCRIPT = ROOT / "video_conjuntos_piezas.py"
SCENE = "ConjuntoPiezas"
MANIM_OUTPUT = (
    ROOT
    / "media"
    / "videos"
    / "video_conjuntos_piezas"
    / "1080p60"
    / f"{SCENE}.mp4"
)
FINAL_OUTPUT = ROOT / "video_conjuntos_piezas_final.mp4"
SYNC_FILE = ROOT / "section_starts.json"
MANIM_VENV = ROOT.parent / "manim" / ".venv" / "Scripts" / "manim.exe"


def _fix_console_encoding() -> None:
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, "reconfigure"):
            try:
                stream.reconfigure(encoding="utf-8", errors="replace")
            except Exception:
                pass


_fix_console_encoding()


def resolver_manim() -> str:
    if MANIM_VENV.exists():
        return str(MANIM_VENV)
    manim = shutil.which("manim")
    if manim:
        return manim
    print("ERROR: Manim no esta instalado o no esta en el PATH.")
    print()
    print("Opciones:")
    print("  1. Usar el venv del curso:")
    print(r"     D:\DOCUMENTOS\CLASES\Algebra_python_curso\manim\.venv\Scripts\activate")
    print("     pip install -U manim")
    print("  2. Instalar globalmente:")
    print("     pip install manim")
    print()
    print("Luego vuelve a ejecutar: python run_all.py")
    sys.exit(1)


def paso_sync() -> None:
    print("=" * 60)
    print("PASO 0/3 — Calcular tiempos desde audio (ffprobe)")
    print("=" * 60)
    cmd = [sys.executable, str(ROOT / "sync_timeline.py")]
    try:
        subprocess.run(cmd, cwd=ROOT, check=True)
    except subprocess.CalledProcessError as err:
        print(f"ERROR: sync_timeline.py fallo (codigo {err.returncode})")
        sys.exit(1)
    print()


def paso_manim() -> Path:
    if not MANIM_SCRIPT.exists():
        print(f"ERROR: Falta {MANIM_SCRIPT.name} en {ROOT}")
        sys.exit(1)

    manim_bin = resolver_manim()
    cmd = [manim_bin, "-pqh", MANIM_SCRIPT.name, SCENE]

    print("=" * 60)
    print("PASO 1/3 — Render Manim (1080p60)")
    print("=" * 60)
    print(f"  Script:  {MANIM_SCRIPT.name}")
    print(f"  Escena:  {SCENE}")
    print(f"  Comando: {' '.join(cmd)}")
    print()

    try:
        subprocess.run(cmd, cwd=ROOT, check=True)
    except subprocess.CalledProcessError as err:
        print(f"ERROR: Manim fallo (codigo {err.returncode})")
        sys.exit(1)

    if not MANIM_OUTPUT.exists():
        print(f"ERROR: No se genero {MANIM_OUTPUT}")
        sys.exit(1)

    ruta = MANIM_OUTPUT.resolve()
    print()
    print("Manim terminado.")
    print(f"Video sin audio: {ruta}")
    print()
    return ruta


def paso_integrar() -> Path:
    print("=" * 60)
    print("PASO 2/3 — Integrar audio + video (ffmpeg)")
    print("=" * 60)

    cmd = [sys.executable, str(ROOT / "integrar_video.py")]
    try:
        subprocess.run(cmd, cwd=ROOT, check=True)
    except subprocess.CalledProcessError as err:
        print(f"ERROR: integrar_video.py fallo (codigo {err.returncode})")
        sys.exit(1)

    if not FINAL_OUTPUT.exists():
        print(f"ERROR: No se genero {FINAL_OUTPUT}")
        sys.exit(1)

    return FINAL_OUTPUT.resolve()


def main() -> None:
    parser = argparse.ArgumentParser(description="Pipeline ConjuntoPiezas")
    parser.add_argument("--skip-sync", action="store_true")
    parser.add_argument(
        "--skip-manim",
        action="store_true",
        help="Omitir render si ya existe ConjuntoPiezas.mp4",
    )
    args = parser.parse_args()

    print("=" * 60)
    print("Pipeline — Conjuntos con piezas mecánicas")
    print("=" * 60)
    print()

    if not args.skip_sync:
        paso_sync()
    elif not SYNC_FILE.exists():
        print("ERROR: --skip-sync pero no existe section_starts.json")
        sys.exit(1)
    else:
        print(f"Sync omitido. Usando {SYNC_FILE.resolve()}\n")

    if not args.skip_manim:
        paso_manim()
    elif not MANIM_OUTPUT.exists():
        print(f"ERROR: --skip-manim pero no existe {MANIM_OUTPUT}")
        sys.exit(1)
    else:
        print(f"Manim omitido. Usando {MANIM_OUTPUT.resolve()}\n")

    final = paso_integrar()

    print()
    print("=" * 60)
    print("PIPELINE COMPLETADO")
    print("=" * 60)
    print(f"Archivo final:\n  {final}")


if __name__ == "__main__":
    main()
