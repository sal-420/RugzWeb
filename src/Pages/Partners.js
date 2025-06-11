import React from 'react';
import MetaTags from 'react-meta-tags';
import Container from 'react-bootstrap/Container';
import FpvNycPartnerCard from '../Components/PartnerFpvNycCard';
import GreenLightCard from '../Components/PartnerGreenLightCard';
import '../Components/Partner.css';

export default function Partners() {
  return (
    <>
      <MetaTags>
        <link rel="canonical" href="https://notoriousrugs.io/Partners"></link>
        <title>"Notorious Rugs - Partners"</title>
        <meta
          name="description"
          content="6969 Free NFTs inspired by numerous appalling rug pulls. The first 4200 NFTs are free, while the rest are offered at an almost-free price."
        />
        <meta
          name="keywords"
          content="Free NFTs, NFT education, , crypto, blockchain, crypto art, digital collectibles, NFT marketplace, Ethereum NFTs, free mint NFTs"
        />
        <meta property="og: locale" content="es_ES" />
        <meta
          property="og:title"
          content="Notorious Rugs - a collection of free NFTs"
        />
        <meta
          property="og:description"
          content="6969 Free NFTs inspired by numerous appalling rug pulls. The first 4200 NFTs are free, while the rest are offered at an almost-free price."
        />
        <meta property="og:url" content="https://notoriousrugs.io/Partners" />
        <meta
          property="og:image"
          content="https://notoriousrugs.io/images/rugs8.webp"
        />
        <meta property="og:type" content="website" />
      </MetaTags>
      <main className="pt-5 text-white text-muted text-break text-wrap">
        <div className="narrative text-center">
          <h1>Our Partners</h1>
          <div className="col-12 col-md-8 mx-auto">
            <p className="sizeContainer">
              At Notorious Rugs, we believe in the power of collaboration and
              partnership. We are proud to work with a diverse group of partners
              who share our commitment to innovation, quality, and excellence.
              Our partners help us to deliver the best possible experience, and
              we are grateful for their support and expertise.
            </p>
          </div>
        </div>

        <Container>
          <section className="d-flex flex-wrap mx-auto justify-content-center">
            <FpvNycPartnerCard />
            <p className="pl-5"></p>
            <GreenLightCard />
            <p className="pl-5"></p>
          </section>
        </Container>
      </main>
    </>
  );
}
