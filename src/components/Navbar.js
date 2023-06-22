import React from "react"
import "./Navbar.css"
import logo from '../Photos/giftyouwantlogo.png';

export default function Nav(){
    return(
        <div className="Navigation">
            <header className="topnav">
                <img src={logo} alt='logo' />
                <a href="/Home">Home</a>
                <a href="/FamilyMembers">Family Members</a>
                <a href="/Friends">Friends</a>
                <a href="/Anniversaries">Anniversaries</a>
                <a href="/ImportantEvents">Important Events</a>
                <a href="/Wedding">Wedding</a>
                <a href="/Personalized">Personalized</a>
                <a href="/Contact">Contact</a>

            <input placeholder="Search Items"/>
            </header>
        </div>
    )

}