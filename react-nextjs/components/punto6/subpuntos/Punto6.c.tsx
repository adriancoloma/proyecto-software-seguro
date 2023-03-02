import React from "react";
import Accordion from "../../Acordion";


export default function Punto6c() {
    return (
        <div>
            <Accordion title="C) Controles de seguridad ya implementados por la organización que apoyan el desarrollo del sistema.">
                <h6><strong>Políticas de seguridad de la información </strong></h6>
                <div>Se conforma de una serie de reglas o pautas establecidas sobre aspectos específicos de la seguridad de la información, en este caso de dividen de la siguiente manera </div>
                <h6><strong>Organización de la seguridad</strong></h6>
                <div>Gestión de la seguridad de la información dentro de la organización en el cual se genera un marco gerencial para el control, implementación y seguimiento.</div>

                <u>Comisión de la seguridad de la información </u>
                <div><br /></div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Área</th>
                            <th>Representante</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Recursos Humanos</td>
                            <td>Gerente general</td>
                        </tr>
                        <tr>
                            <td>Seguridad Física</td>
                            <td>Representante escogido</td>
                        </tr>
                        <tr>
                            <td>Seguridad de la información</td>
                            <td>2 representantes titulares elegidos</td>
                        </tr>
                        <tr>
                            <td>Asuntos jurídicos</td>
                            <td>Representante legal de la organización</td>
                        </tr>
                    </tbody>
                </table>

                <div>Las funciones principales por realizar en la empresa son:</div>
                <ul>
                    <li>Revisar y aprobar políticas, reglamentos, así como de las responsabilidades generales acerca de la seguridad de la información.</li>
                    <li>Analizar y monitorear cambios en la adquisición, exposición y liquidación de activos frente a amenazas.</li>
                    <li>Acordar metodologías y procesos específicos acerca de la seguridad de la información.</li>
                    <li>Garantizar que la seguridad de la información sea parte de los procesos de la planificación de proyectos.</li>
                    <li>Apoyar y divulgar conocimientos acerca de la seguridad de la información dentro de la organización.</li>
                    <li>Evaluar, refactorizar y coordinar las distintas implantaciones de control específicas dentro de la seguridad de la información.</li>
                </ul>

                <h6><strong>Clasificación y control de activos </strong></h6>
                <div>Los representantes de la seguridad de la información identificasen los activos mas relevantes de la organización asi como de sus sistemas a desarrollar, tomando medidas con sus respectivos propietarios. Estos representantes realizaran un inventario con la información correspondiente y será actualizada, analizada y modificada (de ser necesario) en un periodo mensual. </div>

                <u>Confidencialidad </u>
                <div><br /></div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Cuantificador</th>
                            <th>Dato</th>
                            <th>Uso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>Público</td>
                            <td>Público</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Interno</td>
                            <td>Clasificada: uso interno</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Confidencial</td>
                            <td>Clasificada: uso confidencial</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Crítico</td>
                            <td>Clasificada: uso secreto</td>
                        </tr>
                    </tbody>
                </table>

                <u>Integridad</u>
                <div><br /></div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Cuantificador</th>
                            <th>Detección</th>
                            <th>Impacto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>No detectada</td>
                            <td>No afecta la operatoria de la organización</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>No detectada</td>
                            <td>Podría ocasionar pérdidas leves a la organización o a terceros</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>No detectada</td>
                            <td>Podría ocasionar pérdidas significativas a la organización o a terceros</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>No detectada</td>
                            <td>Podría ocasionar pérdidas graves a la organización o a terceros</td>
                        </tr>
                    </tbody>
                </table>


                <u>Disponibilidad</u>
                <div><br /></div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Cuantificador</th>
                            <th>Estado</th>
                            <th>Impacto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>No accesible</td>
                            <td>No afecta la operatoria de la organización</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>No accesible</td>
                            <td>Podría ocasionar pérdidas leves a la organización o a terceros</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>No accesible</td>
                            <td>Podría ocasionar pérdidas significativas a la organización o a terceros</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>No accesible</td>
                            <td>Podría ocasionar pérdidas graves a la organización o a terceros</td>
                        </tr>
                    </tbody>
                </table>


            </Accordion>
        </div>
    );
}