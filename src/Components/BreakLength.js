import React, { useState } from "react";
import "../length.css";

const BreakLength= (props) => {
    return(
        <div id="length">
            <h3>
                Break Length
            </h3>
            <div id="inputs-wrapper">
            {props.children}
            </div>
        </div>
    )
}

export default BreakLength;