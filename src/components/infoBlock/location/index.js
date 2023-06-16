import React from "react";
import "./index.scss";

export function Localion(props){
    return(<div className="location">
        {'Город пребывания: ' + props.town}
    </div>)
}