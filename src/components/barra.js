import React from "react";
import "../css/styles.css";
import "../css/buttons.css";

function Barra() {
  return (
    <div>
      <nav>
        <ul>
          <li class="lifloat">
            <img src="../images/logorig.svg" />
          </li>
          <li>
            <input type="button" value="Iniciar Sesión" class="button1" />
          </li>
          <li>
            <input type="button" value="Regístrese" class="button2" />
          </li>
          <li>
            <a>Directorio</a>
          </li>
          <li>
            <a>Comunidad</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Barra;
