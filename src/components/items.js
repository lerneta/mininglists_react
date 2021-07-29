import React from "react";
import "../css/styles.css";
import "../css/buttons.css";

function Items() {
  return (
    <div id="segpart">
      <h2>
        <b>Conoce nuestra comunidad minera</b>
      </h2>
      <div class="seccion1">
        <div class="seccionprincipal">
          <div class="pregunta">
            <p>¿Por qué unirse?</p>
          </div>
          <div class="item1">
            <img src="images/comprobar.png" alt="" />
            <p>Conéctate con profesionales y potenciales clientes.</p>
          </div>
          <div class="item2">
            <img src="images/comprobar.png" alt="" />
            <p>Conviértete en una voz importante en la comunidad.</p>
          </div>
          <div class="item3">
            <img src="images/comprobar.png" alt="" />
            <p>
              Mantente al tanto de las últimas tendencias del sector minero.
            </p>
          </div>
          <div class="item4">
            <img src="images/comprobar.png" alt="" />
            <p>
              Posiciona tu marca frente a compañías y líderes de la minería.
            </p>
          </div>
          <div class="inputbutton">
            <input type="button" value="Nuestra comunidad" class="button4" />
          </div>
        </div>
      </div>
      <div class="seccion2">
        <img src="images/6- Nuestra comunidad.png" alt="" />
      </div>
    </div>
  );
}

export default Items;
