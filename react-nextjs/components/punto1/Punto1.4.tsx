import React from "react";
import AccordionPersonal from "../Acordion";

export default function Punto1_4() {
    return (
        <div >
            <AccordionPersonal title="D) Puntos de control de seguridad dentro de los hitos del proyecto">
                <h1>Puntos de Control de Seguridad en el Desarrollo de Software</h1>
                <div>Para garantizar la seguridad en el desarrollo de software, se establecerán varios puntos de control a lo largo de las fases de diseño, desarrollo y pruebas del sistema. Estos puntos de control se realizarán cuando se produzca algún entregable importante que sea utilizado en las fases siguientes.</div>
                <h2>Algunos puntos de control que se pueden implementar son:</h2>
                <ul>
                    <li>Análisis de riesgos al inicio del proyecto para identificar potenciales amenazas y cómo tratar dichas amenazas.</li>
                    <li>Análisis de diseño para verificar que los requisitos de seguridad han sido considerados en el diseño del sistema.</li>
                    <li>Realizar pruebas de seguridad tras un entregable importante relacionado con la funcionalidad del sistema.</li>
                    <li>Revisión periódica de los procesos para la gestión de incidentes en caso de que estos ocurran.</li>
                </ul>
            </AccordionPersonal>
        </div>
    );
}