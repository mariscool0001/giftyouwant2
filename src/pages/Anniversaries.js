import React from "react";
import "../App.css";
import Anione from '../Photos/ani1.png'
import Anitwo from '../Photos/ani2.png'
import Anithree from '../Photos/ani3.png'
import Anifour from '../Photos/ani4.png'

export default function Anniversaries(){
    return(
        <div className="Content">
            <img src={Anione} alt="Anione" width='300px' height='300px'/>
            <img src={Anitwo} alt="Anitwo" width='300px' height='300px'/>
            <img src={Anithree} alt="Anithree" width='300px' height='300px'/>
            <img src={Anifour} alt="Anifour" width='300px' height='300px'/>
        </div>
    )
}