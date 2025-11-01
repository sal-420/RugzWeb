import React from 'react';
import { Helmet } from 'react-helmet';
import boatscene from '../images/boatscene7.webp';

import './RugzHomeBoatScene.css';
/* Preload the webp image using an absolute path relative to the public folder */
export default function RugzHomeBoatScene() {
  return (
    <>
      {/* <Helmet>
        <link rel="preload" as="image" href={boatscene} fetchpriority="high" />
      </Helmet> */}
      <section className=" d-flex-row bg-navy-purple">
        <div
          className="xbg-boat-scene-container"
          // style={{ backgroundImage: `url(${boatscene})` }}
          style={{ position: 'relative', overflow: 'hidden' }}
          role="img"
          aria-label="A scary night-time boat scene with monsters while NFT rugs party"
        >
          <img
            src={boatscene}
            alt="A scary night-time boat scene with monsters while NFT rugs party"
            className="imgshadow img-fluid boatscene-img"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
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
