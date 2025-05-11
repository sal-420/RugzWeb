import React from "react";
import RugzHomeClouds from "../Components/RugzHomeClouds";
import RugzHomeBoatScene from "../Components/RugzHomeBoatScene";
import RugzHomeBottomOfTheOcean from "../Components/RugzHomeBottomOfTheOcean";
import RugzHomeShowroom from "../Components/RugzHomeShowRoom";
import RugzHomeShowroomDesc from "../Components/RugzHomeShowRoomDesc";
import RugzHomeFaqs from "../Components/RugzHomeFaqs";
import RugzHomeCrypto from "../Components/Crypto";
import RugzSplashPage from "../Components/RugzHomeSpashPage";
import RugzHomeGoMintTrailer from "../Components/RugzHomeGoMintTrailer";

import "./RugzHome.css";
// import "./Footer.css";
import "./ImageGR.css";

export default function RugzHome() {
  return (
    <div className="text-dark position-relative d-flex-row"> 
          <RugzHomeClouds />
          <RugzHomeBoatScene />
          <RugzHomeBottomOfTheOcean />
          <RugzHomeShowroom /> 
          <RugzHomeShowroomDesc />        
          <RugzHomeFaqs /> 
          <RugzHomeCrypto />  
          <RugzSplashPage />
          <RugzHomeGoMintTrailer />
    </div>
  );
}
