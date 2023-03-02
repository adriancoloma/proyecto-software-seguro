import {guias} from "../../utils/encuesta7";
import TablaRespuestas from "../TablaRespuestas";

export default function Resultados7({arrayResp}: {arrayResp: boolean[]}){
    return (
        <TablaRespuestas arrayResp={arrayResp} guias={guias}/>
    )
}