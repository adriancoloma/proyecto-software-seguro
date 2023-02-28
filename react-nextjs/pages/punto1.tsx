import React, { useState } from 'react';
import {Model} from 'survey-core';
import {Survey} from 'survey-react-ui';
import 'survey-core/defaultV2.min.css'
import json from '../utils/encuesta9'

export default function Punto1() {
    const [surveyResult, setSurveyResult] = useState(null);
    const [numeroDeSi, setNumeroDeSi] = useState(0);
    const onCompleteSurvey = survey => {
        console.log("Survey results: " + JSON.stringify(survey.data));
        setSurveyResult(survey.data);
        setNumeroDeSi(contarNumeroDeSi())
    };

    function contarNumeroDeSi(): number{
        let contador = 0;
        for (let i = 1; i <= 9; i++) {
            if (surveyResult[`pregunta${i}`] == "Sí") {
                contador++;
            }
        }

        console.log(contador)
        console.log(surveyResult)
        return contador;
    }

    return (
        <>
            <h1>Cómo garantizar la seguridad en el desarrollo subcontratado: una guía para desarrolladores</h1>
            <p>
                El desarrollo subcontratado puede ser una opción atractiva para muchas empresas, ya que puede reducir los costos y el tiempo de desarrollo. Sin embargo, la subcontratación también implica un riesgo para la seguridad de la información y los sistemas de la empresa. Es por eso que es importante implementar medidas de seguridad adecuadas para proteger la información y los sistemas de la organización.

                En este artículo, te presentamos una guía para ayudarte a cumplir con el punto 14.2.7 de la norma ISO/IEC 27002, que se refiere a la gestión de la seguridad en el desarrollo subcontratado.

                Establece acuerdos contractuales claros y detallados: Antes de contratar los servicios de un proveedor subcontratado, asegúrate de establecer acuerdos contractuales claros y detallados que definan las responsabilidades del proveedor y de tu empresa. Estos acuerdos deben incluir medidas de seguridad para garantizar la confidencialidad, integridad y disponibilidad de la información que se comparte con el proveedor.

                Realiza una evaluación previa de la seguridad del proveedor subcontratado: Es importante que realices una evaluación previa de la seguridad del proveedor subcontratado antes de contratar sus servicios. Esta evaluación debe incluir una revisión de las políticas de seguridad, los controles de seguridad y las medidas de protección de la información que el proveedor tiene implementadas.

                Establece medidas de control para garantizar la seguridad de la información: Define medidas de control para garantizar la seguridad de la información que se comparte con el proveedor subcontratado. Estas medidas pueden incluir la definición de niveles de acceso a la información, la implementación de controles de acceso y la utilización de cifrado para proteger la información en tránsito.

                Define los requisitos de seguridad que el proveedor debe cumplir: Establece los requisitos de seguridad que el proveedor subcontratado debe cumplir para garantizar la seguridad de la información y los sistemas. Estos requisitos deben incluir medidas específicas de seguridad que el proveedor debe implementar para proteger la información y los sistemas.

                Establece un proceso de monitoreo y seguimiento continuo: Establece un proceso de monitoreo y seguimiento continuo de las actividades del proveedor subcontratado para garantizar el cumplimiento de los requisitos de seguridad establecidos. Este proceso debe incluir la revisión regular de los informes de actividad del proveedor y la realización de auditorías de seguridad periódicas.

                Implementar medidas de seguridad adecuadas en el desarrollo subcontratado puede ayudar a proteger la información y los sistemas de tu empresa. Si tienes dudas o necesitas ayuda para implementar estas medidas, no dudes en consultar con el equipo de seguridad de la información de tu empresa. Juntos, podemos garantizar la seguridad de la información y los sistemas en todo momento.
            </p>
            <div>
                {<Survey model={new Model(json)} onComplete={onCompleteSurvey}/>}
                {surveyResult && numeroDeSi> 5 && (
                    <div>
                        <h1>¡Felicitaciones!</h1>
                    </div>
                )}
                {surveyResult && numeroDeSi <= 5 && (
                    <div>
                        <h1>¡Lo sentimos!</h1>
                    </div>
                )}
            </div>
        </>
    );
}