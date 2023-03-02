import 'survey-core/modern.min.css';
import {Model} from 'survey-core';
import {Survey} from 'survey-react-ui';
import {useCallback, useState} from "react";
import Resultados5 from "./Resultados5";
import { Doughnut } from 'react-chartjs-2';



//Crea un modelo de encuesta que se selecciona sí o no para cada pregunta
const surveyJson = {
    elements: [
        {
            type: "radiogroup",
            name: "pregunta1",
            title: "¿Se implementaron los requisitos de la norma ISO/IEC 27001 para establecer un sistema de gestión de seguridad de la información en la organización? ¿Se identificaron los riesgos de seguridad de la información y se implementaron controles adecuados?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta2",
            title: "¿Se tomaron medidas para abordar las vulnerabilidades identificadas en la lista OWASP Top Ten? ¿Se implementaron medidas de seguridad en cada fase del ciclo de vida de las aplicaciones web, desde el diseño hasta el mantenimiento?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta3",
            title: "¿Se implementaron los controles de seguridad y prácticas recomendadas descritos en la guía NIST SP 800-53 para proteger los sistemas de información de la organización? ¿Se implementaron medidas de seguridad física y lógica y se estableció un control de acceso a los recursos de información?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta4",
            title: "¿Se utilizaron herramientas de seguridad de software, como SAST y DAST, para identificar vulnerabilidades de seguridad en las aplicaciones? ¿Se realizaron pruebas de seguridad en todas las fases del ciclo de vida de las aplicaciones, desde el diseño y el desarrollo hasta la implementación y el mantenimiento?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta5",
            title: "¿Se implemento medidas de seguridad para proteger la información y las aplicaciones de la organización?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }
    ]
};


export default function Formulario5() {
    const encuesta = new Model(surveyJson);

    const [encuestaCompleta, setEncuestaCompleta] = useState(false);
    const [respuestas, setRespuestas] = useState<boolean[]>([]);

    const resultadoAlert = useCallback((sender) => {
        const arregloResultados = Object.values(sender.data);
        const misRespuesta = arregloResultados.map((resp) => resp === "Sí");
        setRespuestas(misRespuesta);
        setEncuestaCompleta(true);
    }, []);

    encuesta.onComplete.add(resultadoAlert);
    return (
        <>
            {!encuestaCompleta && <Survey model={encuesta}/>}

            {encuestaCompleta && <Resultados5 arrayResp={respuestas}/>}
        </>
    );
}

function obtenerRespuestas(encuestaCompleta, encuestaRespuestas) {
    if (!encuestaCompleta) {
      return { numSí: 0, numNo: 0 };
    }
  
    const respuestas = encuestaRespuestas.map((respuesta) => respuesta === "Sí");
    const preguntas = surveyJson.elements;
  
    const numSí = preguntas.reduce((contador, pregunta, index) => {
      if (respuestas[index]) {
        return contador + 1;
      }
      return contador;
    }, 0);
  
    const numNo = preguntas.reduce((contador, pregunta, index) => {
      if (!respuestas[index]) {
        return contador + 1;
      }
      return contador;
    }, 0);
  
    const porcentajeSí = numSí / preguntas.length;
    const porcentajeNo = numNo / preguntas.length;
  
    const data = {
      labels: ["Sí", "No"],
      datasets: [
        {
          data: [porcentajeSí, porcentajeNo],
          backgroundColor: ["#36A2EB", "#FF6384"],
          hoverBackgroundColor: ["#36A2EB", "#FF6384"],
        },
      ],
    };
  
    let aviso = "";
    if (porcentajeSí < 0.6) {
      aviso = "El porcentaje de respuestas Sí es menor al 60%";
    } else if (porcentajeSí > 0.95) {
      aviso = "El porcentaje de respuestas Sí es mayor al 95%";
    }
  
    return { numSí, numNo, data, aviso };
  }
  
  export function Encuesta(props) {
    const { encuestaCompleta, encuestaRespuestas } = props;
    const { numSí, numNo, data, aviso } = obtenerRespuestas(encuestaCompleta, encuestaRespuestas);
  
    return (
      <div>
        <Doughnut data={data} />
        <p>Respuestas Sí: {numSí}</p>
        <p>Respuestas No: {numNo}</p>
        {aviso && <p>{aviso}</p>}
      </div>
    );
  }
  