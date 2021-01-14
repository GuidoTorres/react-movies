import React from 'react'
import Cabecera from "../Components/Header/Cabecera";
import InfoPelicula from '../Components/InfoPelicula/InfoPelicula';
import PiePagina from "../Components/Footer/PiePagina";


function InfoPeli() {
    return (
        <>
        <Cabecera />
        <InfoPelicula/>
        <PiePagina />
    </>
    )
}

export default InfoPeli
