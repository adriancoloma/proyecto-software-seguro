import React, {useState} from 'react';
import {Model} from 'survey-core';

import 'survey-core/defaultV2.min.css'
import contenido from '../utils/punto3/contenido-punto3'
import dynamic from "next/dynamic";
import Acordion from "../components/Acordion";
import Layout from "../components/Layout";

function Parrafo({parrafo}) {
    return (
        <div>{parrafo}</div>
    )
}

function Lista({lista}) {
    return (
        <ol>
            {lista.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    )
}


export default function Punto3() {

    const [surveyResult, setSurveyResult] = useState(null);
    const [numeroDeSi, setNumeroDeSi] = useState(0);
    const onCompleteSurvey = survey => {
        console.log("Survey results: " + JSON.stringify(survey.data));
        setSurveyResult(survey.data);
        setNumeroDeSi(contarNumeroDeSi())
    };

    function contarNumeroDeSi(): number {
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


    function renderizarContenido() {
        return contenido.map(item => {
            return (
                <Acordion title={item.titulo}>
                    {item.parrafos && item.parrafos.map(parrafo => <Parrafo parrafo={parrafo}/>)}

                </Acordion>
            )
        })
    }

    const D_formulario3 = dynamic(() => import('../components/punto3/Formulario3'), {ssr: false});
    return (
        <Layout>
            <h1 style={{margin: '30px', textAlign:'center'}}>Revisión técnica de aplicaciones tras cambio de plataforma operativa</h1>
            {renderizarContenido()}
            <div>
                {surveyResult && numeroDeSi > 5 && (
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
            <hr/>
            <D_formulario3/>
        </Layout>
    );
}
