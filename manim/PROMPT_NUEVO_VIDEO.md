# Prompt reutilizable — Nuevo video Manim (pipeline completo)

Copia el bloque de abajo, rellena los campos entre `< >` y pégalo en el chat.
El agente debe **hacer todo automáticamente** (no solo escribir archivos): crear pipeline, sincronizar, ejecutar y entregar el MP4 final.

---

## BLOQUE PARA PEGAR

```
Tengo un proyecto de video educativo con Manim para el curso de Álgebra.
Haz TODO el pipeline completo siguiendo el patrón de pipeline_conjuntos_piezas
y pipeline_venn_intro en D:\DOCUMENTOS\CLASES\Algebra_python_curso.

## ENTRADAS

- Script Manim: <RUTA_AL_PY>          (ej. C:\Users\zaira\Downloads\video_venn_intro.py)
- Clase Manim:  <NombreClase>         (ej. VennIntro)
- Carpeta pipeline: pipeline_<slug>   (ej. pipeline_venn_intro)

Audios en carpeta audio/ (nombres exactos):
- <prefijo_bloque1.mp3>
- <prefijo_bloque2.mp3>
- ... (uno por escena/sección)

Ruta probable de los MP3 si aún no están en audio/:
<C:\Users\zaira\Downloads o ruta donde estén>

Títulos de sección (uno por bloque de audio, en orden):
1. <Escena 1>
2. <Escena 2>
...

Output final: <nombre_final.mp4>   (ej. video_venn_intro_final.mp4)

## LO QUE DEBES HACER (en orden, sin pedirme confirmación)

### 1. Crear carpeta pipeline_<slug>/ con:

| Archivo | Función |
|---------|---------|
| video_<slug>.py | Copiar/adaptar el .py que te doy |
| sync_timeline.py | ffprobe → section_starts.json (bloques encadenados) |
| integrar_video.py | Mezclar video Manim + audios con ffmpeg |
| run_all.py | Orquestar sync → Manim → integrar |
| audio/ | Copiar aquí los MP3 si están en Downloads |

### 2. sync_timeline.py

- Leer duración exacta de cada MP3 con ffprobe
- Bloque 1 en t=0; cada bloque siguiente empieza cuando termina el anterior
- Exportar section_starts.json con bloques + section_starts[]
- Imprimir duración e inicio de cada bloque

### 3. Sincronizar el .py de Manim

- Cargar section_starts.json (fallback si no existe)
- Añadir setup(), _t, _tick(), _sync_wait(next_section, fadeout=...)
- Una escena Manim ↔ un bloque de audio (mismo orden)
- Al final de escenas 1…N-1: _sync_wait(i, fadeout=...) antes del FadeOut
- Escena final: esperar dinámicamente hasta cargar_fin_audio() antes del cierre
- Quitar self.wait() largos fijos; el padding lo da _sync_wait

Referencia: pipeline_conjuntos_piezas/video_conjuntos_piezas.py

### 4. integrar_video.py

- Buscar video en media/videos/<script>/1080p60/<Clase>.mp4
- Mezclar audios con adelay según section_starts (via sync_timeline)
- Salida compatible YouTube:
  libx264, yuv420p, AAC estéreo 48 kHz, -movflags +faststart
- Si ffmpeg/manim no están en PATH, imprimir instrucciones y detener

### 5. run_all.py

Pasos en orden:
  0. python sync_timeline.py
  1. manim -pqh video_<slug>.py <Clase>   (venv: manim/.venv/Scripts/manim.exe)
  2. python integrar_video.py

Flags: --skip-sync, --skip-manim
Uso: python run_all.py

### 6. Ejecutar

- Copiar MP3 a audio/ si faltan
- Ejecutar: python run_all.py
- Verificar duración video ≈ duración audio total (ffprobe)
- Reportar ruta exacta del .mp4 final

### 7. (Opcional) Mejoras visuales

Si alguna escena se ve amontonada, ajustar layout en el .py antes de re-renderizar.

## REFERENCIAS DEL PROYECTO

- Manim venv: D:\DOCUMENTOS\CLASES\Algebra_python_curso\manim\.venv\Scripts\manim.exe
- Pipelines modelo: pipeline_conjuntos_piezas/, pipeline_venn_intro/, pipeline_1_1/
- YouTube en Jupyter Book: apps_script/apply_video_urls.py + embed youtube.com/embed/ID

## REQUISITOS

- ffmpeg y ffprobe vía subprocess; verificar instalación
- Imprimir progreso de cada paso
- Al terminar: ruta del archivo final y duración video vs audio
- No commitear unless I ask
```

---

## Ejemplo rellenado (Venn Intro)

```
Script Manim: C:\Users\zaira\Downloads\video_venn_intro.py
Clase: VennIntro
Carpeta: pipeline_venn_intro
Audios: venn_bloque1.mp3 … venn_bloque7.mp3
MP3 en: C:\Users\zaira\Downloads
Secciones: Apertura, Universo U, Conjuntos A y B, Cuatro regiones,
           Elementos, Cómo leer, Cierre
Output: video_venn_intro_final.mp4
```

---

## Checklist post-ejecución (el agente debe verificar)

- [ ] section_starts.json generado
- [ ] VennIntro.mp4 renderizado (~duración audio)
- [ ] video_*_final.mp4 existe
- [ ] Duración final ≈ suma de MP3 (no frame congelado >5 s al final)
- [ ] faststart activo (moov al inicio)
