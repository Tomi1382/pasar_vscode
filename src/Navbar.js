import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Libritos">Libros </Link>
          </li>
          <li>
            <Link to="/Register"> Registro </Link>
          </li>
          <li>
            <Link to="/Login"> Login </Link>
          </li>
          {/*<li>
            <Link to="/vistaProducto"> Compra </Link>
          </li>*/}
          <li>
            <div class="wrap">
              
              <input
                list="Stock"
                name="Stock"
                type="text"
                placeholder="Elegir libro"
              ></input>
              <datalist id="Stock">
                <option value="Elantris">Brandon Sanderson</option>
                <option value="El Camino De Los Reyes">
                  Brandon Sanderson
                </option>
                <option value="It">Stephen King</option>
                <option value="Cementerio de animales">Stephen King</option>
                <option value="Parque Jurasico">Michael Crighton</option>
                <option value="Harry Potter y el Prisionero De Azkaban">
                  J.K
                </option>
                <option value="Harry Potter y el Caliz de Fuego">J.K</option>
              </datalist>
              
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
