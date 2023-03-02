export default {
  "title": "Encuesta de seguimiento 14.2.6 entorno de desarrollo seguro ",
  "pages": [
    {
      "questions": [
        {
          "name": "q1",
          "title": "¿Se ha identificado la sensibilidad de los datos a procesar, almacenar y transmitir por el sistema?",
          "type": "radiogroup",
          "choices": [
            "Sí",
            "No"
          ]
        },
        {
          "name": "q2",
          "title": "¿Se han identificado los requisitos externos e internos aplicables, por ejemplo, de reglamentos o políticas?",
          "type": "radiogroup",
          "choices": [
            "Sí",
            "No"
          ]
        },
        {
          "name": "q3",
          "title": "¿Se han seguido los controles de seguridad ya implementados por la organización que apoyan el desarrollo del sistema?",
          "type": "radiogroup",
          "choices": [
            "Sí",
            "No"
          ]
        },
        {
          "name": "q4",
          "title": "¿Se ha identificado La fiabilidad del personal que trabaja en el entorno?",
          "type": "radiogroup",
          "choices": [
            "Sí",
            "No"
          ]
        },
        {
          "name": "q5",
          "title": "¿Se ha definido y analisado la necesidad de segregación entre diferentes entornos de desarrollo?",
          "type": "radiogroup",
          "choices": [
            "Sí",
            "No"
          ]
        },
        {
          "name": "q6",
          "title": "¿Se ha implementado un control del acceso al entorno de desarrollo?",
          "type": "radiogroup",
          "choices": [
            "Sí",
            "No"
          ]
        },
        {
          "name": "q7",
          "title": "¿Se monitorea el cambio en el entorno y el código almacenado en el mismo? ",
          "type": "radiogroup",
          "choices": [
            "Sí",
            "No"
          ]
        },
        {
          "name": "q8",
          "title": "¿Se han implementado copias de seguridad que se almacenan en ubicaciones seguras fuera del sitio?",
          "type": "radiogroup",
          "choices": [
            "Sí",
            "No"
          ]
        },
        {
          "name": "q9",
          "title": "¿Se han implementado el control sobre el movimiento de datos desde y hacia el entorno?",
          "type": "radiogroup",
          "choices": [
            "Sí",
            "No"
          ]
        },
        {
          "name": "q10",
          "title": "¿Se ha controlado y definido grado de subcontratación asociado con el desarrollo del sistema?",
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
    guia: "¿Se ha identificado la sensibilidad de los datos a procesar, almacenar y transmitir por el sistema?",
    detalle: "Se debe realizar una revisión exhaustiva de la información que se procesará, almacenará y transmitirá en el sistema de desarrollo para identificar la información sensible y aplicar medidas de seguridad adecuadas, como la encriptación y la autenticación, para protegerla."
  },
  {
    id: 2,
    guia: "¿Se han identificado los requisitos externos e internos aplicables, por ejemplo, de reglamentos o políticas?",
    detalle: "Se deben identificar las políticas establecidas así como los reglamentos establecidos por la organización."
  },
  {
    id: 3,
    guia: "¿Se han seguido los controles de seguridad ya implementados por la organización que apoyan el desarrollo del sistema?",
    detalle: "Se deben implementar controles de seguridad adecuados, como el control de acceso, la autenticación y la encriptación, para proteger el sistema de desarrollo contra amenazas y riesgos."
  },
  {
    id: 4,
    guia: "¿Se ha identificado La fiabilidad del personal que trabaja en el entorno?",
    detalle: "Se debe realizar una evaluación de integridad del personal, como verificaciones de antecedentes y referencias, para asegurarse de que el personal que trabaja en el ambiente de desarrollo es confiable y de confianza."
  },
  {
    id: 5,
    guia: "¿Se ha definido y analizado la necesidad de segregación entre diferentes entornos de desarrollo?",
    detalle: "Se debe analizar la posibilidad de aplicar segregacion dependiendo de la naturaleza del proyecto. "
  },
  {
    id: 6,
    guia: "¿Se ha implementado un control del acceso al entorno de desarrollo?",
    detalle: "Se debe implementar un control de acceso adecuado, como la autenticación y la autorización, para garantizar que solo las personas autorizadas tengan acceso al ambiente de desarrollo."
  },
  {
    id: 7,
    guia: "¿Se monitorea el cambio en el entorno y el código almacenado en el mismo?",
    detalle: "El progreso del proyecto tanto el cambio de entorno como el código desarrollado mediante el sistema de control de versiones git, usando la técnica de pull request en GitHub"
  },
  {
    id: 8,
    guia: "¿Se han implementado copias de seguridad que se almacenan en ubicaciones seguras fuera del sitio?",
    detalle: "Se debe implementar copias de seguridad para los proyecto usando la versión para empresas de GitHub ya que nos permite usar controles de seguridad y seguridad avanzada."
  },
  {
    id: 9,
    guia: "¿Se han implementado el control sobre el movimiento de datos desde y hacia el entorno?",
    detalle: "Se debe implementar un control de movimiento de datos entre entornos debe estar autorizado y documentado previamente por los propietarios de los datos y los responsables de los entornos respectivos"
  },
  {
    id: 10,
    guia: "¿Se ha controlado y definido grado de subcontratación asociado con el desarrollo del sistema?",
    detalle: "Se debe realizar una evaluación exhaustiva de los proveedores antes de contratar sus servicios, incluyendo una revisión de sus políticas de seguridad y cumplimiento"
  },
]
