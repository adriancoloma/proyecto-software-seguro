import 'survey-core/modern.min.css';
import {Model} from 'survey-core';
import {Survey} from 'survey-react-ui';
import {useCallback, useState} from "react";
import Resultados9 from "./Resultados9";

//Crea un modelo de encuesta que se selecciona sí o no para cada pregunta
const listaPreguntas = [
    "¿Se establecen programas de prueba de aceptación para nuevos sistemas de información, actualizaciones y nuevas versiones?",
    "¿Se definen criterios de prueba de aceptación relacionados con los nuevos sistemas de información, actualizaciones y nuevas versiones?",
    "¿Las pruebas de aceptación del sistema incluyen pruebas de los requisitos de seguridad de la información según lo especificado en el control 14.1.1?",
    "¿Las pruebas de aceptación del sistema incluyen pruebas del cumplimiento de las prácticas de desarrollo de sistemas seguros según lo especificado en el control 14.2.1?",
    "¿Se realizan pruebas de aceptación del sistema en los componentes recibidos y los sistemas integrados?",
    "¿Se utilizan herramientas automatizadas, como herramientas de análisis de código o escáneres de vulnerabilidades, para verificar la corrección de los defectos relacionados con la seguridad?",
    "¿Las pruebas de aceptación se realizan en proporción a la importancia y naturaleza del sistema?",
    "¿Se documentan los resultados de las pruebas de aceptación del sistema?"
]

const surveyJson = {
    elements:
        listaPreguntas.map((pregunta, index) => {
            return {
                type: "radiogroup",
                name: "pregunta" + (index + 1),
                title: pregunta,
                isRequired: true,
                choices: [
                    "Sí",
                    "No"
                ]
            }
        })

}


export default function Formulario9() {
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

            {encuestaCompleta && <Resultados9 arrayResp={respuestas}/>}
        </>
    );
}