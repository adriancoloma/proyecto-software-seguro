export default {
    "title": "Encuesta de Proveedores Subcontratados",
    "pages": [
        {
            "questions": [
                {
                    "name": "q1",
                    "title": "¿Se han realizados cambios o modificaciones en los paquetes de software proporcionados por un proveedor?",
                    "type": "radiogroup",
                    "choices": [
                        "Sí",
                        "No"
                    ]
                },
                {
                    "name": "q2",
                    "title": "¿El proveedor se hacer cargo de las actualizaciones de los paquetes de software que provee?",
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
        guia: "Se debe tener en cuenta que existe:\n" +
            " Un riesgo de compromiso de los controles incorporados y los procesos de integridad\n" +
            " y la posible necesidad de consentimiento del proveedor.",
        detalle: "Se debe evitar realizar las modificaciones en los pquetes de software para evitar incompatibilidad con otros sistemas o futuros mantenimientos de las modificaciones por parte de la misma organización."
    },
    {
        id: 2,
        guia: "Se debe tomar en cuenta la posibilidad de obtener los cambios necesarios del proveedor como actualizaciones estándar del programa.",
        detalle: "Se debe mantener el software original y realizar cambios en la copia designada para evitar errores en caso de realizar modificaciones en los paquetes de software."
    }
]

// const surveyJson = {
//     elements: [
//         {
//             type: "radiogroup",
//             name: "pregunta1",
//             title: "¿Se han realizados cambios o modificaciones en los paquetes de software proporcionados por un proveedor?",
//             isRequired: true,
//             choices: [
//                 "Sí",
//                 "No"
//             ]
//         }, {
//             type: "radiogroup",
//             name: "pregunta2",
//             title: "¿El proveedor se hacer cargo de las actualizaciones de los paquetes de software que provee?",
//             isRequired: true,
//             choices: [
//                 "Sí",
//                 "No"
//             ]
//         }
//     ]
// };


// const respuestas = [
//     {
//         id: 1,
//         guia: "Se debe tener en cuenta que existe:\n" +
//             "\n1.\tUn riesgo de compromiso de los controles incorporados y los procesos de integridad\n" +
//             "2.\tLa posible necesidad de consentimiento del proveedor\n",
//         detalle: "Se debe evitar realizar las modificaciones en los pquetes de software para evitar incompatibilidad con otros sistemas o futuros mantenimientos de las modificaciones por parte de la misma organización"
//     },
//     {
//         id: 2,
//         guia: "Se debe tomar en cuenta la posibilidad de obtener los cambios necesarios del proveedor como actualizaciones estándar del programa.",
//         detalle: "Se debe mantener el software original y realizar cambios en la copia designada para evitar errores en caso de realizar modificaciones en los paquetes de software."
//     }
// ]