const respuestas = [
    {
        id: 1,
        guia: "Es importante que se definan criterios de prueba de aceptación para nuevos sistemas de información, actualizaciones y nuevas versiones para asegurar que estos cumplan con los requisitos de seguridad de la información y con las prácticas de desarrollo de sistemas seguros.",
        detalle: "Se deben establecer criterios de prueba de aceptación relacionados con los nuevos sistemas de información, actualizaciones y nuevas versiones."
    },
    {
        id: 2,
        guia: "Las pruebas de aceptación del sistema deben incluir componentes recibidos y sistemas integrados para asegurar que estos no introduzcan vulnerabilidades al entorno de la organización y que el sistema completo funcione correctamente.",
        detalle: "Se deben realizar pruebas de aceptación del sistema en los componentes recibidos y los sistemas integrados."
    },
    {
        id: 3,
        guia: "Las herramientas automatizadas pueden ser útiles para verificar la corrección de los defectos relacionados con la seguridad en el sistema.",
        detalle: "Se deben considerar el uso de herramientas automatizadas, como herramientas de análisis de código o escáneres de vulnerabilidades, para verificar la corrección de los defectos relacionados con la seguridad."
    },
    {
        id: 4,
        guia: "Es importante que las pruebas de aceptación sean proporcionales a la importancia y naturaleza del sistema. Esto asegura que se prueben adecuadamente los requisitos de seguridad de la información y las prácticas de desarrollo de sistemas seguros para el sistema en cuestión.",
        detalle: "Se deben ajustar las pruebas de aceptación para que sean proporcionales a la importancia y naturaleza del sistema."
    },
    {
        id: 5,
        guia: "La documentación de los resultados de las pruebas de aceptación del sistema es importante para llevar un registro de las pruebas realizadas y sus resultados, así como para facilitar la identificación y corrección de problemas de seguridad.",
        detalle: "Se deben documentar los resultados de las pruebas de aceptación del sistema."
    }
]
export default function Resultados9(props: { arrayResp: boolean[] }) {
    const resp = props.arrayResp;
    const esCumplido = (resp: boolean) => {
        return resp ? "Cumplido" : "No cumplido"
    }

    const numRespuestas = respuestas.length;

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
            {
                respuestas.map((respuesta, index) => {
                    return (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{esCumplido(resp[index])}</td>
                            <td>{respuesta.guia}</td>
                            <td>{!resp[index] && respuesta.detalle}</td>
                        </tr>
                    )

                })
            }

            </tbody>
        </table>
    );
}