//import react
import React, {useEffect} from 'react';
import AccordeonDescripcion from "../AccordeonDescripcion";
import {IAcordeon} from "../../interfaces/IAcordeon";
//import Formulario8 from "./Formulario8";
import dynamic from "next/dynamic";

export default function Punto8() {
    let datosAcordeon: IAcordeon = {
        titulo1: "Control",
        descripcion1: "La prueba de la funcionalidad de seguridad debe llevarse a cabo durante el desarrollo.",
        titulo2: "Guía de implementación",
        descripcion2: "Los sistemas nuevos y actualizados requieren pruebas y verificaciones exhaustivas durante los procesos de desarrollo, incluida la preparación de un cronograma detallado de actividades y entradas de prueba y resultados esperados bajo una variedad de condiciones. Para los desarrollos internos, estas pruebas deben ser realizadas inicialmente por el equipo de desarrollo. Luego se deben realizar pruebas de aceptación independientes (tanto para desarrollos internos como externos) para garantizar que el sistema funcione como se espera y solo como se espera (ver 14.1.1 y 14.1.9). El alcance de las pruebas debe ser proporcional a la importancia y naturaleza del sistema."
    }
    const D_Formulario8 = dynamic(() => import('./Formulario8'), {ssr: false});
    return (
        <>
            <h1 className={"fs-1"}>Pruebas de seguridad del sistema</h1>
            <AccordeonDescripcion {...datosAcordeon}></AccordeonDescripcion>
            <hr/>
            <h3 className={"fs-2"}>Encuesta</h3>
            <D_Formulario8/>
        </>
    )
}