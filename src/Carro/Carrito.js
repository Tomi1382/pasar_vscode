import React from "react";
export default class Carro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.state;
    return (
      <div className="estilosCarrito">
        <button>Carrito</button>
      </div>
    );
  }
}
