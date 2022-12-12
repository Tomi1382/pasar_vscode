import React from "react";
//import Comprados from "./ProductoSeleccionado";
import { Link } from "react-router-dom";

export default class Vista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.state;
    return (
      <div className="Contenedor">
        <div className="Seleccionado">
          <h1>Estos son los productos seleccionados</h1>
          <h2>aaaaaaaaaaaaaaa</h2>
        </div>
      </div>
    );
  }
}
