import React from "react";
import Cabecera from "../Components/Header/Cabecera";
import PiePagina from "../Components/Footer/PiePagina";
import SeriesCard from "./../Components/SeriesCard";

import './../Style/series.css'

export default function Series() {
  return (

    <>
        <Cabecera />
        <SeriesCard />
        <PiePagina />

    </>

  );
}
