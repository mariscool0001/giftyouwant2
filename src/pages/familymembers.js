import React from "react";
import "../App.css";
import Potatos from '../Photos/potatos.png'
import Momcard from '../Photos/momcard.png'
import Cardmom from '../Photos/cardmom.png'

export default function Familymembers(){
    return(
        <div className="Content">
            <img src={Potatos} alt="Potatos" width='300px' height='300px'/>
            <img src={Momcard} alt="Momcard" width='300px' height='300px'/>
            <img src={Cardmom} alt="Cardmom" width='300px' height='300px'/>
        </div>
    )
}