import {Model} from "survey-core";
import {useCallback, useState} from "react";
import {Survey} from "survey-react-ui";
import Resultados8 from "../punto8/Resultados8";
import json from "../../utils/punto3/encuesta3";
import Resultados3 from "./Resultados3";
export default function Formulario3() {
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

            {encuestaCompleta && <Resultados3 arrayResp={respuestas}/>}
        </>
    );
}