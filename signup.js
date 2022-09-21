import React from "react";
import './signup.css';
import img1 from './loginimg1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export function Signup()
{
    return(

<div id="div1">
    <div id="img1"> 
    {/* <img src={img1} id="img2"/> */}
    {/* <p id="id31">Swiggy </p><span id="spd3">Partner</span>
    <p>Manage your restaurant on Swiggy</p> */}
    </div>
    <div id="div2">
<h1 id="h11">Register</h1>
<p id="p11">Enter details to register</p>

<input type={'text'} name="phone"  placeholder="Invited Mobile Number" id="inp5"/>
<input type={'text'} name="name"  placeholder="Name" id="inp6"/>
<input type={'email'} name="Email ID"  placeholder="Email Address" id="inp6"/>
<input type={'password'} name="password"  placeholder="password" id="inp6"/>
<input type={'password'} name="confirm password"  placeholder="confirm password" id="inp6"/><br/>
<FontAwesomeIcon icon={faCircleCheck} id="em2"/><span id="p8">Total of 8 or more characters</span><br/>
<FontAwesomeIcon icon={faCircleCheck} id="em1"/><span id="p8">At least 1 lowercase alphabet</span><br/>
<FontAwesomeIcon icon={faCircleCheck} id="em1"/><span id="p8">At least 1 number</span>
<p id="p9">special characters allowed: $ @ ! % * ? & #</p>
<hr id="hr1"/>
<input type={'checkbox'} id='ch1' /><span id="spd1">I want to get critical updates via whatsapp on this number to ensure <span id="spd2" >nothing gets missed!</span></span>
<hr id="hr1"/>
<p id="p9">By registering, I agree to Swiggy's <span id="sp1">terms & conditions</span></p>
<button id="btn1">Continue</button>
</div> 

</div>

    );
}