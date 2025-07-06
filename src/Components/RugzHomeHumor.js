import React from 'react';
import key from '../images/key.webp';
import football from '../images/football.webp';

export default function RugzHomeHumor() {
  return (
    <div className="bg-navy-black">
      <p className="text-center text-white pt-5 ">Keep it moving</p>
      <div className="container text-white ">
        <div className="row d-flex pb-5">
          <div className="col-sm-4 pt-3">
            <div
              id="earth"
              className="mx-auto"
              aria-label="Animation of globe spinning"
            ></div>
            <div className="pt-2 text-center">no matter where you at</div>
          </div>
          <div
            className="col-sm-4"
            aria-label="Animation of key unlocking lock"
          >
            <img
              src={key}
              className="img-fluid  mx-auto d-block imgsize rotate-lock"
              alt="key unlocking lock"
            />
            <div className=" text-center">unlock your fears</div>
          </div>
          <div
            className="col-sm-4 "
            aria-label="Animation of NFT Rugs spinning"
          >
            <img
              src={football}
              className="img-fluid imageRotateHorizontal mx-auto d-block imgsize"
              alt="Dancing Rugs"
            />
            <div className=" text-center">party with the notorious rugs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
