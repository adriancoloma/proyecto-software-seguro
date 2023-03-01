import {Model} from "survey-core";
import {useCallback, useState} from "react";
import {Survey} from "survey-react-ui";
import json from "../../utils/encuesta6";
import Resultados6 from "./Resultados6";
export default function Formulario6() {
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

            {encuestaCompleta && <Resultados6 arrayResp={respuestas}/>}
        </>
    );
}