import React from "react";
import picture from "../images/PP.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"
export function Main(){
    return(
        <div >
           <img src={picture} className="mero" alt="Amar" /> 
           <h2> Amar Atoum</h2>
           <h3> FullStack-Developer</h3>
           <a href="mailto:ammarkaid321@gmail.com" className="button1">
               <img src={email} alt="email"/>Email</a>
           <a href="https://www.linkedin.com/in/amar-atoum-a355821b1/" className="button2"><img src={linkedin} alt="linkedin"/>linkedin</a>
        </div>
    )
}