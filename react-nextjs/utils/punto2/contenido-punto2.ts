export default [
    {
        "titulo": "A) Mantener un registro de los niveles de autorización acordados.",
        "parrafos": [
            "Los proyectos seguirán una política de acceso cerrada para los involucrados, es decir que todos tendrán permisos de acceso únicamente para que puedan desarrollar la función para la cual fueron contratados ya sea desarrollo, administración, seguridad o validación entre otros.",
            "Es preciso que los administradores del proyecto junto con el equipo de seguridad identifiquen los roles que son necesarios en el proyecto y el nivel de autorización que tiene cada rol. ",
            "Algunos roles frecuentes en proyectos de desarrollos software son:",
       
        ],
        "listaOrdenada": [
            
            "Desarrollador: Escritura con lo que respecta al código fuente de sus propios archivos.",
            "Diseñador: Escritura con respecto a la interfaz gráfica",
            "Tester: Nivel de lectura únicamente para probar el sistema ",
            "Líder del proyecto: Gestionar el calendario del proyecto y  la participación de los involucrados en el mismo.",
            "Administrador de base de datos: Gestionar permisos de acceso a la base de datos y permisos de escritura y lectura en la misma.",
        ]},
    {
        "titulo": "B) Garantizar que los usuarios autorizados envíen los cambios.",
        "parrafos": [
            "Para asegurar que los usuarios autorizados envíen los cambios de manera adecuada, para garantizar la integridad y la confidencialidad de la información y mantener la seguridad de los sistemas y procesos de la organización se debe seguir el siguiente proceso",
        
        ],
        "listaOrdenada": [
            "Generará una solicitud de cambio y entregarla a un oficial de gestión de cambios.",
            "El oficial de gestión de cambios analizará y generará un reporte con respecto al impacto del cambio solicitado.",
            "El oficial de gestión de cambios remitirá el documento de análisis junto con la solicitud de cambio al comité de control de cambios encargado de aprobar, suspender o rechazar el cambio solicitado.",
            "En caso de aprobación se le remitirá la solicitud de cambio al personal calificado para implementarlo.",
            
            ]
    },
    {
        "titulo": "C) Revisar los controles y los procedimientos de integridad para garantizar que no se vean comprometidos por los cambios. ",
        "parrafos": [
            "Una vez que se ha realizado un cambio es preciso realizar una revisión de los controles y procedimientos de integridad tales como:",
            
        ],
        "listaOrdenada": [
            "Mecanismos de Autenticación y autorización",
            "Controles de Acceso",
            "Los controles de versiones ",
            "Pruebas de integridad con los cambios",
          
            
            ]
    },

    {
        "titulo": "D) Identificar todo el software, la información, las entidades de la base de datos y el hardware que requieren enmiendas. ",
        "parrafos": [
            "Al realizar cambios es importante identificar todos aquellos elementos relacionados que también se podrían ver afectados como, por ejemplo:",
        ],
        "listaOrdenada": [
            "Software: Distintos programas o sistemas que hacen uso o dependen del cambio que vamos a implementar.",
            "Información: La información contenida en la documentación o bases de datos relacionada con el cambio a implementar.",
            "Entidades de la base de datos: Las entidades, relaciones e incluso procedimientos dentro de la base de datos también pueden estar relacionadas con el cambio a implementar.",
            "Hardware: Equipos que pueden requerir modificaciones ya sea por términos de permisos o puertos de comunicación como servidores, routers, firewalls etc.  ",
           
            
            ]
    },
    {
        "titulo": "E)Identificar y verificar el código crítico de seguridad para minimizar la probabilidad de debilidades de seguridad conocidas. ",
        "parrafos": [
            "El código crítico de seguridad se refiere a aquel código que es fundamental para garantizar la seguridad de un sistema o aplicación. Este código puede incluir, pero no limitarse a elementos tales como funciones de autenticación, la gestión de contraseñas, el cifrado, el control de acceso y otras funcionalidades que son críticas para proteger la información y los sistemas.",
            "Las actividades a realizarse en son:",
     
        ],
        "listaOrdenada": [
            "Identificar vulnerabilidades conocidas en librerías que utilice este código fuente",
            "Revisar las configuraciones de seguridad en el entorno en el cual se ejecuta el código crítico",
            "Verificar el uso de las mejores prácticas de codificación en términos de seguridad acorde al lenguaje de programación que se esté usando.",
        
            
            ]
    },
    {
        "titulo": "F) Obtener la aprobación formal de las propuestas detalladas antes de que comience el trabajo.",
        "parrafos": [
            "Las propuestas del cambio aprobadas por el comité de control del cambio deben detallar el alcance del cambio, procedimientos y controles que se implementarán por parte del personal designado para su implementación. ",
            
        ],
        "listaOrdenada": [
            "La aprobación formal de dichas propuestas o solicitudes de cambio debe contar con la revisión de un especialista en seguridad para garantizar que se mantenga la seguridad en los cambios a implementar.",

            ]
    },
    {
        "titulo": "G) Garantizar que los usuarios autorizados acepten los cambios antes de la implementación. ",
        "parrafos": [
            "Es necesario implementar un proceso de aprobación de cambios. Este proceso debe incluir una revisión y aprobación por parte de los usuarios autorizados antes de que se implemente cualquier cambio en el sistema.",
           
        ],
        "listaOrdenada": [
            "Identificar a los usuarios autorizados que deben aprobar los cambios propuestos.",
            "Notificar a los usuarios autorizados de los cambios propuestos y obtener su aceptación antes de la implementación.",
            "Documentar la aceptación de los usuarios autorizados para su posterior referencia.",
            ]
    },
    {
        "titulo": "H) Garantizar que el conjunto de documentación del sistema se actualice al finalizar cada cambio y que la documentación antigua se archive o elimine. ",
        "parrafos": [
            "Es necesario mantener un sistema de gestión documental que permita controlar la creación, revisión, aprobación y distribución de la documentación. El sistema debe asegurar que la documentación se actualice y que la documentación antigua se archive o elimine adecuadamente.",
        ],
        "listaOrdenada": [
            "Identificar la documentación afectada por el cambio.",
            "Actualizar la documentación pertinente para reflejar el cambio.",
            "Archivar o eliminar la documentación antigua.",
           
          
            
            ]
    },
    {
        "titulo": "I) Mantener un control de versiones para todas las actualizaciones de software.",
        "parrafos": [
            "Es necesario implementar un sistema de control de versiones que permita mantener un registro de las diferentes versiones de software, incluyendo información sobre quién realizó la actualización, cuándo se realizó y qué cambios se realizaron.",
           
        ],
        "listaOrdenada": [
            "Identificar y documentar la versión actual del software.",
            "Documentar todos los cambios realizados en el software.",
            "Asignar un número de versión único y controlarlo para cada versión del softwar",
            "Documentar las diferencias entre las versiones.",
          
            
            ]
    },
    {
        "titulo": "J) Mantener un registro de auditoría de todas las solicitudes de cambio. ",
        "parrafos": [
            "Es necesario implementar un sistema de registro de auditoría que permita registrar todas las solicitudes de cambio, incluyendo información sobre quién realizó la solicitud, cuándo se realizó y qué cambios se solicitaron.",
            
        ],
        "listaOrdenada": [
            " Registrar todas las solicitudes de cambio, incluyendo quién las hizo, cuándo se hicieron y el motivo de la solicitud",
            "Asignar un número de identificación único para cada solicitud de cambio.",
            "Documentar el resultado de la solicitud de cambio.",
            
            ]
    },
    {
        "titulo": "K) Asegurar que la documentación operativa (ver IZLI) y los procedimientos del usuario se cambien según sea necesario para seguir siendo apropiados. ",
        "parrafos": [
            "Es necesario establecer un proceso para revisar y actualizar la documentación operativa y los procedimientos del usuario. Este proceso debe asegurar que la documentación y los procedimientos se actualicen cuando sea necesario y que se comuniquen los cambios a los usuarios relevantes.",
            
        ],
        "listaOrdenada": [
            "Identificar los cambios necesarios en la documentación operativa y los procedimientos del usuario.",
            "Actualizar la documentación operativa y los procedimientos del usuario según sea necesario.",
            "Comunicar los cambios a los usuarios relevantes.",
            
            ]
    },
    {
        "titulo": "L) Garantizar que la implementación de los cambios se realice en el momento adecuado y no perturbe los procesos comerciales involucrados. ",
        "parrafos": [
            "Es necesario implementar un proceso de gestión de cambios que incluya una evaluación del impacto de los cambios propuestos en los procesos comerciales existentes. Esto permitirá determinar el momento adecuado para implementar los cambios y tomar medidas para minimizar cualquier interrupción de los procesos comerciales involucrados.",
         
        ],
        "listaOrdenada": [
            "Identificar el momento adecuado para implementar los cambios propuestos.",
            "Evaluar el impacto potencial de los cambios en los procesos comerciales.",
            "Realizar pruebas de los cambios antes de la implementación para minimizar el riesgo de interrupciones en los procesos comerciales.",
            "Implementar los cambios en el momento adecuado para minimizar el impacto en los procesos comerciales.",
      
            
            ]
    },


]
    
