import React, { Component } from "react";
import "../../Style/cabecera.css";

import { BrowserRouter as Router } from "react-router-dom";

class Cabecera extends Component {
  state = {
    peliculas: false,
    series: false,
    inicio: false,
  };

  render() {
    return (
      <Router>
        <div className="cabecera">
          <div className="links">
            <nav>
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <a href="peliculas">Películas</a>
                </li>
                <li>
                  <a href="series">Series</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="input_cont">
            <input type="search" value="Busca una película o serie" name="" id="" />
          </div>
        </div>
      </Router>
    );
  }
}

export default Cabecera;
