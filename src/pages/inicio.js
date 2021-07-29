import React from "react";
import Barra from "../components/barra";
import Busqueda from "../components/busqueda";
import Texto_superior from "../components/texto_superior";
import Cards from "../components/cards";
import Items from "../components/items";
import Categorias from "../components/categorias";
import Empresas from "../components/empresas";
import Opiniones from "../components/opiniones";
import Footer from "../components/footer";

function inicio() {
  return (
    <div>
      <section id="sup">
        <Barra />
        <Busqueda />
        <Texto_superior />
      </section>
      <section id="mid">
        <Cards />
        <Items />
        <Categorias />
        <Empresas />
        <Opiniones />
      </section>
      <Footer />
    </div>
  );
}

export default inicio;
