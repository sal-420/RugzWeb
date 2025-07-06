import React from 'react';
import MetaTags from 'react-meta-tags';
import RugzHome from '../Components/RugzHome';
// import RugzFooter from "../Components/RugzFooter";
// import Slideshow from "../Components/SlideShow";

export default function Home() {
  return (
    <>
      <MetaTags>
        <link rel="canonical" href="https://www.notoriousrugs.io" />
        {/* <title>"Notorious Rugs - Home"</title> */}
        <meta
          name="google-site-verification"
          content="_38ouHz07qzzhb4uwgZSWQpgghnmVLFVG8K6Q5CFI8g"
        />
        <meta
          name="description"
          content="Notorious Rugs - a collection of free NFTs"
        />
        <meta
          name="keywords"
          content="Free NFTs, NFT education, crypto, blockchain, crypto art, digital collectibles, NFT marketplace, Ethereum NFTs, free NFT mints"
        />
        <meta property="og: locale" content="es_ES" />
        <meta
          property="og:title"
          content="Notorious Rugs - a collection of free NFTs"
        />
        <meta
          property="og:description"
          content="Notorious Rugs - a collection of free NFTs"
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
