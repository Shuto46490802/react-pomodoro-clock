import React, { useState } from "react";
import "../Button.css";

const Button = (props) => {

    return(
        <div onClick={props.handleClick} id="buttons" className="icon">
            {props.children}
        </div>
    )
}

export default Button;