import {IAcordeon} from "../../interfaces/IAcordeon";
import React from "react";
import AccordeonDescripcion from "../AccordeonDescripcion";
import dynamic from "next/dynamic";

export default function Punto9() {

    const generarSaltoLinea = (texto: string) => {
        const convertido = texto.replace(/\n/g, " <br />")
        console.log(convertido);
        return convertido;
    }
    let datosAcordeon: IAcordeon = {
        titulo1: "Control",
        descripcion1: "Deben establecerse programas de prueba de aceptación y criterios relacionados para nuevos sistemas de información, actualizaciones y nuevas versiones.",
        titulo2: "Guía de implementación",
        descripcion2: "Las pruebas de aceptación del sistema deben incluir la prueba de los requisitos de seguridad de la información (consulte 14.1.1 y 14.1.2) y el cumplimiento de las prácticas de desarrollo de sistemas seguros (consulte 14.2.1). Las pruebas también deben realizarse en los componentes recibidos y los sistemas integrados. Las organizaciones pueden aprovechar las herramientas automatizadas, como las herramientas de análisis de código o los escáneres de vulnerabilidades, y deben verificar la corrección de los defectos relacionados con la seguridad.\n" +
            "\n" +
            "Las pruebas deben realizarse en un entorno de prueba realista para garantizar que el sistema no introduzca\n" +
            "vulnerabilidades al entorno de la organización y que las pruebas sean fiables."
    }

    const D_Formulario9 = dynamic(() => import('./Formulario9'), {ssr: false});
    return (
        <>
            <h1 className={"fs-1"}>Pruebas de aceptación del sistema</h1>
            <AccordeonDescripcion {...datosAcordeon}></AccordeonDescripcion>
            <hr/>
            <h3 className={"fs-2"}>Encuesta</h3>
            <D_Formulario9/>
        </>
    );
}