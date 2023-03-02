import React from "react";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";


function AccordionPersonal({ title, children }): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    function toggleAccordion() {
        setIsOpen(!isOpen);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", width: "80%" }}>
            <Accordion
                sx={{
                    backgroundColor: "#B5D9EB",
                    borderRadius: "5px",
                    marginBottom: "10px",
                }}
                expanded={isOpen}
                onChange={toggleAccordion}
            >
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        color: "#333",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        padding: "10px",
                    }}
                >
                    {title}
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        padding: "10px",
                    }}
                >
                    <Typography>{children}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>

    );
}

export default AccordionPersonal;