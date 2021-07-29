import React from "react";
import "../css/styles.css";
import "../css/buttons.css";

function Busqueda() {
  return (
    <div id="busqueda">
      <div id="container">
        <input type="text" placeholder="Buscar empresa" type="text" />
        <div class="division"></div>
        <input type="text" placeholder="Ubicación" />
        <div class="search"></div>
      </div>
    </div>
  );
}

export default Busqueda;
