import React from 'react';
import splashPage from '../images/splashpage.webp';
import '../Components/site.css';

export default function RugzHomeSpashPage() {
  return (
    <>
      <section id="anchor-splash-page" className="d-flex-row bg-navy-purple">
        <div className="">
          <h2>
          <img
            src={splashPage}
            className="imgshadow img-fluid"
            alt="Boardwalk scene overlooking NFT rugs parting on a boat, vendors and signs calling out notorious rug pulls and scams."
            loading="lazy"
          />
          </h2>
        </div>
      </section>
    </>
  );
}
