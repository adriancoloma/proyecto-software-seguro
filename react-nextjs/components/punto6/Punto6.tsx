import dynamic from "next/dynamic";
import Layout from "../Layout";
import Punto6a from "./subpuntos/Punto6.a";
import Punto6b from "./subpuntos/Punto6.b";
import Punto6c from "./subpuntos/Punto6.c";
import Punto6d from "./subpuntos/Punto6.d";
import Punto6e from "./subpuntos/Punto6.e";
import Punto6f from "./subpuntos/Punto6.f";
import Punto6g from "./subpuntos/Punto6.g";
import Punto6h from "./subpuntos/Punto6.h";
import Punto6i from "./subpuntos/Punto6.i";
import Punto6j from "./subpuntos/Punto6.j";
import 'survey-core/defaultV2.min.css'


export default function Punto6() {

    const D_formulario8 = dynamic(() => import('./Formulario6'), {ssr: false});


    return (
        <>
            <Layout title={"14.6.2"}>
                <h1 style={{ margin: '30px', textAlign: 'center', textTransform: 'uppercase' }}>14.2.6 Entorno de desarrollo seguro</h1>
                <h4><strong>Control</strong></h4>
                <p>Las organizaciones deben establecer y proteger adecuadamente entornos de desarrollo seguros para el desarrollo de sistemas y los esfuerzos de integración que cubran todo el ciclo de vida de desarrollo del sistema.</p>

                <h4><strong>Guía de implementación</strong></h4>
                <p>Un entorno de desarrollo seguro incluye personas, procesos y tecnología asociados con el desarrollo y la integración de sistemas.</p>

                <p>Las organizaciones deben evaluar los riesgos asociados con los esfuerzos de desarrollo de sistemas individuales y establecer entornos de desarrollo seguros para esfuerzos específicos de desarrollo de sistemas, considerando:</p>

                <Punto6a></Punto6a>
                <Punto6b></Punto6b>
                <Punto6c></Punto6c>
                <Punto6d></Punto6d>
                <Punto6e></Punto6e>
                <Punto6f></Punto6f>
                <Punto6g></Punto6g>
                <Punto6h></Punto6h>
                <Punto6i></Punto6i>
                <Punto6j></Punto6j>

                <D_formulario8></D_formulario8>


            </Layout>
        </>
    );
}

