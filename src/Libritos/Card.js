import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { datos } = this.props;
    return (
      <div className="Card">
        <img src={datos.image_link} className="imgAnimal" alt="imanimal" />
        <div>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <b>{datos.titulo}</b>
          </span>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <b>{datos.autor}</b>
          </span>
        </div>
      </div>
    );
  }
}
