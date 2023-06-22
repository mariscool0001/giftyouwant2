import React from "react";
import '../App.css';
import Friendsone from '../Photos/friends1.png'
import Friendstwo from '../Photos/friends2.png'
import Friendsthree from '../Photos/friends3.png'
import Friendsfour from '../Photos/friends4.png'

export default function Friends(){
    return(
        <div className="Content">
            <img src={Friendsone} alt="Friendso" width='300px' height='300px'/>
            <img src={Friendstwo} alt="Friendst" width='300px' height='300px'/>
            <img src={Friendsthree} alt="Friendsth" width='300px' height='300px'/>
            <img src={Friendsfour} alt="Friendsf" width='300px' height='300px'/>
        </div>
    )
}