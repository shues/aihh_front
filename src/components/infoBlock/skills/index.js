import React from "react";
import "./index.scss";

export function Skills(props){
    const list = props.skills.map((el,i)=><div className="skills__list-item" key={i}>{el}</div>)
    return(<div className="skills">
        <div className="skills__header">
            Навыки:
        </div>
        <div className="skills__list">
            {list}
        </div>
    </div>)
}