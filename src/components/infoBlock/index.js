import React from "react";
import "./index.scss";
import { Avatar } from "./avatar";
import { Name } from "./name";
import { Localion } from "./location";
import { Skills } from "./skills";
import { Social } from "./social";
import { InviteButton } from "../buttons/inviteButton";

export function InfoBlock(props){
    return(<div className="info-block">
        <div className="info-block__header">
            <Avatar />
            <Name name={props.info.name} lastName={props.info.lastName}/>
            <Social social={props.info.social}/>
        </div>
        <Localion town={props.info.town}/>
        <Skills skills={props.info.skills}/>
        <InviteButton />
    </div>)
}