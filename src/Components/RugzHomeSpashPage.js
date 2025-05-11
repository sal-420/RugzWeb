import React from "react";
import spashPage from "../images/splashpage.webp";

export default function RugzHomeSpashPage() {
  return (
    <section id="anchor-splash-pageZ" className="d-flex-row bg-navy-purple">
      <a id="anchor-splash-page"></a>
      <div className="">
        <img
          src={spashPage}
          className="imgshadow img-fluid"
          alt="Boardwalk scene overlooking NFT rugs parting on a boat. The vendors and signs call out notorious rug pulls and scams."
          loading="lazy"
        />
      </div>
    </section>
  );
}
