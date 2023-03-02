import React from "react";
import AccordionPersonal from "../Acordion";

export default function Punto1_5() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <AccordionPersonal title="E) Repositorios Seguros">
                <div>Si estás utilizando Git Hub como cliente de Git para la gestión de tus repositorios, es importante que tomes en cuenta las siguientes medidas de seguridad:</div>

                <ul>
                    <li><strong>Uso de contraseñas seguras:</strong> asegúrate de utilizar contraseñas seguras de 8 caracteres o más, que contengan al menos 1 letra en mayúscula, 1 número y 1 carácter especial. Esto reducirá el riesgo de que alguien acceda a tus repositorios sin autorización.</li>

                    <li><strong>Autenticación de 2 factores:</strong> habilita la autenticación de 2 factores en todos tus repositorios. Esto te permitirá generar una llave de seguridad adicional para asegurar que sólo tú (o las personas autorizadas) puedan acceder a tus repositorios.</li>

                    <li><strong>Repositorios privados:</strong> por defecto, todos tus repositorios deben ser privados, a menos que decidas lo contrario. De esta forma, sólo las personas que tú autorices podrán acceder a tu código fuente y modificarlo.</li>
                </ul>

                <div>Es importante que tomes en serio la seguridad de tus repositorios. Siguiendo estas medidas, podrás tener la tranquilidad de que tu código está a salvo y protegido.</div>

            </AccordionPersonal>
        </div>
    );
}