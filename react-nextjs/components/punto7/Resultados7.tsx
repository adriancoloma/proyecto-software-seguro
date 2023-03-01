import {guias} from "../../utils/encuesta7";

function FilaTabla7({numPregunta, respuesta, guiaEvaluacion, detalle}:
    {numPregunta: number, respuesta: string, guiaEvaluacion: string, detalle: string}){
    return (
        <tr>
            <th scope="row">{numPregunta}</th>
            <td>{respuesta}</td>
            <td>{guiaEvaluacion}</td>
            <td>{detalle}</td>
        </tr>
    )
}

export default function Resultados7({arrayResp}: {arrayResp: boolean[]}){
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col"># Pregunta</th>
                <th scope="col">Respuesta</th>
                <th scope="col">Pregunta</th>
                <th scope="col">Detalle</th>
            </tr>
            </thead>
            <tbody>
            {arrayResp.map((resp, index) => {
                const esCumplido = resp ? "Cumplido" : "No cumplido";
                const detalle = resp ? "" : guias[index].detalle;
                return <FilaTabla7 numPregunta={index + 1} respuesta={esCumplido} guiaEvaluacion={guias[index].guia} detalle={detalle}/>
            })
            }
            </tbody>
        </table>
    )
}