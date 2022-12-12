import React from "react";
import Cardss from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: "",
      contra: ""
    };
  }

  /*buscar() {
    const { codigo, url } = this.state.codigo;
    const url = baseUrl + this.state.codigo({ url });
  }*/

  render() {
    const { codigo, contra } = this.state;
    return (
      <div>
        <div className="Formulario">
          <div class="main">
            <p class="sign" align="center">
              Registrate
            </p>
            <form class="form1">
              <input
                class="un "
                type="text"
                align="center"
                placeholder="Ingrese su usuario"
                required
              ></input>
              <input
                class="pass"
                type="password"
                align="center"
                placeholder="Ingrese su contrase&ntilde;a"
                required
              ></input>
              <input
                class="pass"
                type="password"
                align="center"
                placeholder="Confirme su contrase&ntilde;a"
                required
              ></input>

              <br />
              <Link class="submit" to="/Login">
                Registrarse
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
