import React from "react";

export default class Cardss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { datos } = this.props;
    return (
      <div className="Card">
        <img src={this.state.url} className="imgGato" alt="imagenGato" />
      </div>
    );
  }
}
