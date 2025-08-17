import React from "react";
import clouds from "../images/cloudrug.webp";
import notoriusrug from "../images/notoriusrug.webp";

export default function RugzHomeClouds() {
  return (
    <section className="bg-black-navy d-flex-row img-fluid pt-5">
      {/* <h1 className="text-center pt-3" aria-label="Notorious Rugs free NFTs">
        <img
          src={notoriusrug}
          className="imgshadow col img-notorius-clouds-size img-fluid pt-5 pl-5 pr-5"
          alt="Notorious Rugs free NFTs logo"
          loading="lazy"
        />
      </h1> */}

      {/* <h1 className="text-center pt-3 fw-bold">
        <i>
          <span className="text-white">the notorious</span>{' '}
          <span className="text-danger ">RUGs</span>
        </i>
      </h1> */}

      <div className="row text-center">
        <div className="col"></div>
        <div className="col-10 text-center">
          <img
            src={clouds}
            className="imgshadow col img-cloud-size img-fluid pl-5 pr-5"
            alt="NFT rugs and ethereum icons parachuting in clouds"
          />
        </div>
        <div className="col"></div>
      </div>
      <div className="text-center pt-2 row ">
        <div className="col"></div>
        <div className="col-8 text-center pt-2">
          <p className="text-white">
            After the sudden disappearance of several Ruggies in Rugwood City, a
            group of misfits set out to uncover the mystery. As they search for
            answers, they discover that Heavy Fabric, a corporate darling in the
            public eye, may not be so sweet after all. The notorious RUGs is a
            collection of
            <span className="rotate3 rotate rotate_this3 ml-1">
              <span className="text-info">6</span>
              <span className="text-danger">9</span>
              <span className="text-info">6</span>
              <span className="text-danger">9</span>
            </span>{' '}
            Rugs living on the Ethereum Blockchain set out to discover the
            truth.
          </p>
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
}
