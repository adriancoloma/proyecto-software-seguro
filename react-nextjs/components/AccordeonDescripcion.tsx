import {IAcordeon} from "../interfaces/IAcordeon";

export default function AccordeonDescripcion(props: IAcordeon) {
    return (
        <>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                            {props.titulo1}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                         aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            {props.descripcion1}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                            {props.titulo2}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                         aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            {props.descripcion2}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}