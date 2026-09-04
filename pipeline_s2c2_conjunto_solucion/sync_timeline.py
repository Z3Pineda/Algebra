#!/usr/bin/env python3
"""Linea de tiempo compartida entre Manim e integrar_video — ConjuntoSolucion."""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parent
AUDIO_DIR = ROOT / "audio"

VARIANTES = {
    "short": {
        "audio_indices": (1, 2, 3, 4, 6, 7, 8, 9),
        "titulos": [
            "Apertura CNC",
            "Definicion formal",
            "Ejemplo universo finito",
            "Ejemplo ecuacion enteros",
            "Aplicacion CNC",
            "Vacio y universal",
            "Dos condiciones",
            "Cierre",
        ],
        "sync_file": ROOT / "section_starts.json",
    },
    "full": {
        "audio_indices": tuple(range(1, 10)),
        "titulos": [
            "Apertura CNC",
            "Definicion formal",
            "Ejemplo universo finito",
            "Ejemplo ecuacion enteros",
            "Ejemplo universo real",
            "Aplicacion CNC",
            "Vacio y universal",
            "Dos condiciones",
            "Cierre",
        ],
        "sync_file": ROOT / "section_starts_full.json",
    },
}


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


def audio_files(variante: str) -> list[str]:
    indices = VARIANTES[variante]["audio_indices"]
    return [f"s2c2_bloque{i}.mp3" for i in indices]


def duracion_audio(ffprobe: str, ruta: Path) -> float:
    cmd = [
        ffprobe, "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        str(ruta),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    return float(result.stdout.strip())


def calcular_linea_de_tiempo(ffprobe: str, variante: str = "short") -> list[BloqueTimeline]:
    if variante not in VARIANTES:
        raise ValueError(f"Variante desconocida: {variante}")
    if not AUDIO_DIR.is_dir():
        raise FileNotFoundError(f"No existe la carpeta {AUDIO_DIR}")

    cfg = VARIANTES[variante]
    bloques: list[BloqueTimeline] = []
    inicio = 0.0
    for i, nombre in enumerate(audio_files(variante)):
        ruta = AUDIO_DIR / nombre
        if not ruta.exists():
            raise FileNotFoundError(f"Falta audio: {ruta}")
        duracion = duracion_audio(ffprobe, ruta)
        bloques.append(BloqueTimeline(nombre, i, cfg["titulos"][i], inicio, duracion))
        inicio += duracion
    return bloques


def exportar_section_starts(bloques: list[BloqueTimeline], variante: str = "short") -> Path:
    cfg = VARIANTES[variante]
    sync_file: Path = cfg["sync_file"]
    data = {
        "bloques": [
            {
                "archivo": b.nombre,
                "titulo": cfg["titulos"][b.indice],
                "inicio_s": round(b.inicio_s, 3),
                "duracion_s": round(b.duracion_s, 3),
                "fin_s": round(b.fin_s, 3),
            }
            for b in bloques
        ],
        "section_starts": [round(b.inicio_s, 3) for b in bloques],
    }
    sync_file.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
    return sync_file


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

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--full",
        action="store_true",
        help="Genera section_starts_full.json con los 9 bloques (incluye bloque 5)",
    )
    args = parser.parse_args()
    variante = "full" if args.full else "short"

    ffprobe = shutil.which("ffprobe")
    if not ffprobe:
        print("ERROR: ffprobe no esta en el PATH.")
        sys.exit(1)
    try:
        bloques = calcular_linea_de_tiempo(ffprobe, variante)
    except (FileNotFoundError, subprocess.CalledProcessError, ValueError) as err:
        print(f"ERROR: {err}")
        sys.exit(1)
    imprimir_linea_de_tiempo(bloques)
    print(f"section_starts exportado ({variante}): {exportar_section_starts(bloques, variante)}")


if __name__ == "__main__":
    main()
