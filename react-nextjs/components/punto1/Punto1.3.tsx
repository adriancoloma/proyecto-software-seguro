import React from "react";
import AccordionPersonal from "../Acordion";
export default function Punto1_3() {
    return (
        <div >
            <AccordionPersonal title="C) Requisitos de seguridad en la fase de diseño">
                <div>
                    <div><strong>KAOS (Knowledge Acquisition in automated Specification)</strong> es una metodología de ingeniería de requisitos que se enfoca en la adquisición de conocimiento y la especificación automatizada de requisitos de software.</div>
                    <div>En KAOS, la seguridad se considera como un atributo del sistema que debe ser analizado y especificado de manera sistemática. Para ello, se identifican los agentes que pueden afectar la seguridad del sistema, se modelan los objetivos de seguridad que se deben lograr y se especifican los requisitos necesarios para alcanzar esos objetivos.</div>
                    <div>Además, KAOS utiliza un enfoque de refinamiento de objetivos para especificar los requisitos de seguridad de manera más detallada y para identificar los componentes del sistema que deben ser protegidos. Este enfoque permite establecer una cadena de objetivos y subobjetivos de seguridad que se deben alcanzar para garantizar la seguridad del sistema en su conjunto.</div>
                    <div>KAOS es especialmente útil para proyectos que requieran un alto nivel de seguridad o son bastante complejos, sin embargo si se trata de un proyecto simple se puede proceder a  identificar los principales riesgos y amenazas a la seguridad y se especifican los requisitos de seguridad necesarios para mitigarlos, sin necesidad de utilizar el enfoque de refinamiento de objetivos que se utiliza en proyectos más grandes y complejos.</div>
                </div>
            </AccordionPersonal>
        </div>
    );
}