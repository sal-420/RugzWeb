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
        <title>"NotoriousRugs - Partners"</title>
        <meta
          name="description"
          content="6969 free-to-low-cost NotoriousRug NFTs, inspired by numerous appalling rug pulls, are available to collectors. The first 420 NFTs are completely free, while the rest are offered at an almost-free price. Our mission is to provide users with an enjoyable experience and valuable education on their NFT journey."
        />
        <meta name="keywords" content="Free, NFT" />
        <meta property="og: locale" content="es_ES" />
        <meta
          property="og:title"
          content="NotoriousRugs - a collection fo Free NFTs"
        />
        <meta
          property="og:description"
          content="6969 free-to-low-cost NotoriousRug NFTs, inspired by numerous appalling rug pulls, are available to collectors. The first 420 NFTs are completely free, while the rest are offered at an almost-free price. Our mission is to provide users with an enjoyable experience and valuable education on their NFT journey."
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
              At NotoriousRugs, we believe in the power of collaboration and
              partnership. We are proud to work with a diverse group of partners
              who share our commitment to innovation, quality, and excellence.
              Our partners help us to deliver the best possible solutions to our
              clients, and we are grateful for their support and expertise.
            </p>
            <p>
              Below, you will find a selection of our valued partners. Each of
              these organizations brings unique strengths and capabilities to
              our network, and we are honored to have them as part of the
              NotoriousRugs.
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
