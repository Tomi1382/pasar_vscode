import React from "react";
import productos from "./productosLibro.json";
import Carta from "./CardLibrito";

export default class Libro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {productos.map((libro, index) => {
          return (
            <Carta
              imagen={libro.imagen}
              titulo={libro.titulo}
              precio={libro.precio}
              genero={libro.genero}
            />
          );
        })}
      </>
    );
  }
}
