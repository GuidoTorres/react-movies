import React, { Component } from "react";
import "../../Style/cabecera.css";

import { BrowserRouter as Router } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const Cabecera = () => {
  return (
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
        <SearchOutlined  className="searchIcon"/>
        <input
          type="search"
          value="Busca una película o serie"
          name=""
          className="search"
        />
      </div>
    </div>
  );
};

export default Cabecera;
