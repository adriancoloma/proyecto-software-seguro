import React from "react";
import Accordion from "../../Acordion";


export default function Punto6e() {
    return (
        <div>
            <Accordion title="E) La necesidad de segregación entre diferentes entornos de desarrollo.">
                <p>La segregación entre diferentes entornos de desarrollo se refiere a la práctica de separar los diferentes ambientes en los que se trabaja en un proyecto de software, con el objetivo de evitar problemas y riesgos en el desarrollo y despliegue de la aplicación.</p>
                <ol type="1">
                    <li>Definir los diferentes entornos de desarrollo necesarios.
                        <br />
                        <p>Para cada proyecto de la organización son:
                            <ul>
                                <li>Desarrollo</li>
                                <li>Pruebas</li>
                                <li>Preproducción</li>
                                <li>Producción</li>
                            </ul>
                        </p>
                    </li>
                    <li>Establecer políticas de acceso y permisos para cada entorno, limitando el acceso solo a las personas autorizadas.</li>
                    <li>Asegurarse de que los datos y recursos en cada entorno estén debidamente protegidos y no sean accesibles por otros usuarios o entornos no autorizados.</li>
                    <li>Establecer políticas de copias de seguridad y restauración de datos en cada entorno.</li>
                    <li>Establecer políticas de control de versiones y manejo de cambios en cada entorno usando git.</li>
                    <li>Establecer políticas para la integración y pruebas entre los diferentes entornos, asegurándose de que los cambios sean debidamente validados antes de ser implementados en producción.</li>
                </ol>
            </Accordion>
        </div>
    );
}