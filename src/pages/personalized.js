import React from "react";
import "../App.css";
import Perone from '../Photos/per1.png'
import Pertwo from '../Photos/per2.png'
import Perthree from '../Photos/per3.png'
import Perfour from '../Photos/per4.png'

export default function Personalized(){
    return(
        <div className="Content">
             <img src={Perone} alt="Evento" width='300px' height='300px'/>
             <img src={Pertwo} alt="Eventt" width='300px' height='300px'/>
             <img src={Perthree} alt="Eventth" width='300px' height='300px'/>
             <img src={Perfour} alt="Eventf" width='300px' height='300px'/>
        </div>
    )
}