import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import './MenuNavBar.css';
import MintButton from './MintButton.js';

export default function MenuNavBar() {
  return (
    <>
      {/* image is located in public/images */}
      <Navbar
        className="max-width-100-pctx bg-body-tertiary"
        sticky="top"
        variant="light"
        bg="black"
        expand="sm"
      >
        <Container>
          <div className="d-flex container-fluid ">
            <a className="nav-home link-item-gap" href="/">
              Home
            </a>
            <a className="nav-freeNFT link-item-gap" href="/Free-NFT">
              Free NFT
            </a>
            <a className="nav-about link-item-gap" href="/About">
              About
            </a>
            <a className="nav-partners link-item-gap" href="/Partners">
              Partners
            </a>
            <a
              className="nav-knowledge-base link-item-gap"
              href="/Blockchain-Glossary"
            >
              Blockchain Glossary
            </a>
            <a className="nav-contact link-item-gap" href="/Contact-Us">
              Contact Us
            </a>
          </div>
          <div className="d-flex">
            <a href="https://x.com/notoriousrugs" title="Formerly Twitter">
              <svg
                fill="#fff"
                width="32"
                height="33"
                viewBox="0 0 24 24"
                alt="X, formerly Twitter URL"
                className="pr-2 ml-3 justify-content-end myBtn"
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
                title="Go to our collection on Open Sea"
              />
            </a>
            <MintButton
              btnText={'Mint'}
              btnId={'mint'}
              btnSize={'sm'}
              btnClass={'ml-2 p-1'}
              title={'Mint your Notorious Rug NFT from our DAPP'}
              aria-label="Go to the Mint DAPP"
            />
          </div>
        </Container>
      </Navbar>
    </>
  );
}
