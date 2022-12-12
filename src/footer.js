import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <div className="marco">
          <div className="imagen">
            <img src="https://icon.horse/icon/instagram.com" alt="Icono" />
          </div>
          <div className="texto">
            <span>Libros</span>
          </div>
          <div className="redes">
            <img
              src="https://icon.horse/icon/twitter.com"
              alt="Icono"
              href="instagram.com"
            />
            <img src="https://icon.horse/icon/facebook.com" alt="Icono" />
          </div>
        </div>

        <div className="copy">&copy; Derechos reservados 2022</div>
      </div>
    );
  }
}
