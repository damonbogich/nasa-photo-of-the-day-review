import React from "react";
import {StyledImg} from "./styles.js";
//cardheader is to be made up of the date and the photographer side by side

export default function CardImg (props) {
    
    console.log(props, 'description props');
    return (
        <p>{props.data.explanation}</p>
    );
};