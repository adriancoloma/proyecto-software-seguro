const respuestas = [
    {
        id: 1,
        guia: "Revisar la documentación de pruebas realizadas durante el desarrollo y confirmar si se realizó una prueba exhaustiva y verificación de la funcionalidad de seguridad.",
        detalle: "Se debe establecer un programa de prueba de aceptación en colaboración con el equipo de desarrollo y los usuarios finales para definir los criterios y procedimientos de prueba que se ajusten a la importancia y naturaleza del sistema."
    },
    {
        id: 2,
        guia: "",
        detalle: "Se debe definir criterios de prueba de aceptación para evaluar la seguridad y el cumplimiento de las prácticas de desarrollo de sistemas seguros."
    },
    {
        id: 3,
        guia: "",
        detalle: "Se debe realizar pruebas de los requisitos de seguridad de la información según lo especificado en el control 14.1.1 para evaluar si el sistema cumple con los requisitos de seguridad necesarios."
    },
    {
        id: 4,
        guia: "",
        detalle: "Se debe realizar pruebas para evaluar el cumplimiento de las prácticas de desarrollo de sistemas seguros según lo especificado en el control 14.2.1."
    },
    {
        id: 5,
        guia: "",
        detalle: "Se debe realizar pruebas de aceptación del sistema en los componentes recibidos y los sistemas integrados para asegurarse de que el sistema funciona de manera efectiva y segura"
    },
    {
        id: 6,
        guia: "",
        detalle: "Se debe utilizar herramientas automatizadas para verificar la corrección de los defectos relacionados con la seguridad y garantizar que el sistema sea seguro."
    },
    {
        id: 7,
        guia: "",
        detalle: "Se debe realizar pruebas de aceptación en proporción a la importancia y naturaleza del sistema para garantizar que se realicen las pruebas adecuadas y se cubran los riesgos de seguridad."
    },
    {
        id: 8,
        guia: "",
        detalle: "Se debe documentar los resultados de las pruebas de aceptación del sistema para poder analizar y evaluar los resultados de las pruebas y tomar medidas correctivas si"
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