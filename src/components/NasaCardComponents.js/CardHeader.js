import React from "react";
import {HeaderDiv} from "./styles.js";
//cardheader is to be made up of the date and the photographer side by side

export default function CardHeader (props) {
    
   
    return (
        <HeaderDiv>
            <h2>Photographer: {props.data.copyright}</h2>
            <h3>Date: {props.data.date}</h3>
        </HeaderDiv>


    );
};