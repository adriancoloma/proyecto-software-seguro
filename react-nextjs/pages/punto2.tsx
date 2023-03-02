import Layout from "../components/Layout";

import React, {useState} from 'react';
import {Model} from 'survey-core';
import 'survey-core/defaultV2.min.css'
import dynamic from "next/dynamic";
import Acordion from "../components/Acordion";
import 'survey-core/defaultV2.min.css'
import json from '../utils/punto2/encuesta2'
import contenido from '../utils/punto2/contenido-punto2'




function Parrafo({parrafo}) {
    return (
        <p>{parrafo}</p>
    )
}

function Lista({lista}) {
    return (
        <ol>
            {lista.map((item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal, index: React.Key) => <li key={index}>{item}</li>)}
        </ol>
    )
}


export default function Punto5() {

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
                    {item.listaOrdenada && <Lista lista={item.listaOrdenada}/>}
                </Acordion>
            )
        })
    }

    const D_formulario8 = dynamic(() => import('../components/punto2/Formulario2'), {ssr: false});
    return (
        <Layout>
            <h1 style={{margin: '30px', textAlign:'center'}}>14.2.2 PROCEDIMIENTOS DE CONTROL DE CAMBIOS DEL SISTEMA </h1>
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
            <D_formulario8/>
        </Layout>
    );
}
