const respuestas = [
    {
        id: 1,
        guia: " Las pruebas exhaustivas de seguridad son necesarias para identificar y corregir posibles vulnerabilidades en el sistema antes de su implementación.",
        detalle: "Se debe implementar un proceso de pruebas para identificar y corregir los problemas de seguridad"
    },
    {
        id: 2,
        guia: "Un cronograma detallado de actividades es necesario para asegurar que todas las pruebas de seguridad se realizan adecuadamente y en el momento adecuado durante el proceso de desarrollo.",
        detalle: "Se debe preparar un cronograma detallado de actividades para las pruebas de seguridad."
    },
    {
        id: 3,
        guia: "Las entradas y salidas de prueba detalladas son necesarias para asegurar que todas las funciones del sistema se prueben de manera adecuada.",
        detalle: "Se deben crear entradas y salidas de prueba detalladas para el sistema."
    },
    {
        id: 4,
        guia: "Las pruebas de aceptación independientes son necesarias para asegurar que el sistema funcione como se espera y solo como se espera.",
        detalle: "Se deben realizar pruebas de aceptación independientes para el sistema."
    },
    {
        id: 5,
        guia: "La extensión de las pruebas de seguridad debe ser proporcional a la importancia y naturaleza del sistema.",
        detalle: "Se deben ajustar las pruebas de seguridad para que sean proporcionales a la importancia y naturaleza del sistema."
    }
]
export default function Resultados1_3(props: {arrayResp: boolean[]}) {
    const resp = props.arrayResp;
    const esCumplido = (resp: boolean) => {
        return resp ? "Cumplido" : "No cumplido"
    }

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col"># Pregunta</th>
                <th scope="col">Respuesta</th>
                <th scope="col">Guía de evaluación</th>
                <th scope="col">Detalle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>{esCumplido(resp[0])}</td>
                <td>{respuestas[0].guia}</td>
                <td>{!resp[0] && respuestas[0].detalle}</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>{esCumplido(resp[1])}</td>
                <td>{respuestas[1].guia}</td>
                <td>{!resp[1] && respuestas[1].detalle}</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>{esCumplido(resp[2])}</td>
                <td>{respuestas[2].guia}</td>
                <td>{!resp[2] && respuestas[2].detalle}</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>{esCumplido(resp[3])}</td>
                <td>{respuestas[3].guia}</td>
                <td>{!resp[3] && respuestas[3].detalle}</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>{esCumplido(resp[4])}</td>
                <td>{respuestas[4].guia}</td>
                <td>{!resp[4] && respuestas[4].detalle}</td>
            </tr>
            </tbody>
        </table>
    );
}