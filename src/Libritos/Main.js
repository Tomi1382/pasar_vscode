import React from "react";
import Card from "./Card";
import Carta from "./CardLibrito";
import Libro from "./libros";
import axios from "axios";
export default class Mains extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: "",
      resultados: [],
      cambioGenero: ""
    };
  }
  cambioGenero() {
    function cambioGenero(e) {
      setGenero(e.target.value);
    }
  }

  buscar() {
    const {} = this.state;
    const url = "https://zoo-animal-api.herokuapp.com/animals/rand/";
    axios
      .get(url)
      .then((res) => {
        this.setState({ resultados: res.data });
      })
      .catch((error) => {
        alert("ocurio un error");
        console.log(error);
      });
  }
  render() {
    const { cambioGenero } = this.state;
    return (
      <div className="presentacion">
        <h1>Libreria Raoden</h1>

        <div className="contenido">
          <p>Venta de libros Fisicos al mejor precio.</p>
          <div class="Selector">
            <select value="Genero" onChange={cambioGenero}>
              <option value="">Elegir Genero</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Aventura">Aventura</option>
              <option value="Terror">Terror</option>
              <option value="Ciencia Ficcion">Ciencia Ficcion</option>
            </select>
            <select id="filtroOrden" name="orden">
              <optgroup label="Orden">
                <option value="OrdenMenor">Orden de menor a mayor</option>
                <option value="OrdenMayor">Orden de mayor a menor</option>
              </optgroup>
              <optgroup label="Precio">
                <option value="PrecioMenor">Precio menor a mayor</option>
                <option value="PrecioMayor">Precio mayor a menor</option>
              </optgroup>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "15px",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            <Libro />
          </div>
          <Carta />
        </div>
      </div>
    );
  }
}
