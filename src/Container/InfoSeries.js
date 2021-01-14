import React from "react";
import Cabecera from "../Components/Header/Cabecera";
import InfoSerie from "../Components/infoSerie/InfoSerie";
import PiePagina from "../Components/Footer/PiePagina";

function infoSeries() {
  return (
    <>
      <Cabecera />
      <InfoSerie />
      <PiePagina />
    </>
  );
}

export default infoSeries;
