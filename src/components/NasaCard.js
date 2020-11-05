import React from "react";

export default function NasaCard (props) {

    return (
        <div>
            <h1>Date: {props.data.date}</h1>
            <h2>Photographer: {props.data.copyright}</h2>
            <img src={props.data.url} />
        </div>


    );
};