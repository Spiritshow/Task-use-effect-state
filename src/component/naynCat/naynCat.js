import React from "react";
import "./naynCat.css";

const NaynCat = ({toggler}) =>{

    return(
        <div className="NaynCatBox">
            <img className={toggler ? "image Move" : "image"} src="/nayncat.gif" alt="нян-кот"/>
        </div>
    )
}

export default NaynCat;