import React from "react";
import Cabecera from "../Components/Header/Cabecera";
import PiePagina from "../Components/Footer/PiePagina";
import PeliculasCard from "./../Components/PeliculasCard";
import './../Style/peliculas.css'

export default function Peliculas() {
  return (
    <>

        <Cabecera />
        <PeliculasCard />
        <PiePagina/>

    </>
    );
}
