import 'survey-core/modern.min.css';
import {Model} from 'survey-core';
import {Survey} from 'survey-react-ui';
import {useCallback, useState} from "react";
import { Doughnut } from 'react-chartjs-2';
import json from "../../utils/punto2/encuesta2";
import Resultados5 from "./Resultados2";

export default function Formulario5() {
    
  const encuesta = new Model(json);

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