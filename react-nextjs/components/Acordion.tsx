import React from "react";
import { useState } from "react";


function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleAccordion() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="accordion" style={{ border: '1px solid #ddd', borderRadius: '5px', marginBottom: '10px' }}>
            <div className="accordion-item" style={{ backgroundColor: '#f9f9f9', color: '#333', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', padding: '10px' }} onClick={toggleAccordion}>
                {title}
            </div>
            {isOpen && (
                <div className="accordion-content" style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', marginTop: '10px', padding: '10px' }}>{children}</div>
            )}
        </div>
    );
}

export default Accordion;