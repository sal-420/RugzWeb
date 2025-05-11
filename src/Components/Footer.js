import React from "react";
import {
  Button,
} from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="myfooter footer bg-light" >
      <div className="container-fluid ">
        <div className=" d-flex flex-flow flex-wrap justify-content-between  mb-3">
         <div id="logo" className="d-flex  justify-content-start">
            <img src="images/logo512.png " alt="Rugz" />
         </div>
          <div className="text-muted d-flex justify-content-center">Rugz Collection &copy;2022 - {new Date().getFullYear()}.</div>

         <div className="d-flex justify-content-end">
            <div><a href="https://www.w3schools.com/"><img src="images/discord.png" alt="Discord" /></a></div>
            <div><a href="https://www.w3schools.com/"><img src="images/twitter.png" alt="Twitter" /></a></div>
            <div><a href="https://www.w3schools.com/"><img src="images/opensea.png" alt="Open Sea" /></a></div>    
            <div><Button variant="success" className="ml-2 ">Mint</Button></div>
        </div>
       </div>
       </div>
    </footer>  
  );
}
