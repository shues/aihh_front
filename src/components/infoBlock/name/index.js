import React from "react";
import "./index.scss";

export function Name(props){
    return(<div className="name">
        <div className="name__first">{props.name}</div>
        <div className="name__last">{props.lastName}</div>
    </div>)
}