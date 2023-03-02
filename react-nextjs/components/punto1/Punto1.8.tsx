import React from "react";
import AccordionPersonal from "../Acordion";

export default function Punto1_8() {
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "80%" }}>
            <AccordionPersonal title="H) 8.	La capacidad del desarrollador para evitar, encontrar y corregir vulnerabilidades">
                <div>Los desarrolladores estarán sometidos a constantes revisiones de código por parte del Administrador del repositorio indicando las fallas de seguridad que puede estar presente en el código que escriben.</div>
                <div>Estas fallas serán remitidas al desarrollador el cual al recibir retro alimentación por parte de un experto será capaz de evitar, encontrar y corregir futuros errores similares.</div>
            </AccordionPersonal>
        </div>
    );
}