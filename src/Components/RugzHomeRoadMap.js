import React from "react";
import key from "../images/key.webp";
import football from "../images/football.webp";

export default function RugzHomeRoadMap() {
  return (    
          <div className="bg-navy-black">
               <h3 className="text-center text-white pt-5 ">The Roadmap</h3> 
               <div className="container text-white ">
                    <div className="row d-flex pb-5">
                         <div className="col-sm-4">
                              <img src={key} className="img-fluid  mx-auto d-block imgsize rotate-lock" alt="key" />   
                              <div className=" text-center">
                                   Let Rugz remind you to keep your wallet locked. Don't expose your seed phrase
                              </div>
                         </div>
                         <div className="col-sm-4">
                              <img src={football} className="img-fluid imageRotateHorizontal mx-auto d-block imgsize" alt="football" />
                              <div className=" text-center">
                                     Dancing Rugz Young and sweet, only seventeen Dancing Rugz - feel the scam from the tambourine 
                                     Ooh, see that scam, watch that pull from the dancing Rugz
                              </div>
                         </div>
                           <div className="col-sm-4 pt-3">
                                <div id="earth" className="mx-auto">
                                </div>
                               <div className="pt-2 text-center">
                                     <span className="font-italic lead text-danger">R</span>ugz <span className="font-italic lead text-danger">U</span>nit <span className="font-italic lead text-danger">G</span>Globally 
                                     Looking out for another, anyone will do We can dance, We can jive
                                     Having the time of our life Digging the dancing Rugz
                              </div>
                         </div>
                      </div>
                      <div className="text-center pl-5 pr-5">Notorious R.U.G. is about education through storytelling.
                           The roadmap is minimal with a plan to build a community that watches out for one another.
                       </div>
                 </div>
                 
            </div>  
  );
}
