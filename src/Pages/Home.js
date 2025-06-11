import React from 'react';
import MetaTags from 'react-meta-tags';
import RugzHome from '../Components/RugzHome';
// import RugzFooter from "../Components/RugzFooter";
// import Slideshow from "../Components/SlideShow";

export default function Home() {
  return (
    <>
      <MetaTags>
        <link rel="canonical" href="https://notoriousrugs.io/"></link>
        <title>"Notorious Rugs - Home"</title>
        <meta
          name="google-site-verification"
          content="_38ouHz07qzzhb4uwgZSWQpgghnmVLFVG8K6Q5CFI8g"
        />
        <meta
          name="description"
          content="6969 Free NFTs inspired by numerous appalling rug pulls. The first 4200 NFTs are free, while the rest are offered at an almost-free price."
        />
        <meta
          name="keywords"
          content="Free NFTs, NFT education, , crypto, blockchain, crypto art, digital collectibles, NFT marketplace, Ethereum NFTs, free mint NFTs"
        ></meta>
        <meta property="og: locale" content="es_ES" />
        <meta
          property="og:title"
          content="Notorious Rugs - a collection of free NFTs"
        />
        <meta
          property="og:description"
          content="6969 Free NFTs inspired by numerous appalling rug pulls. The first 4200 NFTs are free, while the rest are offered at an almost-free price."
        />
        <meta property="og:url" content="https://notoriousrugs.io" />
        <meta
          property="og:image"
          content="https://notoriousrugs.io/images/rugs8.webp"
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
