import React from "react";
import "../App.css";
import Eventone from '../Photos/event1.png'
import Eventtwo from '../Photos/event2.png'
import Eventthree from '../Photos/event3.png'
import Eventfour from '../Photos/event4.png'

export default function ImportantEvents(){
    return(
        <div className="Content">
             <img src={Eventone} alt="Evento" width='300px' height='300px'/>
             <img src={Eventtwo} alt="Eventt" width='300px' height='300px'/>
             <img src={Eventthree} alt="Eventth" width='300px' height='300px'/>
             <img src={Eventfour} alt="Eventf" width='300px' height='300px'/>
        </div>
    )
}