import React from "react";
import Accordion from "../../Acordion";


export default function Punto6h() {
    return (
        <div>
            <Accordion title="H) Las copias de seguridad se almacenan en ubicaciones seguras fuera del sitio.">
            <div>Para los proyectos usados se usará el GitHub para empresas, ya que en esta version se añaden características específicas como: </div>
                <ul>
                    <li>Soporte técnico para GitHub Enterprise</li>
                    <li>Controles de seguridad, cumplimiento e implementación adicionales</li>
                    <li>Autenticación con inicio de sesión único de SAML</li>
                    <li>Acceso al aprovisionamiento con SAML o SCIM</li>
                    <li>GitHub Connect</li>
                    <li>La opción para comprar GitHub Advanced Security. Para más información, consulte "Acerca de GitHub Advanced Security".</li>
                </ul>
            </Accordion>
        </div>
    );
}