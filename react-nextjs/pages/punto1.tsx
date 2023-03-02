import Layout from "../components/Layout";
import Punto1_1 from "../components/punto1/Punto1.1";
import Punto1_2 from "../components/punto1/Punto1.2";
import Punto1_3 from "../components/punto1/Punto1.3";
import Punto1_4 from "../components/punto1/Punto1.4";
import Punto1_5 from "../components/punto1/Punto1.5";
import Punto1_6 from "../components/punto1/Punto1.6";
import Punto1_7 from "../components/punto1/Punto1.7";
import Punto1_8 from "../components/punto1/Punto1.8";

export default function () {
    return (
        <>
            <Layout title={"Punto 1"}>
                <h1 style={{ margin: '30px', textAlign: 'center' }}>Seguridad para el desarrollo</h1>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
                    <Punto1_1></Punto1_1>
                    <Punto1_2></Punto1_2>
                    <Punto1_3></Punto1_3>
                    <Punto1_4></Punto1_4>
                    <Punto1_5></Punto1_5>
                    <Punto1_6></Punto1_6>
                    <Punto1_7></Punto1_7>
                    <Punto1_8></Punto1_8>
                </div>

            </Layout>
        </>
    );
}