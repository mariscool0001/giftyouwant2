import React from "react";
import "../App.css";
import Wedone from '../Photos/wed1.png'
import Wedtwo from '../Photos/wed2.png'
import Wedthree from '../Photos/wed3.png'
import Wedfour from '../Photos/wed4.png'

export default function Wedding(){
    return(
        <div className="Content">
             <img src={Wedone} alt="Wedo" width='300px' height='300px'/>
             <img src={Wedtwo} alt="Wedt" width='300px' height='300px'/>
             <img src={Wedthree} alt="Wedth" width='300px' height='300px'/>
             <img src={Wedfour} alt="Wedf" width='300px' height='300px'/>
        </div>
    )
}