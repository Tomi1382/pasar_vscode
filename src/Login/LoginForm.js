import React from "react";
import { Link } from "react-router-dom";

export default class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.props;
    return (
      <div>
        <div className="Formulario">
          <div class="main">
            <p class="sign" align="center">
              Inicie Sesion
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

              <br />
              <Link class="submit" to="/Libritos">
                Iniciar Sesion
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
