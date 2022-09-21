import React from "react";
import './login.css';
import img1 from './loginimg2.jpg';

export function Login()
{
    return(

<div id="div1">
    <div id="img1"> 
    {/* <img src={img1} id="img2"/> */}
    </div>
    <div id="div2">
<h1 id="h1">Login</h1>
<p id="p1">Enter a registered mobile number or<br/> restaurant ID to login</p>

<input type={'text'} name="ID"  placeholder="Restaurant ID/Mobile Number" id="inp1"/>
<button id="btn1">Continue</button>
<p id="p2">Invited?<span id="sp1">Register here</span></p>
<p id="p3">Want to get your restaurant listed on swiggy? 
<span id="sp2">Partner with us</span></p>
    </div>
</div>



    );
}