import React from "react";
import Cabecera from "../Components/Header/Cabecera";
import Carousel from "../Components/Home/Carousel";
import PiePagina from "../Components/Footer/PiePagina";
import TopRated from "../Components/TopRated";


export default function Inicio() {
  return (
    <>
        <Cabecera />
        <Carousel />
        <TopRated/>
        <PiePagina />
    </>
  );
}
