import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Carro from "./Carro/Carrito.js";

import Navbar from "./Navbar.js";
import Footer from "./footer.js";
import Mains from "./Libritos/Main";
import Card from "./Libritos/Card";
import Carta from "./Libritos/CardLibrito.js";
import Registro from "./Register/Main";
import Cardss from "./Register/Cards";
import Index from "./Index/Main";
import Error from "./Login/LoginForm.js";
import Libro from "./Libritos/libros.js";

//https://http.cat/[status_code]

//https://zoo-animal-api.herokuapp.com/animals/rand/(1=10)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Contenedor">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Libritos" element={<Mains />} />
            <Route path="/Register" element={<Registro />} />
            <Route path="/Login" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}
