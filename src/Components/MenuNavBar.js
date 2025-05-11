import React from "react";
import Container from 'react-bootstrap/Container';
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import "./MenuNavBar.css";
import MintButton from "./MintButton.js"
export default function MenuNavBar() {
     
  return (
    <>
      <Navbar
        className="max-width-100-pct bg-body-tertiary"
        sticky="top"
        variant="light"
        bg="black"
        expand="sm"
      >
        <Container>
          <Navbar.Brand href="/">
            <div>
              {/* image is located in public/images */}
              <img
                src="images/favicon.png"
                id="logo"
                alt="Home"
                aria-label="Home"
                className="img-fluidz pl-5 myBtn"
                title="Home"
              />
            </div>
          </Navbar.Brand>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Partners">Partners</Nav.Link>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto"></Nav>
          </Navbar.Collapse>
          {/* images are located in public/images */}
          {/* <a href="https://twitter.com/notoriousrugs"><img src="images/twitter.png" alt="Twitter" /></a> */}
          <div className="d-flex flex-row">
            <a href="https://x.com/notoriousrugs" title="Formerly Twitter">
              <svg
                fill="#fff"
                width="32"
                height="33"
                viewBox="0 0 24 24"
                alt="X, formerly Twitter URL"
                aria-label="X, formerly Twitter URL"
                className="pr-2 ml-5 justify-content-end myBtn"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a
              href="https://opensea.io/collection/notorious-rugs"
              title="Open Sea"
              className="myBtn"
            >
              <img
                src="images/opensea.png"
                alt="Go to our collection on Open Sea"
                aria-label="Go to our collection on Open Sea"
                title="Go to our collection on Open Sea"
              />
            </a>
            <MintButton
              btnText={'Mint'}
              btnId={'mint'}
              btnSize={'md'}
              btnClass={'ml-2 mr-5 p-1'}
              title={'Mint your Notorious Rug NFT from our DAPP'}
              aria-label="Go to the Mint DAPP"
            />
          </div>
        </Container>
      </Navbar>
    </>
  );
}
