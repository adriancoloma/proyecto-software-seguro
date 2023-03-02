export default {
  "title": "Encuesta de Proveedores Subcontratados",
  "pages": [
    {
      "questions": [
        {
            type: "radiogroup",
            name: "pregunta1",
            title: "¿Se implementaron los requisitos de la norma ISO/IEC 27001 para establecer un sistema de gestión de seguridad de la información en la organización? ¿Se identificaron los riesgos de seguridad de la información y se implementaron controles adecuados?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta2",
            title: "¿Se tomaron medidas para abordar las vulnerabilidades identificadas en la lista OWASP Top Ten? ¿Se implementaron medidas de seguridad en cada fase del ciclo de vida de las aplicaciones web, desde el diseño hasta el mantenimiento?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta3",
            title: "¿Se implementaron los controles de seguridad y prácticas recomendadas descritos en la guía NIST SP 800-53 para proteger los sistemas de información de la organización? ¿Se implementaron medidas de seguridad física y lógica y se estableció un control de acceso a los recursos de información?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta4",
            title: "¿Se utilizaron herramientas de seguridad de software, como SAST y DAST, para identificar vulnerabilidades de seguridad en las aplicaciones? ¿Se realizaron pruebas de seguridad en todas las fases del ciclo de vida de las aplicaciones, desde el diseño y el desarrollo hasta la implementación y el mantenimiento?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
        }, {
            type: "radiogroup",
            name: "pregunta5",
            title: "¿Se implemento medidas de seguridad para proteger la información y las aplicaciones de la organización?",
            isRequired: true,
            choices: [
                "Sí",
                "No"
            ]
          },
          
          ]
        }
      ]
    }

export const guias = [
  {
    id: 1,
    guia: "¿Se ha identificado la información sensible que se procesará, almacenará y transmitirá en el sistema de desarrollo?",
    detalle: "Se debe realizar una revisión exhaustiva de la información que se procesará, almacenará y transmitirá en el sistema de desarrollo para identificar la información sensible y aplicar medidas de seguridad adecuadas, como la encriptación y la autenticación, para protegerla."
  },
  {
    id: 2,
    guia: "¿Se han identificado los requisitos aplicables externos e internos en relación con la seguridad de la información del sistema de desarrollo?",
    detalle: "Se deben identificar los requisitos de seguridad aplicables externos e internos, como las políticas y regulaciones gubernamentales, para asegurarse de que se cumplan todos los requisitos de seguridad pertinentes."
  },
  {
    id: 3,
    guia: "¿Se han implementado controles de seguridad adecuados para proteger el sistema de desarrollo?",
    detalle: "Se deben implementar controles de seguridad adecuados, como el control de acceso, la autenticación y la encriptación, para proteger el sistema de desarrollo contra amenazas y riesgos."
  },
  {
    id: 4,
    guia: "¿Se ha evaluado la integridad del personal que trabaja en el ambiente de desarrollo?",
    detalle: "Se debe realizar una evaluación de integridad del personal, como verificaciones de antecedentes y referencias, para asegurarse de que el personal que trabaja en el ambiente de desarrollo es confiable y de confianza."
  },
  {
    id: 5,
    guia: "¿Se ha minimizado el grado de subcontratación asociado con el desarrollo del sistema?",
    detalle: "Se debe minimizar el grado de subcontratación asociado con el desarrollo del sistema y asegurarse de que los proveedores subcontratados cumplan con los requisitos de seguridad pertinentes."
  },
  {
    id: 6,
    guia: "¿Se han segregado los ambientes de desarrollo diferentes?",
    detalle: "Se deben separar los ambientes de desarrollo diferentes, como el ambiente de desarrollo, el ambiente de prueba y el ambiente de producción, para evitar el riesgo de que se produzcan errores y de que se comprometa la seguridad de la información."
  },
  {
    id: 7,
    guia: "¿Se ha implementado un control de acceso adecuado para el ambiente de desarrollo?",
    detalle: "Se debe implementar un control de acceso adecuado, como la autenticación y la autorización, para garantizar que solo las personas autorizadas tengan acceso al ambiente de desarrollo."
  },
  {
    id: 8,
    guia: "¿Se monitorean los cambios en el ambiente de desarrollo y en el código almacenado?",
    detalle: "Se debe implementar un sistema de monitoreo que permita detectar cualquier cambio en el ambiente de desarrollo o en el código almacenado, lo que ayudará a prevenir errores y a garantizar la seguridad de la información."
  },
  {
    id: 9,
    guia: "¿Se cuenta con controles para monitorear y registrar el movimiento de los datos desde y hacia el ambiente de desarrollo?",
    detalle: "Se pueden implementar controles de acceso a los datos que incluyan la identificación y autenticación de los usuarios que acceden a la información, la autorización de acceso basada en el rol y la responsabilidad del usuario, y la revisión regular de los accesos para detectar actividades sospechosas. También se pueden implementar controles para la transferencia de datos, como la encriptación de datos y el uso de protocolos seguros para la transferencia de información a través de redes públicas."
  },
]
