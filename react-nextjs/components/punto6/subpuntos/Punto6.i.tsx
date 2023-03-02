import React from "react";
import Accordion from "../../Acordion";


export default function Punto6i() {
    return (
        <div>
            <Accordion title="I) Control sobre el movimiento de datos desde y hacia el entorno.">
                <p>El control del movimieto puede variar según el tipo de entorno y los datos que se manejen, se presenta una lista de acciones para cualquier tipo de dato</p>
                <h4><strong>Políticas sobre Control de Movimiento de Datos</strong></h4>
                <ol>
                    <li>Todos los datos deben ser clasificados según su nivel de sensibilidad y deben ser etiquetados y marcados en consecuencia.
                        <p className="text-muted">Proporcionado en el punto: A) Sensibilidad de los datos a procesar, almacenar y transmitir por el sistema.</p>
                    </li>
                    <li>El movimiento de datos entre entornos debe estar autorizado y documentado previamente por los propietarios de los datos y los responsables de los entornos respectivos.</li>
                    <li>Los datos solo deben ser transferidos a entornos seguros y aprobados por los responsables de los datos y los entornos.</li>
                    <li>Los datos deben ser protegidos en tránsito mediante el uso de cifrado y protocolos de seguridad adecuados.</li>
                    <li>Se deben realizar registros de auditoría para todas las transferencias de datos entre entornos.</li>
                    <li>Los usuarios deben ser entrenados en las políticas y procedimientos de control de movimiento de datos.</li>
                    <li>Se deben realizar pruebas periódicas de vulnerabilidades y debilidades en el control de movimiento de datos y se deben abordar las deficiencias encontradas de manera oportuna.</li>
                    <li>Se deben tomar medidas de corrección y acción disciplinaria contra cualquier persona que viole las políticas de control de movimiento de datos.</li>
                </ol>
            </Accordion>
        </div>
    );
}