import React from "react";
import "./RugzHome.css";
import {
  Button,
} from "react-bootstrap";
import "./RugzFooter.css";
 
export default function RugzFooter() {
  return (
      <div className="rugz-footer myfooter bg-light fix-bottom " >
      <div className="container-fluid ">
        <div className=" d-flex  myfooter flex-flow flex-wrap justify-content-between  mt-0">
         <div id="logo" className="d-flex  justify-content-start">
            <img src="images/logo512.png " alt="R.U.G.S NFT Logo" />
         </div>
           <div className="text-muted d-flex justify-content-center">Rugz Collection  &copy;{getYear()}.</div>
         <div className="d-flex justify-content-end pr-5">
            <div><a href="https://www.w3schools.com/"><img src="images/discord.png" alt="Discord" /></a></div>
            <div><a href="https://www.w3schools.com/"><img src="images/twitter.png" alt="Twitter" /></a></div>
            <div><a href="https://www.w3schools.com/"><img src="images/opensea.png" alt="Open Sea" /></a></div>    
            <div> <Button variant="success" id="mint" size="md" href="http://www.mint.notoriousrugs.io/">Mint</Button></div>
        </div>
       </div>
       </div>
      </div>  
  );

  function getYear() {
    const current = new Date();
    return current.getUTCFullYear() === 2022 ? "2022" : "2022 - " + current.getUTCFullYear();
  }
}
