import React from "react";
import styles from "./cardLibrito.module.css";
import { Link } from "react-router-dom";

export default class Carta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoCard: false
    };
  }
  mostrarInfo() {
    this.setState({ infoCard: true });
  }
  esconderInfo() {
    this.setState({ infoCard: false });
  }
  render() {
    const { imagen, titulo, precio, genero } = this.props;
    const dataLibro = (
      <div className={styles.dataLibro}>
        <h1>
          <b>{titulo}</b>
        </h1>
        <span>
          <em>{precio}</em>
        </span>
        <span>
          <em>{genero}</em>
        </span>
      </div>
    );
    return (
      <div
        className={styles.ContenedorCard}
        onMouseOver={() => this.mostrarInfo()}
        onMouseOut={() => this.esconderInfo()}
      >
        <img src={imagen} alt={titulo} style={{ borderRadius: 12 }} />
        {this.state.infoCard === true ? dataLibro : ""}
      </div>
    );
  }
}
