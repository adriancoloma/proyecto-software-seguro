import React from "react";
import Accordion from "../../Acordion";


export default function Punto6f() {
    return (
        <div>
            <Accordion title="F) Control del acceso al entorno de desarrollo.">
                <div>
                    <h6> <strong>
                        Política de Control de Accesos
                    </strong>
                    </h6>
                    <div>En la aplicación de controles de acceso, se contemplarán los siguientes aspectos:</div>
                    <ol>
                        <li>Identificar los requerimientos de seguridad de cada uno de los sistemas.</li>
                        <li>Identificar toda la información relacionada con el sistema.</li>
                        <li>Definir los perfiles de acceso de usuarios estándar, comunes a cada categoría de puestos de trabajo.</li>
                        <li>Administrar los derechos de acceso en un ambiente distribuido y de red.</li>
                    </ol>
                </div>
                <div>
                    <h6>
                        <strong>
                            Reglas de Control de Acceso
                        </strong>
                    </h6>
                    <div>Las reglas de control de acceso especificadas deberán:</div>
                    <ol>
                        <li>Indicar expresamente si las reglas son obligatorias o no.</li>
                        <li>Controlar los cambios en los permisos de usuario que son iniciados automáticamente por el sistema y aquellos que son iniciados por el administrador.</li>
                        <li>Controlar las reglas que requieren la aprobación del administrador o del Propietario de la Información.</li>
                    </ol>
                </div>
                <div>
                    <h6>
                        <strong>
                            Registro de Usuarios
                        </strong>
                    </h6>
                    <div>Los responsables de Seguridad Informática definirán un procedimiento formal de registro de usuarios para otorgar y revocar el acceso a todos los sistemas, bases de datos y servicios de información multiusuario, el cual debe comprender:</div>
                    <ol>
                        <li>Utilizar identificadores de usuario únicos.</li>
                        <li>Verificar que el usuario tiene autorización del Propietario de la Información para el uso del sistema, base de datos o servicio de información.</li>
                        <li>Verificar que el nivel de acceso otorgado es adecuado para el propósito de la función del Usuario.</li>
                        <li>Entregar a los usuarios un detalle escrito de sus derechos de acceso.</li>
                        <li>Requerir que los usuarios firmen declaraciones señalando que comprenden y aceptan las condiciones para el acceso.</li>
                        <li>Mantener un registro formal de todas las personas registradas para utilizar el servicio.</li>
                        <li>Cancelar inmediatamente los derechos de acceso de los usuarios que cambiaron sus tareas, o de aquellos a los que se les revocó sus credenciales por salida de la organización o pérdida.</li>
                        <li>Realizar revisiones periódicas con el objeto de inhabilitar y eliminar credenciales cada 60 días.</li>
                        <li>Incluir cláusulas en los contratos de personal y de servicios que especifiquen sanciones si los usuarios que prestan un servicio e intentan accesos no autorizados.</li>
                    </ol>
                </div>
            </Accordion>
        </div>
    );
}