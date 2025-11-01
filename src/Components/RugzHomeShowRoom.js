import React from "react";
import rugz from "../images/rugs8.webp";

export default function RugzHomeShowRoom() {
  return (
    <section className="d-flex-row text-center bg-blue-navy">
      <a href="#anchor-showroom" id="anchor-showroom">
        <span className="d-none">Anchor for rugs showroom</span>
      </a>
      <div className="col"></div>
      <div className="col text-center pt-5">
        <img
          src={rugz}
          className="imgshadow img-fluid mx-auto ximgshowroomsize"
          alt="Notorious Rugs NFT showroom - 8 unique rugs displayed in a gallery"
          loading="lazy"
          decoding="async" 
          fetchpriority="low"
        />
      </div>
      <div className="col"></div>
    </section>
  );
}
