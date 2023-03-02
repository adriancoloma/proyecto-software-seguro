import React, { useEffect } from "react";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionPersonal({ title, children }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Accordion sx={{
            backgroundColor: "#B5D9EB",
            borderRadius: "5px",
            marginBottom: "10px",
        }}>
            <AccordionSummary 
            
            sx={{
                color: "#333",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px",
            }}
            expandIcon={<ExpandMoreIcon />}>
                <Typography>{title} </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "10px",
            }}>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}

export default AccordionPersonal;