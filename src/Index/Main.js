import React from "react";
import Boton from "../Boton";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ini">
        <Boton titulo="Libros" ruta="/Libritos" />
        <Boton titulo="Registro" ruta="/Register" />
        <Boton titulo="Login" ruta="/Login" />
        <Boton titulo="Carrito" ruta="/vistaProducto" />
      </div>
    );
  }
}
