import React from 'react';
import splashPage from '../images/splashpage.webp';

export default function RugzHomeSpashPage() {
  return (
    <>
      <div>
        <a href="#anchor-splash-page" id="anchor-splash-page">
          <span className="d-none">
            Anchor for Boardwalk scene overlooking NFT rugs parting on a boat
          </span>
        </a>
      </div>
      <section id="anchor-splash-pageZ" className="d-flex-row bg-navy-purple">
        <div className="">
          <img
            src={splashPage}
            className="imgshadow img-fluid"
            alt="Boardwalk scene overlooking NFT rugs parting on a boat. The vendors and signs call out notorious rug pulls and scams."
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
