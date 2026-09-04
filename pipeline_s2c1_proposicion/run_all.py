#!/usr/bin/env python3
"""Pipeline — S2·C1 Proposicion y valor de verdad (Proposicion)."""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MANIM_SCRIPT = ROOT / "video_s2c1_proposicion.py"
SCENE = "Proposicion"
MANIM_OUTPUT = ROOT / "media" / "videos" / "video_s2c1_proposicion" / "1080p60" / f"{SCENE}.mp4"
FINAL_OUTPUT = ROOT / "video_s2c1_proposicion_final.mp4"
SYNC_FILE = ROOT / "section_starts.json"
MANIM_VENV = ROOT.parent / "manim" / ".venv" / "Scripts" / "manim.exe"


def resolver_manim() -> str:
    if MANIM_VENV.exists():
        return str(MANIM_VENV)
    manim = shutil.which("manim")
    if manim:
        return manim
    print("ERROR: Manim no esta instalado.")
    sys.exit(1)


def paso_sync() -> None:
    subprocess.run([sys.executable, str(ROOT / "sync_timeline.py")], cwd=ROOT, check=True)


def paso_manim() -> Path:
    cmd = [resolver_manim(), "-pqh", MANIM_SCRIPT.name, SCENE]
    print(f"  Comando: {' '.join(cmd)}")
    subprocess.run(cmd, cwd=ROOT, check=True)
    if not MANIM_OUTPUT.exists():
        sys.exit(1)
    return MANIM_OUTPUT.resolve()


def paso_integrar() -> Path:
    subprocess.run([sys.executable, str(ROOT / "integrar_video.py")], cwd=ROOT, check=True)
    if not FINAL_OUTPUT.exists():
        sys.exit(1)
    return FINAL_OUTPUT.resolve()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--skip-sync", action="store_true")
    parser.add_argument("--skip-manim", action="store_true")
    args = parser.parse_args()

    print("=" * 60)
    print("Pipeline — S2·C1 Proposicion")
    print("=" * 60)

    if not args.skip_sync:
        paso_sync()
    elif not SYNC_FILE.exists():
        print("ERROR: falta section_starts.json")
        sys.exit(1)

    if not args.skip_manim:
        paso_manim()
    elif not MANIM_OUTPUT.exists():
        sys.exit(1)

    final = paso_integrar()
    print(f"\nArchivo final:\n  {final}")


if __name__ == "__main__":
    main()
