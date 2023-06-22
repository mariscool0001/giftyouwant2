import React from "react";
import "../App.css";
import Map from '../Photos/map.png'

export default function Contact(){
    return(
        <div>
            <img src={Map} alt='Map' width='700px' height='350px'/>

            <div className="Feedbackform">

                <div className="First">
                    <label for='Text'><b>First Name</b></label>
                    <input type='Text' placeholder="First Name" name='First Name' required/>
                </div>

                <div className="Email">
                    <label for='Email'><b>Email</b></label>
                    <input type='Text' placeholder="Enter Email" name='Email' required/>
                </div>

                <div className="FeedbackOrEnquiry">
                    <label for='Feedback Or Enquiry'><b>Feed Or Enquiry</b></label>
                    <input type='Text' placeholder="Feedback Or Enquiry" name='Feedback Or Enquiry' required/>
                    
                    <button><span><a href="/">Submit</a></span></button>
                </div>
            </div>
        </div>
    )
}