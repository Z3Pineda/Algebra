/**
 * h5p-resizer.js
 * Ajusta automáticamente la altura de los iframes de H5P
 * según el contenido de la actividad.
 *
 * Fuente oficial: https://h5p.org/library/h5p-resizer.js
 * Se incluye una versión simplificada autocontenida para no
 * depender de una CDN externa en el build de Jupyter Book.
 */

(function () {
  "use strict";

  // Escucha mensajes postMessage que envían los iframes de H5P
  window.addEventListener("message", function (event) {
    // Verificación de seguridad: solo aceptamos mensajes de iframes H5P
    if (
      typeof event.data !== "object" ||
      event.data.context !== "h5p"
    ) {
      return;
    }

    // Buscamos el iframe que envió el mensaje
    var iframes = document.querySelectorAll(".h5p-container iframe");
    for (var i = 0; i < iframes.length; i++) {
      try {
        if (iframes[i].contentWindow === event.source) {
          // Ajustamos la altura si el mensaje trae dimensiones
          if (event.data.action === "resize" && event.data.scrollHeight) {
            var newHeight = Math.max(event.data.scrollHeight + 40, 200);
            iframes[i].style.height = newHeight + "px";
          }
          break;
        }
      } catch (e) {
        // Ignoramos errores de cross-origin en iframes de otros dominios
      }
    }
  });

  /**
   * También enviamos un mensaje "hello" a cada iframe H5P al cargar
   * la página, para iniciar el handshake de redimensionamiento.
   */
  function initH5PIframes() {
    var iframes = document.querySelectorAll(".h5p-container iframe");
    iframes.forEach(function (iframe) {
      iframe.addEventListener("load", function () {
        try {
          iframe.contentWindow.postMessage(
            { context: "h5p", action: "hello" },
            "*"
          );
        } catch (e) {
          // Silencioso en caso de cross-origin estricto
        }
      });
    });
  }

  // Ejecutamos al cargar el DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initH5PIframes);
  } else {
    initH5PIframes();
  }
})();
