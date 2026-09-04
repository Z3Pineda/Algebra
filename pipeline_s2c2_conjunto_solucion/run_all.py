#!/usr/bin/env python3
"""Pipeline — S2·C2 Conjunto solucion de una proposicion abierta."""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MANIM_SCRIPT = ROOT / "video_s2c2_conjunto_solucion.py"
MANIM_OUTPUT_DIR = ROOT / "media" / "videos" / "video_s2c2_conjunto_solucion" / "1080p60"
FINAL_OUTPUT_SHORT = ROOT / "video_s2c2_conjunto_solucion_final.mp4"
FINAL_OUTPUT_FULL = ROOT / "video_s2c2_conjunto_solucion_final2.mp4"
SYNC_FILE_SHORT = ROOT / "section_starts.json"
SYNC_FILE_FULL = ROOT / "section_starts_full.json"
MANIM_VENV = ROOT.parent / "manim" / ".venv" / "Scripts" / "manim.exe"

CONFIG = {
    "short": {
        "scene": "ConjuntoSolucion",
        "sync_file": SYNC_FILE_SHORT,
        "sync_args": [],
        "integrar_args": [],
        "final_output": FINAL_OUTPUT_SHORT,
    },
    "full": {
        "scene": "ConjuntoSolucionFull",
        "sync_file": SYNC_FILE_FULL,
        "sync_args": ["--full"],
        "integrar_args": ["--full"],
        "final_output": FINAL_OUTPUT_FULL,
    },
}


def resolver_manim() -> str:
    if MANIM_VENV.exists():
        return str(MANIM_VENV)
    manim = shutil.which("manim")
    if manim:
        return manim
    print("ERROR: Manim no esta instalado.")
    sys.exit(1)


def paso_sync(variante: str) -> None:
    cfg = CONFIG[variante]
    subprocess.run(
        [sys.executable, str(ROOT / "sync_timeline.py"), *cfg["sync_args"]],
        cwd=ROOT,
        check=True,
    )


def paso_manim(variante: str) -> Path:
    cfg = CONFIG[variante]
    cmd = [resolver_manim(), "-pqh", MANIM_SCRIPT.name, cfg["scene"]]
    print(f"  Comando: {' '.join(cmd)}")
    subprocess.run(cmd, cwd=ROOT, check=True)
    output = MANIM_OUTPUT_DIR / f"{cfg['scene']}.mp4"
    if not output.exists():
        sys.exit(1)
    return output.resolve()


def paso_integrar(variante: str) -> Path:
    cfg = CONFIG[variante]
    subprocess.run(
        [sys.executable, str(ROOT / "integrar_video.py"), *cfg["integrar_args"]],
        cwd=ROOT,
        check=True,
    )
    if not cfg["final_output"].exists():
        sys.exit(1)
    return cfg["final_output"].resolve()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--skip-sync", action="store_true")
    parser.add_argument("--skip-manim", action="store_true")
    parser.add_argument(
        "--full",
        action="store_true",
        help="Genera version completa con bloque 5 → video_s2c2_conjunto_solucion_final2.mp4",
    )
    args = parser.parse_args()
    variante = "full" if args.full else "short"
    cfg = CONFIG[variante]

    print("=" * 60)
    titulo = "Pipeline — S2·C2 Conjunto solucion (completo, 9 bloques)" if args.full else "Pipeline — S2·C2 Conjunto solucion"
    print(titulo)
    print("=" * 60)

    if not args.skip_sync:
        paso_sync(variante)
    elif not cfg["sync_file"].exists():
        print(f"ERROR: falta {cfg['sync_file'].name}")
        sys.exit(1)

    if not args.skip_manim:
        paso_manim(variante)
    else:
        manim_output = MANIM_OUTPUT_DIR / f"{cfg['scene']}.mp4"
        if not manim_output.exists():
            sys.exit(1)

    final = paso_integrar(variante)
    print(f"\nArchivo final:\n  {final}")


if __name__ == "__main__":
    main()
