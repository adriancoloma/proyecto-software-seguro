import React from "react";
import AccordionPersonal from "../Acordion";

export default function Punto1_2() {
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "80%" }}>
            <AccordionPersonal title="B) Orientación sobre la seguridad en el ciclo de vida del desarrollo de software">
                <h2>Seguridad en la metodología de desarrollo de software</h2>
                <div>
                    Durante el desarrollo de software se utilizará el marco de referencia STRIDE para identificar las posibles amenazas al sistema software partiendo desde los activos de seguridad importantes en el proyecto, es decir los que generen ingresos a la organización.
                </div>
                <div>
                    Una vez identificadas las amenazas se procederá medir el riesgo en cada una de ellas por parte de un equipo experto en el área. Una vez categorizado el riesgo se deberá acordar con el gerente del proyecto y demás personal involucrado en el desarrollo del producto cuáles serán las estrategias y medidas a implementar para tratar las amenazas encontradas.
                </div>
                <div>
                    Toda amenaza debe tener un respectivo encargado de su monitoreo y control lo que permitirá encontrar posibles nuevas amenazas durante el desarrollo del sistema software.
                </div>
                <h2>Pautas de codificación segura para cada lenguaje de programación utilizado</h2>
                <h3>Generales</h3>
                <ul>
                    <li>
                        Validaciones de entrada: Todos aquellos datos que van a ser capturados y posteriormente procesados por la aplicación deben someterse a una evaluación que verifique que poseen un conjunto de caracteres válidos definidos previamente. De no encontrarse un carácter necesario se debe generar un error o hacer uso de las excepciones que comunique al usuario el problema de una manera simple y precisa.
                    </li>
                    <li>
                        Consultas SQL: No construir sentencias SQL directamente con los datos del usuario o concatenar dichos datos a la consulta SQL, en su lugar, utilizar los parámetros de vinculación de tipo seguro.
                    </li>
                    <li>
                        Código comentado: Todo código comentado dentro de la aplicación debe ser eliminado antes de salir a producción.
                    </li>
                    <li>
                        Mensajes de error: Los mensajes de error que le lleguen al usuario no deben contener información confidencial como el sistema operativo, red, lenguaje de programación, línea de error, motor de base de datos. De ser necesario puede incluir códigos de error generados y registrados por los proveedores del servicio para que el usuario se ponga en contacto con ellos.
                    </li>
                    <li>
                        Contenido URL: No mostrar información como passwords, nombre de servidores, direcciones IP, lenguaje de programación, rutas de los archivos en el servidor web.
                    </li>
                    <li>
                        Valores Quemados: No dejar variables definidas por defecto en el código en la fase de producción.
                    </li>
                    <li>
                        Cifrado de contraseñas: Las contraseñas jamás deben ser enviadas como texto plano al servidor sino más bien deben ser cifradas utilizando el algoritmo SHA a menos que por el contexto del proyecto se requiera otra clase de autenticación.
                    </li>
                </ul>
                <h2>Java</h2>
                <div><strong>Mensajes en consola:</strong> Es importante evitar los mensajes de impresión de salida ya que pueden proporcionar información sensible al atacante.</div>
                <div><strong>Encapsulación:</strong> Se recomienda hacer uso de los modificadores de acceso para proteger la información sensible y prevenir el acceso no autorizado a clases, métodos y atributos.</div>
                <div><strong>Manejo de Excepciones:</strong> Capturar las excepciones puede proporcionar menos información al atacante sobre la lógica y el lenguaje del software.</div>
                <h2>Python</h2>
                <div><strong>Funciones criptográficas seguras:</strong> Se recomienda utilizar la librería criptográfica de Python si se requiere algún tipo de encriptación en el proyecto.</div>
                <div><strong>Variables de entorno:</strong> Es recomendable utilizar variables de entorno para almacenar información confidencial.</div>
                <div><strong>Librerías actualizadas:</strong> Es importante asegurarse de utilizar las últimas versiones de Python y de las librerías utilizadas para prevenir vulnerabilidades conocidas.</div>
            </AccordionPersonal>
        </div>
    );
}