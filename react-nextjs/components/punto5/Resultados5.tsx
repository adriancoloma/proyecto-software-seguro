import React, {useEffect} from 'react';
import AccordeonDescripcion from "../AccordeonDescripcion";
import {IAcordeon} from "../../interfaces/IAcordeon";
import 'survey-core/modern.min.css';
import {Model} from 'survey-core';
import {Survey} from 'survey-react-ui';
//import Formulario8 from "./Formulario8";
import dynamic from "next/dynamic";
import Formulario5 from './Formulario5';



const respuestas = [
    {
        id: 1,
        guia: " Excelente, esto demuestra que la organización ha establecido un sistema de gestión de seguridad de la información y ha identificado los riesgos de seguridad de la información, y ha implementado controles adecuados para mitigarlos.",
        detalle: "La organización debe considerar implementar la norma ISO/IEC 27001 para establecer un sistema de gestión de seguridad de la información, lo que le permitirá identificar los riesgos de seguridad de la información y tomar medidas adecuadas para mitigarlos. La organización también puede considerar contratar a un consultor especializado en seguridad de la información para que le ayude en este proceso.",
        solucion: "Actividades por cumplir:•	Identificar los riesgos de seguridad de la información  •	Implementar controles de seguridad adecuados  •	Establecer políticas y procedimientos de seguridad     •	Realizar evaluaciones y revisiones periódicas del SGSI   •	Hay que asegurar que el personal esté capacitado en seguridad de la información.    "
    },
    {
        id: 2,
        guia: "Excelente, esto demuestra que la organización ha tomado medidas para abordar las vulnerabilidades identificadas en la lista OWASP Top Ten y ha implementado medidas de seguridad en cada fase del ciclo de vida de las aplicaciones web.",
        detalle: "La organización debe considerar implementar medidas de seguridad en cada fase del ciclo de vida de las aplicaciones web, desde el diseño hasta el mantenimiento. Esto puede incluir la realización de pruebas de seguridad en cada fase del ciclo de vida de las aplicaciones web para identificar posibles vulnerabilidades y tomar medidas para mitigarlas. La organización también puede considerar contratar a un especialista en seguridad de aplicaciones web para que le ayude en este proceso.",
        solucion: "Actividades por cumplir:   Tomar medidas contra vulnerabilidad:•	Ataque de inyección SQL •	Autenticación y gestión de sesiones defectuosas•	Exposición de datos sensibles  •	Implementar medidas de seguridad en cada fase del ciclo de vida de la aplicación, desde el diseño, desarrollo, implementación y el mantenimiento.  "
    },
    {
        id: 3,
        guia: "Excelente, esto demuestra que la organización ha implementado los controles de seguridad y prácticas recomendadas descritos en la guía NIST SP 800-53 para proteger sus sistemas de información, así como medidas de seguridad física y lógica, y ha establecido un control de acceso a los recursos de información.",
        detalle: "La organización debe considerar implementar los controles de seguridad y prácticas recomendadas descritos en la guía NIST SP 800-53 para proteger sus sistemas de información, así como medidas de seguridad física y lógica, y establecer un control de acceso a los recursos de información. Esto puede incluir la implementación de políticas y procedimientos para la gestión de contraseñas, la implementación de cortafuegos y la adopción de medidas para proteger la privacidad y confidencialidad de los datos de la organización.",
        solucion:  "Actividades por cumplir:  •	Implementar controles de seguridad y prácticas recomendadas para proteger los sistemas de información de la organización.  •	Implementación de medidas de seguridad física y lógica.	   •	Control de acceso a los recursos de información.  •	Gestión de riesgos y la respuesta a incidentes, entre otras cosas."
    },
    {
        id: 4,
        guia: "Excelente, la organización está haciendo bien al utilizar herramientas de seguridad de software para identificar vulnerabilidades en las aplicaciones. Es importante seguir realizando pruebas de seguridad en todas las fases del ciclo de vida de las aplicaciones para asegurarse de que se siguen cumpliendo los estándares de seguridad.",
        detalle: "La organización debería considerar la implementación de herramientas de seguridad de software, como SAST y DAST, para identificar vulnerabilidades de seguridad en las aplicaciones. También es importante realizar pruebas de seguridad en todas las fases del ciclo de vida de las aplicaciones, desde el diseño y el desarrollo hasta la implementación y el mantenimiento.",
        solucion:"Actividades por cumplir:   •	Utilizar herramientas de seguridad de software para identificar vulnerabilidades de seguridad en las aplicaciones•	SAST analiza el código fuente de la aplicación en busca de errores de programación y vulnerabilidades de seguridad   •	DAST realiza pruebas de penetración en la aplicación en ejecución para identificar posibles brechas de seguridad  •	Realizar pruebas de seguridad en todas las fases del ciclo de vida de la aplicación, desde el diseño y el desarrollo hasta la implementación y el mantenimiento. "
      
    },
    {
        id: 5,
        guia: "Excelente, la organización está haciendo bien al implementar medidas de seguridad para proteger la información y las aplicaciones. Es importante seguir evaluando y actualizando las medidas de seguridad para mantener la protección adecuada de los datos.",
        detalle: " La organización debe considerar la implementación de medidas de seguridad para proteger la información y las aplicaciones. Algunas posibles soluciones incluyen el establecimiento de controles de acceso adecuados, la implementación de medidas de seguridad física y lógica, y la realización de pruebas de seguridad regulares. Es importante evaluar y actualizar regularmente las medidas de seguridad para mantener una protección adecuada de los datos.",
         solucion: "Actividades por cumplir: •	Implementar medidas de seguridad física: Esto puede incluir la instalación de cámaras de seguridad, el control de acceso físico a las instalaciones y el uso de cerraduras de seguridad en los equipos y dispositivos que contienen información sensible. •	Implementar medidas de seguridad lógica: Esto puede incluir la implementación de firewalls, la encriptación de datos, la realización de copias de seguridad regulares y la monitorización continua de los sistemas.  •	Realizar pruebas de seguridad regulares: Esto puede incluir la realización de pruebas de penetración y pruebas de vulnerabilidades para identificar y abordar posibles brechas de seguridad. También se pueden realizar auditorías regulares para evaluar la efectividad de las medidas de seguridad implementadas. "
    }
]
export default function Resultados5(props: {arrayResp: boolean[]}) {
    const resp = props.arrayResp;
    const esCumplido = (resp: boolean) => {
        return resp ? "Cumplido" : "No cumplido"
        
    }
    
    

    return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col"># Pregunta</th>
              <th scope="col">Respuesta</th>
              {resp.includes(false) ? (
                <th scope="col">Detalle</th>
              ) : (
                <th scope="col">Guía de evaluación</th>
              )}
              <th scope="col">Detalle</th>
              {resp.some((r, i) => !r && respuestas[i].solucion) && (
                <th scope="col">Solución</th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{esCumplido(resp[0])}</td>
              {resp[0] ? <td>{respuestas[0].guia}</td> : <td></td>}
              <td>{!resp[0] && respuestas[0].detalle}</td>
              {!resp[0] && respuestas[0].solucion && (
                <td>{respuestas[0].solucion}</td>
              )}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{esCumplido(resp[1])}</td>
              {resp[1] ? <td>{respuestas[1].guia}</td> : <td></td>}
              <td>{!resp[1] && respuestas[1].detalle}</td>
              {!resp[1] && respuestas[1].solucion && (
                <td>{respuestas[1].solucion}</td>
              )}
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{esCumplido(resp[2])}</td>
              {resp[2] ? <td>{respuestas[2].guia}</td> : <td></td>}
              <td>{!resp[2] && respuestas[2].detalle}</td>
              {!resp[2] && respuestas[2].solucion && (
                <td>{respuestas[2].solucion}</td>
              )}
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>{esCumplido(resp[3])}</td>
              {resp[3] ? <td>{respuestas[3].guia}</td> : <td></td>}
              <td>{!resp[3] && respuestas[3].detalle}</td>
              {!resp[3] && respuestas[3].solucion && (
                <td>{respuestas[3].solucion}</td>
              )}
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>{esCumplido(resp[4])}</td>
              {resp[4] ? <td>{respuestas[4].guia}</td> : <td></td>}
              <td>{!resp[4] && respuestas[4].detalle}</td>
              {!resp[4] && respuestas[4].solucion &&(
                <td>{respuestas[4].solucion}</td>
              )}
                    
                    
                </tr>
            </tbody>
        </table>
        
    );
    
    


    


}

