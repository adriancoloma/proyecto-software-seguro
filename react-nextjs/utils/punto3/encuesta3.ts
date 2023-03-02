export default {
    "title": "Encuesta de Proveedores Subcontratados",
    "pages": [
        {
            "questions": [
                {
                    "name": "q1",
                    "title": "¿Se realizó una revisión de los procedimientos de integridad y control de las aplicaciones?",
                    "type": "radiogroup",
                    "choices": [
                        "Sí",
                        "No"
                    ]
                },
                {
                    "name": "q2",
                    "title": "¿Se notificó los cambios de plataforma operativa con tiempo suficiente?",
                    "type": "radiogroup",
                    "choices": [
                        "Sí",
                        "No"
                    ]
                },
                {
                    "name": "q3",
                    "title": "¿Se realizó los cambios apropiados dentro del plan de continuidad del negocio?",
                    "type": "radiogroup",
                    "choices": [
                        "Sí",
                        "No"
                    ]
                }
            ]
        }
    ]
}

export const guias = [
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

// const respuestas = [
//     {
//         id: 1,
//         guia: "Una revisión de los procedimientos de integridad y control de aplicaciones es esencial para garantizar que no se hayan visto comprometidas las aplicaciones por cambios en la plataforma operativa",
//         detalle: "Se debe implementar un proceso de revisión de de los procedieminto de integridad y control de las aplicaciones en caso de existir un cambio en las plataformas operativas"
//     },
//     {
//         id: 2,
//         guia: "Una correcta y oportuna notificación de cambios con tiempo suficiente para permitir las pruebas y revisiones adecuadas antes de la implementación permitirá que las aplicaciones se mantengan con alta disponibilidad.",
//         detalle: "Se debe tener un canal de comunicación efectivo y oportuno entre el euipo de soporte y mantenimiento de infraestrutura como con del equipo de desarrollo y mantenimeinto de las aplicaciones."
//     },
//     {
//         id: 3,
//         guia: "Realizar los cambios apropiados dentro del plan de continuidad del negocio permitirá que la organización se alínee a las erglas del negocio en todos susu niveles de operación y organización.",
//         detalle: "Se debe asegurar que se hayan realizado los cambios apropiados dentro del plan de continuidad del negocio."
//     }
// ]
//

// const surveyJson = {
//     elements: [
//         {
//             type: "radiogroup",
//             name: "pregunta1",
//             title: "¿Se realizó una revisión de los procedimientos de integridad y control de las aplicaciones?",
//             isRequired: true,
//             choices: [
//                 "Sí",
//                 "No"
//             ]
//         }, {
//             type: "radiogroup",
//             name: "pregunta2",
//             title: "¿Se notificó los cambios de plataforma operativa con tiempo suficiente?",
//             isRequired: true,
//             choices: [
//                 "Sí",
//                 "No"
//             ]
//         }, {
//             type: "radiogroup",
//             name: "pregunta3",
//             title: "¿Se realizó los cambios apropiados dentro del plan de continuidad del negocio?",
//             isRequired: true,
//             choices: [
//                 "Sí",
//                 "No"
//             ]
//         }
//     ]
// };