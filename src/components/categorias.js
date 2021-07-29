import React from "react";
import "../css/styles.css";
import "../css/buttons.css";

function Categorias() {
  return (
    <div id="terpart">
      <h2>
        <b>Categorías</b>
      </h2>
      <div class="container">
        <div class="BannerPrincipal1">
          <div class="bannerprincipal">
            <p>Encuentre los mejores servicios y proveedores mineros</p>
            <br />
            <input type="button" value="Explorar" class="button5" />
          </div>
        </div>
        <div class="Primero">
          <div class="bannersecundario uno">
            <p>Automatización</p>
          </div>
        </div>
        <div class="segundo">
          <div class="bannersecundario dos">
            <p>Capacitación</p>
          </div>
        </div>
        <div class="tercero">
          <div class="bannersecundario tres">
            <p>Consultoría</p>
          </div>
        </div>
        <div class="cuarto">
          <div class="bannersecundario cuatro">
            <p>Ingeniería</p>
          </div>
        </div>
        <div class="quinto">
          <div class="bannersecundario cinco">
            <p>Equipo & Maquinaria</p>
          </div>
        </div>
        <div class="sexto">
          <div class="bannerextra">
            <p>Ver más...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;
