const respuestas = [
    {
        id: 1,
        guia: "Una revisión de los procedimientos de integridad y control de aplicaciones es esencial para garantizar que no se hayan visto comprometidas las aplicaciones por cambios en la plataforma operativa",
        detalle: "Se debe implementar un proceso de revisión de de los procedieminto de integridad y control de las aplicaciones en caso de existir un cambio en las plataformas operativas"
    },
    {
        id: 2,
        guia: "Una correcta y oportuna notificación de cambios con tiempo suficiente para permitir las pruebas y revisiones adecuadas antes de la implementación permitirá que las aplicaciones se mantengan con alta disponibilidad.",
        detalle: "Se debe tener un canal de comunicación efectivo y oportuno entre el euipo de soporte y mantenimiento de infraestrutura como con del equipo de desarrollo y mantenimeinto de las aplicaciones."
    },
    {
        id: 3,
        guia: "Realizar los cambios apropiados dentro del plan de continuidad del negocio permitirá que la organización se alínee a las erglas del negocio en todos susu niveles de operación y organización.",
        detalle: "Se debe asegurar que se hayan realizado los cambios apropiados dentro del plan de continuidad del negocio."
    }
]
export default function Resultados3(props: {arrayResp: boolean[]}) {
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
            </tbody>
        </table>
    );
}