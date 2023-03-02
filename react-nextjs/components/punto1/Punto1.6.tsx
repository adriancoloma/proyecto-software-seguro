import React from "react";
import Accordion from "../Acordion";

export default function Punto1_6() {
    return (
        <div>
            <Accordion title="F) Seguridad en el control de versiones">
                <p>Realizar backups de manera periódica cada vez que se realice una integración a la rama principal o “master” del repositorio en GitHub, dicho cambio debe  referenciar la fecha y la documentación adjunta de las versiones del sistema al momento de la integración.</p>
            </Accordion>
        </div>
    );
}