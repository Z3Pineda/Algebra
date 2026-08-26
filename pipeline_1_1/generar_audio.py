#!/usr/bin/env python3
"""Genera los 5 MP3 de narración con ElevenLabs (o OpenAI TTS como fallback)."""

from __future__ import annotations

import os
import sys
from pathlib import Path

import requests
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent
AUDIO_DIR = ROOT / "audio"


def _fix_console_encoding() -> None:
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, "reconfigure"):
            try:
                stream.reconfigure(encoding="utf-8", errors="replace")
            except Exception:
                pass


_fix_console_encoding()

BLOQUES: dict[str, str] = {
    "1_1_bloque1.mp3": (
        "Un conjunto es una colección de elementos bien definida. "
        "Bien definida significa que la pertenencia es verificable. "
        "O un elemento cumple el criterio, o no lo cumple. No hay casos intermedios."
    ),
    "1_1_bloque2.mp3": (
        "Criterio verificable: conjunto. "
        "Criterio subjetivo o ausente: no es un conjunto."
    ),
    "1_1_bloque3.mp3": (
        "Tornillos de diámetro 8 milímetros. El criterio es medible. Conjunto. "
        "Enteros del 1 al 10. El criterio es explícito. Conjunto. "
        "Piezas con dureza mayor a 60 HRC. Hay un umbral y una prueba estándar. Conjunto."
    ),
    "1_1_bloque4.mp3": (
        "Piezas resistentes. Sin especificación de condición ni umbral. No es un conjunto. "
        "Números grandes. Sin límite definido. No es un conjunto. "
        "Piezas de buena calidad. Criterio subjetivo. No es un conjunto."
    ),
    "1_1_bloque5.mp3": (
        "Un elemento pertenece a un conjunto si y solo si cumple el criterio que lo define. "
        "Sin criterio objetivo: no hay pertenencia. No hay conjunto."
    ),
}

# Voz ElevenLabs en español (Matías). Sobrescribe con ELEVENLABS_VOICE_ID en .env
DEFAULT_ELEVENLABS_VOICE = "YExhVa4bZzT0h3c5GJ8X"


def buscar_voz_espanol(api_key: str) -> str | None:
    """Lista voces y elige una en español masculina si es posible."""
    try:
        resp = requests.get(
            "https://api.elevenlabs.io/v1/voices",
            headers={"xi-api-key": api_key},
            timeout=30,
        )
        if resp.status_code != 200:
            return None
        for v in resp.json().get("voices", []):
            labels = v.get("labels") or {}
            idioma = str(labels.get("language", "")).lower()
            nombre = v.get("name", "").lower()
            if "spanish" in idioma or "español" in idioma or "matias" in nombre or "matías" in nombre:
                return v["voice_id"]
    except requests.RequestException:
        return None
    return None


def cargar_env() -> None:
    env_path = ROOT / ".env"
    if not env_path.exists():
        ejemplo = ROOT / ".env.example"
        if ejemplo.exists():
            print(f"⚠ No hay .env. Copia {ejemplo.name} → .env y añade tu API key.")
        else:
            print("⚠ No hay .env con ELEVENLABS_API_KEY u OPENAI_API_KEY.")
    load_dotenv(env_path)


def generar_elevenlabs(texto: str, destino: Path, api_key: str, voice_id: str) -> None:
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": api_key,
    }
    payload = {
        "text": texto,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {
            "stability": 0.85,
            "similarity_boost": 0.85,
            "style": 0.0,
            "use_speaker_boost": True,
        },
    }
    resp = requests.post(url, json=payload, headers=headers, timeout=120)
    if resp.status_code != 200:
        raise RuntimeError(f"ElevenLabs HTTP {resp.status_code}: {resp.text[:300]}")
    destino.write_bytes(resp.content)


def generar_openai(texto: str, destino: Path, api_key: str) -> None:
    try:
        from openai import OpenAI
    except ImportError as exc:
        raise RuntimeError("Instala openai: pip install openai") from exc

    client = OpenAI(api_key=api_key)
    with client.audio.speech.with_streaming_response.create(
        model="tts-1-hd",
        voice="onyx",
        input=texto,
    ) as response:
        response.stream_to_file(destino)


def resolver_proveedor() -> tuple[str, dict]:
    eleven_key = os.getenv("ELEVENLABS_API_KEY", "").strip()
    openai_key = os.getenv("OPENAI_API_KEY", "").strip()
    voice_id = os.getenv("ELEVENLABS_VOICE_ID", "").strip()
    if eleven_key and not voice_id:
        voice_id = buscar_voz_espanol(eleven_key) or DEFAULT_ELEVENLABS_VOICE

    if eleven_key:
        return "elevenlabs", {"api_key": eleven_key, "voice_id": voice_id or DEFAULT_ELEVENLABS_VOICE}
    if openai_key:
        return "openai", {"api_key": openai_key}
    raise RuntimeError(
        "No hay API key. Define ELEVENLABS_API_KEY u OPENAI_API_KEY en pipeline_1_1/.env"
    )


def generar_todos(forzar: bool = False) -> list[Path]:
    cargar_env()
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    try:
        proveedor, creds = resolver_proveedor()
    except RuntimeError as err:
        print(f"❌ {err}")
        sys.exit(1)

    print(f"🔊 Proveedor TTS: {proveedor}")
    generados: list[Path] = []

    for nombre, texto in BLOQUES.items():
        destino = AUDIO_DIR / nombre
        if destino.exists() and not forzar:
            print(f"  ↷ Ya existe: {destino.name}")
            generados.append(destino)
            continue

        print(f"  → Generando {destino.name} …")
        try:
            if proveedor == "elevenlabs":
                generar_elevenlabs(texto, destino, creds["api_key"], creds["voice_id"])
            else:
                generar_openai(texto, destino, creds["api_key"])
        except Exception as err:
            # Fallback OpenAI si ElevenLabs falla y hay key alternativa
            openai_key = os.getenv("OPENAI_API_KEY", "").strip()
            if proveedor == "elevenlabs" and openai_key:
                print(f"    ⚠ ElevenLabs falló ({err}). Intentando OpenAI…")
                generar_openai(texto, destino, openai_key)
            else:
                print(f"    ❌ Error en {nombre}: {err}")
                sys.exit(1)

        if not destino.exists() or destino.stat().st_size < 500:
            print(f"    ❌ Archivo inválido: {destino}")
            sys.exit(1)

        print(f"    ✅ {destino.name} ({destino.stat().st_size // 1024} KB)")
        generados.append(destino)

    return generados


def main() -> None:
    forzar = "--force" in sys.argv
    archivos = generar_todos(forzar=forzar)
    print(f"\n✅ {len(archivos)} archivos en {AUDIO_DIR}")


if __name__ == "__main__":
    main()
