import React from "react";
import Accordion from "../../Acordion";


export default function Punto6a() {
    return (
        <div>
            <Accordion title="A) Sensibilidad de los datos a procesar, almacenar y transmitir por el sistema.">
                <h6>La sensibilidad de los datos varía según la naturaleza de estos, dependen del contexto y el entorno en el que se desenvolverá el sistema. Se presenta una categorización estándar para todos los sistemas a desarrollar:</h6>
                <ul>
                    <li>
                        <strong>Datos públicos:</strong> datos no confidenciales que se pueden compartir sin riesgo para la organización asi como sus interesados. Se proporciona la siguiente lista de datos públicos.
                        <ol type="1">
                            <br />
                            <li>Información sobre la empresa: Nombre de la empresa, dirección de la empresa, número de identificación fiscal, sitio web y redes sociales.</li>
                            <li>Contenido público en redes sociales: Publicaciones en Facebook, tweets en Twitter, imágenes en Instagram y videos en YouTube.</li>
                            <br />
                        </ol>
                    </li>

                    <li>
                        <strong>Datos internos:</strong> datos que se comparten dentro de la organización y se utilizan para la toma de decisiones y la gestión de la empresa. Se proporciona la siguiente lista de datos internos.
                        <ol type="1">
                            <br />
                            <li>Información financiera: Información sobre presupuestos, estados financieros, informes de ingresos y gastos, cuentas bancarias, información de pago y facturación.</li>
                            <li>Información de recursos humanos: Información sobre empleados, como información personal, registros de empleo, información sobre beneficios, compensación y evaluaciones de desempeño.</li>
                            <li>Información de clientes: Información de contacto, historial de transacciones, compras anteriores, información de facturación y detalles de servicios prestados.</li>
                            <li>Información de proveedores: Información de contacto, historial de transacciones, contratos y acuerdos, información financiera y detalles de servicios prestados.</li>
                            <li>Información de marketing: Información sobre campañas publicitarias, investigación de mercado y análisis de tendencias.</li>
                            <li>Información operacional: Información sobre el inventario, la cadena de suministro, los procesos de producción y los sistemas de logística.</li>
                            <li>Información de propiedad intelectual: Secretos comerciales, patentes, marcas registradas, derechos de autor y otra información de propiedad intelectual.</li>
                            <br />
                        </ol>
                        <div>Cada institución u organización solicitante del proyecto debe otorgar una aprobación para usar sus derechos de privacidad y protección de datos de las personas involucradas. </div>
                    </li>

                    <li>
                        <strong>Datos confidenciales:</strong> datos que están protegidos legal o contractualmente y que no se pueden compartir públicamente. Se proporciona la siguiente lista de datos internos.
                        <ol type="1">
                            <br />
                            <li>Información personal identificable: Nombre completo, dirección, número de identificación nacional, fecha de nacimiento, número de Seguridad Social, números de identificación fiscal, números de pasaporte, números de licencia de conducir, etc.</li>
                            <li>Información financiera: números de tarjeta de crédito, números de cuenta bancaria, información de transacciones financieras, registros de inversión, información de impuestos, etc.</li>
                            <li>Información de salud: historial médico, resultados de pruebas, información de seguros de salud, etc.</li>
                            <li>Información de empleados: información personal, registros de empleo, evaluaciones de desempeño, información de compensación, etc.</li>
                            <li>Información legal: correspondencia legal, documentos de acuerdo, acuerdos de confidencialidad, etc.</li>
                            <br />
                        </ol>
                        <div>Cada institución u organización solicitante del proyecto debe otorgar una aprobación para usar sus derechos de privacidad y protección de datos de las personas involucradas. </div>
                    </li>

                    <li>
                        <strong>Datos críticos:</strong> son aquellos datos que son esenciales para la operación de la organización y que, si se ven comprometidos, podrían tener un impacto significativo en la continuidad del negocio. Se proporciona la siguiente lista de datos internos.
                        <ol type="1">
                            <br />
                            <li>Información de inventario y suministros: listas de inventario, registros de compra, registros de envío, etc.</li>
                            <li>Información de producción y procesos: planes de producción, listas de materiales, registros de calidad, etc.</li>
                            <li>Información de propiedad intelectual: patentes, diseños, fórmulas, secretos comerciales, algoritmos, etc.</li>
                            <li>Secretos comerciales: información de propiedad intelectual, planes de negocio, estrategias de marketing, planes de producto, listas de clientes, etc.</li>
                            <li>Información de investigación y desarrollo: investigación y desarrollo de tecnología, nuevos diseños de productos, resultados de pruebas, etc.</li>
                            <br />
                        </ol>
                        <div>Cada institución u organización solicitante del proyecto debe otorgar una aprobación para usar sus derechos de privacidad y protección de datos de las personas involucradas. </div>
                    </li>
                </ul>
            </Accordion>
        </div >
    );
}