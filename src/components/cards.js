import React from "react";
import "../css/styles.css";
import "../css/buttons.css";

function Cards() {
  return (
    <div>
      <h2>
        <b> ¿Cómo usar Mining List?</b>
      </h2>
      <div class="tabla">
        <div class="contenedor">
          <img src="images/2- Icono campaña.png" />
          <p>Cree una campaña</p>
        </div>

        <div class="flecha">
          <img src="images/right-arrow.png" />
        </div>

        <div class="contenedor">
          <img src="images/3- Icono notificaciones.png" />
          <p>Las empresas son notificadas</p>
        </div>

        <div class="flecha">
          <img src="images/right-arrow.png" />
        </div>

        <div class="contenedor">
          <img src="images/4- Icono ofertas.png" />
          <p>Escoja las mejores ofertas</p>
        </div>

        <div class="flecha">
          <img src="images/right-arrow.png" />
        </div>

        <div class="contenedor">
          <img src="images/5- Icono trato.png" />
          <p>¡Trato hecho!</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
