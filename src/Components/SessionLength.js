import React, { useState } from "react";
import "../length.css";

const SessionLength= (props) => {
    return(
        <div id="length">
            <h3>
                Sesison Length
            </h3>
            <div id="inputs-wrapper">
            {props.children}
            </div>
        </div>
    )
}

export default SessionLength;