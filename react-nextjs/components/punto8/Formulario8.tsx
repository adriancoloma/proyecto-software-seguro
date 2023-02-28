import 'survey-core/modern.min.css';
import {Model} from 'survey-core';
import {Survey} from 'survey-react-ui';
import {useCallback, useState} from "react";
import Resultados8 from "./Resultados8";


//Crea un modelo de encuesta que se selecciona sí o no para cada pregunta
const surveyJson = {
    elements: [
        {
            type: "radiogroup",
            name: "pregunta1",
            title: "¿Se realizaron pruebas exhaustivas de seguridad durante el desarrollo del sistema?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta2",
            title: "¿Se preparó un cronograma detallado de actividades para las pruebas de seguridad?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta3",
            title: "¿Se crearon entradas y salidas de prueba detalladas para el sistema?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta4",
            title: "¿Se realizó una prueba de aceptación independiente para el sistema?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta5",
            title: "¿La extensión de las pruebas de seguridad fue proporcional a la importancia y naturaleza del sistema?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }
    ]
};


export default function Formulario8() {
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

            {encuestaCompleta && <Resultados8 arrayResp={respuestas}/>}
        </>
    );
}