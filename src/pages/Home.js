import React from "react"
import '../App.css';
import Friends from "../Photos/friends.png"
import Owl from "../Photos/owl.png"
import Olives from '../Photos/olives.png'
import Card from '../Photos/card.png'

export default function Home(){
    return(
        <div className="Content">
            <img src={Friends} alt='Friends' width='300px' height='300px'/>
            <img src={Owl} alt='Owls' width='300px' height='300px'/>
            <img src={Olives} alt='Olives' width='300px' height='300px'/>
            <img src={Card} alt='Card' width='300px' height='300px'/>
        </div>
    )
}