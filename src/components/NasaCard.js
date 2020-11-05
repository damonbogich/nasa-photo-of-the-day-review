import React from "react";
import CardHeader from './NasaCardComponents.js/CardHeader.js';
import CardImg from './NasaCardComponents.js/CardImg';
import CardDescription from './NasaCardComponents.js/CardDescription';

export default function NasaCard (props) {
  
    return (
        <div>
            <CardHeader data={props.data} />
            <CardImg data={props.data} />
            <CardDescription data={props.data}/>
        </div>


    );
};