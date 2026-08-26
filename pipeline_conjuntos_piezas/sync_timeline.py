#!/usr/bin/env python3
"""Linea de tiempo compartida entre Manim e integrar_video — ConjuntoPiezas."""

from __future__ import annotations

import json
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parent
AUDIO_DIR = ROOT / "audio"
SYNC_FILE = ROOT / "section_starts.json"

AUDIO_FILES = [f"piezas_bloque{i}.mp3" for i in range(1, 8)]

SECTION_TITLES = [
    "Mesa con piezas mezcladas",
    "Bolsa y agrupacion",
    "Notacion por extension",
    "Pertenencia",
    "Universo U",
    "Conjunto vacio",
    "Cardinalidad",
]


@dataclass
class BloqueTimeline:
    nombre: str
    indice: int
    titulo: str
    inicio_s: float
    duracion_s: float

    @property
    def fin_s(self) -> float:
        return self.inicio_s + self.duracion_s


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
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    return float(result.stdout.strip())


def calcular_linea_de_tiempo(ffprobe: str) -> list[BloqueTimeline]:
    if not AUDIO_DIR.is_dir():
        raise FileNotFoundError(f"No existe la carpeta {AUDIO_DIR}")

    bloques: list[BloqueTimeline] = []
    inicio = 0.0

    for i, nombre in enumerate(AUDIO_FILES):
        ruta = AUDIO_DIR / nombre
        if not ruta.exists():
            raise FileNotFoundError(f"Falta audio: {ruta}")

        duracion = duracion_audio(ffprobe, ruta)
        bloques.append(
            BloqueTimeline(
                nombre=nombre,
                indice=i,
                titulo=SECTION_TITLES[i],
                inicio_s=inicio,
                duracion_s=duracion,
            )
        )
        inicio += duracion

    return bloques


def exportar_section_starts(bloques: list[BloqueTimeline]) -> Path:
    section_starts = [round(b.inicio_s, 3) for b in bloques]

    data = {
        "bloques": [
            {
                "archivo": b.nombre,
                "titulo": SECTION_TITLES[b.indice],
                "inicio_s": round(b.inicio_s, 3),
                "duracion_s": round(b.duracion_s, 3),
                "fin_s": round(b.fin_s, 3),
            }
            for b in bloques
        ],
        "section_starts": section_starts,
    }
    SYNC_FILE.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
    return SYNC_FILE


def imprimir_linea_de_tiempo(bloques: list[BloqueTimeline]) -> None:
    print("Linea de tiempo (audio sin solapamientos):")
    print("-" * 50)
    for b in bloques:
        print(
            f"  {b.nombre}: duracion {b.duracion_s:.2f}s | "
            f"inicio {b.inicio_s:.2f}s | termina ~{b.fin_s:.2f}s | {b.titulo}"
        )
    print()


def main() -> None:
    import shutil

    ffprobe = shutil.which("ffprobe")
    if not ffprobe:
        print("ERROR: ffprobe no esta en el PATH.")
        sys.exit(1)

    try:
        bloques = calcular_linea_de_tiempo(ffprobe)
    except (FileNotFoundError, subprocess.CalledProcessError, ValueError) as err:
        print(f"ERROR: {err}")
        sys.exit(1)

    imprimir_linea_de_tiempo(bloques)
    ruta = exportar_section_starts(bloques)
    print(f"section_starts exportado: {ruta}")


if __name__ == "__main__":
    main()
