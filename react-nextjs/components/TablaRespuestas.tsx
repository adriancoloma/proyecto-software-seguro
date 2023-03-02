import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'

function FilaTabla({numPregunta, respuesta, guiaEvaluacion, detalle}:
                        {numPregunta: number, respuesta: string, guiaEvaluacion: string, detalle: string}){
    return (
        <TableRow>
            <TableCell>{numPregunta}</TableCell>
            <TableCell>{respuesta}</TableCell>
            <TableCell>{guiaEvaluacion}</TableCell>
            <TableCell>{detalle}</TableCell>
        </TableRow>

    )
}

export default function TablaRespuestas({arrayResp, guias}) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell># Pregunta</TableCell>
                    <TableCell>Respuesta</TableCell>
                    <TableCell>Guía de evaluación</TableCell>
                    <TableCell>Detalle</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {arrayResp.map((resp, index) => {
                    const esCumplido = resp ? "Cumplido" : "No cumplido";
                    const detalle = resp ? "" : guias[index].detalle;
                    return <FilaTabla numPregunta={index + 1} respuesta={esCumplido} guiaEvaluacion={guias[index].guia} detalle={detalle}/>
                })
                }
            </TableBody>
        </Table>
    )
}