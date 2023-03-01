import {Model} from "survey-core";
import {useCallback, useState} from "react";
import {Survey} from "survey-react-ui";
import Resultados8 from "../punto7/Resultados7";
import json from "../../utils/encuesta7";
import Resultados7 from "./Resultados7";
export default function Formulario7() {
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

            {encuestaCompleta && <Resultados7 arrayResp={respuestas}/>}
        </>
    );
}