import React from "react";
import "../css/styles.css";
import "../css/buttons.css";

function Opiniones() {
  return (
    <div id="quintaparte">
      <h2>
        <b> Personas hablando de nosotros</b>
      </h2>
      <div class="contq1">
        <img src="images/11- Ilustración temporal reseñas.png" />
      </div>
      <div class="contq2">
        <div class="emp">
          <p>Volc S.A.C</p>
          <p class="selected empp">OSB Digital, LLC</p>
          <p class="empp">Metals S.A.C</p>
        </div>

        <div class="comentarios">
          <p>
            Mining Lists es una plataforma innovadora para proveedores y
            servicios de minería. Sus múltiples funcionalidades y su diseño
            moderno lo convierten en el lugar perfecto para mostrar lo que
            nuestra empresa tiene para ofrecer.
          </p>

          <p class="firma">
            <b>
              Dr. Osvaldo Bascur
              <br />
              Director de OSB Digital, LLC
            </b>
          </p>
        </div>
        <img class="arrow" src="images/right-arrow.png" />
      </div>
    </div>
  );
}

export default Opiniones;
