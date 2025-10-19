import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <>
      {/* <hr className="border-2 border-top border-white" /> */}
      <footer className="viewport-bottom xmyfooter xfooter xbg-light">
        <div className="text-zmuted d-flex justify-content-center">
          <div>
            <hr className="border-2 border-top border-white" />
            <p className="xbg-light">
              Notorious Rugs Collection &copy; {new Date().getFullYear()}.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
