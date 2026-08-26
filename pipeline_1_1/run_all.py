#!/usr/bin/env python3
"""
Pipeline completo Video 1.1 — Conjunto o no conjunto

Pasos:
  1. Render Manim (ConjuntoONo, 1080p60)
  2. TTS → 5 MP3 en audio/
  3. ffmpeg → video_1_1_final.mp4

Uso:
  python run_all.py
  python run_all.py --skip-manim    # si ya renderizaste
  python run_all.py --skip-audio    # si ya tienes los MP3
  python run_all.py --force-audio   # regenera MP3 aunque existan
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def _fix_console_encoding() -> None:
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, "reconfigure"):
            try:
                stream.reconfigure(encoding="utf-8", errors="replace")
            except Exception:
                pass


_fix_console_encoding()
MANIM_SCRIPT = ROOT / "video_1_1_conjunto_o_no.py"
SCENE = "ConjuntoONo"
MANIM_OUTPUT = ROOT / "media" / "videos" / "video_1_1_conjunto_o_no" / "1080p60" / f"{SCENE}.mp4"
FINAL_OUTPUT = ROOT / "video_1_1_final.mp4"

# venv de manim del curso (si existe)
MANIM_VENV = ROOT.parent / "manim" / ".venv" / "Scripts" / "manim.exe"


def resolver_manim() -> str:
    if MANIM_VENV.exists():
        return str(MANIM_VENV)
    manim = shutil.which("manim")
    if manim:
        return manim
    print("❌ No se encontró manim.")
    print("   Activa el venv: manim\\.venv\\Scripts\\activate")
    print("   O instala: pip install manim")
    sys.exit(1)


def paso_manim() -> None:
    if not MANIM_SCRIPT.exists():
        print(f"❌ Falta {MANIM_SCRIPT.name}")
        sys.exit(1)

    manim_bin = resolver_manim()
    cmd = [manim_bin, "-pqh", MANIM_SCRIPT.name, SCENE]
    print("=" * 60)
    print("PASO 1/3 — Render Manim (1080p60)")
    print("=" * 60)
    print("Comando:", " ".join(cmd))

    try:
        subprocess.run(cmd, cwd=ROOT, check=True)
    except subprocess.CalledProcessError as err:
        print(f"❌ Manim falló (código {err.returncode})")
        sys.exit(1)

    if not MANIM_OUTPUT.exists():
        print(f"❌ No se generó {MANIM_OUTPUT}")
        sys.exit(1)

    print(f"✅ Video Manim: {MANIM_OUTPUT.resolve()}\n")


def paso_audio(force: bool = False) -> None:
    print("=" * 60)
    print("PASO 2/3 — Generar narración (TTS)")
    print("=" * 60)
    cmd = [sys.executable, str(ROOT / "generar_audio.py")]
    if force:
        cmd.append("--force")
    try:
        subprocess.run(cmd, cwd=ROOT, check=True)
    except subprocess.CalledProcessError as err:
        print(f"❌ generar_audio.py falló (código {err.returncode})")
        sys.exit(1)
    print()


def paso_integrar() -> Path:
    print("=" * 60)
    print("PASO 3/3 — Integrar audio + video (ffmpeg)")
    print("=" * 60)
    cmd = [sys.executable, str(ROOT / "integrar_video.py")]
    try:
        subprocess.run(cmd, cwd=ROOT, check=True)
    except subprocess.CalledProcessError as err:
        print(f"❌ integrar_video.py falló (código {err.returncode})")
        sys.exit(1)
    return FINAL_OUTPUT


def main() -> None:
    parser = argparse.ArgumentParser(description="Pipeline Video 1.1")
    parser.add_argument("--skip-manim", action="store_true", help="Omitir render Manim")
    parser.add_argument("--skip-audio", action="store_true", help="Omitir TTS")
    parser.add_argument("--force-audio", action="store_true", help="Regenerar MP3")
    args = parser.parse_args()

    if not args.skip_manim:
        paso_manim()
    elif not MANIM_OUTPUT.exists():
        print(f"❌ --skip-manim pero no existe {MANIM_OUTPUT}")
        sys.exit(1)
    else:
        print(f"↷ Manim omitido. Usando {MANIM_OUTPUT}\n")

    if not args.skip_audio:
        paso_audio(force=args.force_audio)
    else:
        print("↷ Audio omitido.\n")

    final = paso_integrar()

    print("=" * 60)
    print("PIPELINE COMPLETADO")
    print("=" * 60)
    print(f"📁 Archivo final:\n   {final.resolve()}")


if __name__ == "__main__":
    main()
