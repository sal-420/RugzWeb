import React from "react";
import boatscene from "../images/boatscene7.webp";

export default function RugzHomeBoatScene() {
  return (
    <section className="d-flex-row bg-navy-purple">
      <div className="">
        <img
          src={boatscene}
          className="imgshadow img-fluid"
          alt="A scary night time boat scene with monsters while NFT rugs party"
          loading="lazy"
        />
      </div>
    </section>
  );
}
