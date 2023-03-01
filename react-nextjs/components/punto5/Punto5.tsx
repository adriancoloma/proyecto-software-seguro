//import react
import React, {useEffect} from 'react';
import AccordeonDescripcion from "../AccordeonDescripcion";
import {IAcordeon} from "../../interfaces/IAcordeon";
//import Formulario8 from "./Formulario8";
import dynamic from "next/dynamic";
import Formulario5 from './Formulario5';

export default function Punto5() {
    let datosAcordeon: IAcordeon = {
        titulo1: "CONTROL",
        descripcion1: "Los principios para diseñar sistemas seguros deben establecerse, documentarse, mantenerse y aplicarse a cualquier esfuerzo de implementación de sistemas de información.",
        titulo2: "Guía de implementación",
        descripcion2: "La norma ISO/IEC 7002 describe los principios de ingeniería de sistemas seguros que deben aplicarse durante todo el ciclo de vida del sistema para garantizar que se desarrolle y mantenga de manera segura. A continuación se presenta una guía para implementar los principios de la norma ISO/IEC 7002: 1.	Establecer un plan de seguridad del sistema: Este plan debe describir cómo se implementarán los principios de la norma ISO/IEC 7002 durante todo el ciclo de vida del sistema, desde el análisis de requisitos hasta el mantenimiento y la retirada. 2.	Identificar los requisitos de seguridad: Los requisitos de seguridad deben identificarse desde el principio del ciclo de vida del sistema y deben tenerse en cuenta en todas las etapas del desarrollo. Se deben establecer objetivos de seguridad y definir los criterios de aceptación. 3.	Diseñar para la seguridad: El diseño del sistema debe tener en cuenta los requisitos de seguridad y se deben identificar las posibles amenazas y vulnerabilidades. Las contramedidas de seguridad adecuadas deben diseñarse e implementarse para proteger el sistema contra estas amenazas.4.	Implementar medidas de seguridad: Se deben implementar medidas de seguridad para proteger el sistema contra amenazas y ataques. Esto puede incluir la implementación de firewalls, encriptación de datos y controles de acceso.  5.	Verificar la seguridad del sistema: Se deben realizar pruebas de seguridad para verificar que el sistema cumple con los requisitos de seguridad establecidos y que las medidas de seguridad implementadas son efectivas. 6.	Documentar el proceso: Todo el proceso de desarrollo del sistema y las medidas de seguridad implementadas deben documentarse cuidadosamente para garantizar que se pueda verificar el cumplimiento con los requisitos de seguridad establecidos. 7.	Mantenimiento de la seguridad del sistema: La seguridad del sistema debe mantenerse a lo largo del tiempo. Esto incluye la actualización regular de las medidas de seguridad, la supervisión continua de los registros del sistema para detectar posibles amenazas y la implementación de parches de seguridad."
    }
    const D_Formulario5 = dynamic(() => import('./Formulario5'), {ssr: false});
    return (
        <>
            <h1 className={"fs-1"}> 14.2.5 PRINCIPIOS DE INGENIERIA DE SISTEMAS SEGUROS </h1>
            <AccordeonDescripcion {...datosAcordeon}></AccordeonDescripcion>
            <hr/>
            <h3 className={"fs-2"}>Formulario</h3>
            <D_Formulario5/>
        </>
    )
}