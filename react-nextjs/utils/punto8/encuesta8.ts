//Crea un modelo de encuesta que se selecciona sí o no para cada pregunta
export default {
    "title": "Encuesta de Pruebas de Seguridad del sistema",
    "pages": [
        {
            "questions": [
                {
                    title: "¿Se realizaron pruebas exhaustivas de seguridad durante el desarrollo del sistema?",
                    name: "q1",
                    type: "radiogroup",
                    isRequired: true,
                    choices: [
                        "Sí",
                        "No"
                    ]
                },
                {
                    title: "¿Se preparó un cronograma detallado de actividades para las pruebas de seguridad?",
                    type: "radiogroup",
                    name: "q2",
                    isRequired: true,
                    choices: [
                        "Sí",
                        "No"
                    ]
                }, {
                    type: "radiogroup",
                    name: "q3",
                    title: "¿Se crearon entradas y salidas de prueba detalladas para el sistema?",
                    isRequired: true,
                    choices: [
                        "Sí",
                        "No"
                    ]
                }, {
                    type: "radiogroup",
                    name: "q4",
                    title: "¿Se realizó una prueba de aceptación independiente para el sistema?",
                    isRequired: true,
                    choices: [
                        "Sí",
                        "No"
                    ]
                }, {
                    type: "radiogroup",
                    name: "q5",
                    title: "¿La extensión de las pruebas de seguridad fue proporcional a la importancia y naturaleza del sistema?",
                    isRequired: true,
                    choices: [
                        "Sí",
                        "No"
                    ]
                }
            ]
        }
    ]
}

