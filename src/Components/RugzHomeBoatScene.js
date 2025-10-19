import React from "react";
import { Helmet } from 'react-helmet';
import boatscene from "../images/boatscene7.webp";

import './RugzHomeBoatScene.css';
/* Preload the webp image using an absolute path relative to the public folder */
export default function RugzHomeBoatScene() {
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={boatscene} fetchpriority="high" />
      </Helmet>
      <section className=" d-flex-row bg-navy-purple">
        <div
          className="bg-boat-scene-container"
          style={{ backgroundImage: `url(${boatscene})` }}
          role="img"
          aria-label="A scary night-time boat scene with monsters while NFT rugs party"
        >
          {/* <img
            src={boatscene}
            className="imgshadow img-fluid"
            alt="A scary night time boat scene with monsters while NFT rugs party"
          /> */}
          
        </div>
      </section>
    </>
  );
}
