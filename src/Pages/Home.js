import React from 'react';
import MetaTags from 'react-meta-tags';
import RugzHome from '../Components/RugzHome';
// import RugzFooter from "../Components/RugzFooter";
// import Slideshow from "../Components/SlideShow";

export default function Home() {
  return (
    <>
      <MetaTags>
        <title>Notorious Rugs - Home | Free NFTs</title>
        <link rel="canonical" href="https://www.notoriousrugs.io" />
        <meta
          name="google-site-verification"
          content="_38ouHz07qzzhb4uwgZSWQpgghnmVLFVG8K6Q5CFI8g"
        />
        <meta
          name="description"
          content="Discover how to mint your free Notorious Rugs NFT and learn about blockchain safety, crypto best practices, and NFT technology in a risk-free, educational environment."
        />
        <meta
          name="keywords"
          content="Free NFTs, NFT education, blockchain learning, crypto safety, Ethereum NFTs, mint NFTs, smart contracts, NFT marketplace, NFT security, digital collectibles, NFT community"
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Notorious Rugs - a collection of free NFTs"
        />
        <meta
          property="og:description"
          content="Mint your free Notorious Rugs NFT and explore blockchain technology in a safe, educational environment. No cost, no risk—just learning and fun!"
        />
        <meta property="og:url" content="https://www.notoriousrugs.io" />
        <meta
          property="og:image"
          content="https://www.notoriousrugs.io/images/rugs8.webp"
        />
        <meta property="og:type" content="website" />
      </MetaTags>
      <div className="Home-header-background pl-2">
        <RugzHome />
        {/* <RugzFooter /> */}
      </div>
    </>
  );
}
