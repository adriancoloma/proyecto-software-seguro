import React from "react";
import AccordionPersonal from "../Acordion";

export default function Punto1_6() {
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "80%" }}>
            <AccordionPersonal title="F) Seguridad en el control de versiones">
                <div>Realizar backups de manera periódica cada vez que se realice una integración a la rama principal o “master” del repositorio en GitHub, dicho cambio debe  referenciar la fecha y la documentación adjunta de las versiones del sistema al momento de la integración.</div>
            </AccordionPersonal>
        </div>
    );
}