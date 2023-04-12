import React from "react";
import Img from "./Image/Logo.png"
import "./logo.css"

function Logo() {
    return (
        <div className="logo-div">
            <img src={Img} alt="Logo" className="logo img-fluid rounded float-left"/>
        </div>
    )
}


export default Logo;