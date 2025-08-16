import React from 'react';
import MetaTags from 'react-meta-tags';
import Container from 'react-bootstrap/Container';
import FpvNycPartnerCard from '../Components/PartnerFpvNycCard';
import GreenLightCard from '../Components/PartnerGreenLightCard';
import '../Components/Partner.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Partners() {
  return (
    <>
      <MetaTags>
        <title>Notorious Rugs - Partners</title>
        <meta
          name="description"
          content="Meet the partners who help Notorious Rugs deliver innovative, educational NFT experiences. Discover our collaborators in blockchain and digital art."
        />
        <link
          rel="canonical"
          href="https://www.notoriousrugs.io/Partners"
        ></link>
        <meta
          name="keywords"
          content="NFT partners, blockchain collaboration, digital art partners, Notorious Rugs partners, NFT community partners"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Notorious Rugs - Partners" />
        <meta
          property="og:description"
          content="Meet the partners who help Notorious Rugs deliver innovative, educational NFT experiences."
        />
        <meta
          property="og:url"
          content="https://www.notoriousrugs.io/Partners"
        />
        <meta
          property="og:image"
          content="https://notoriousrugs.io/images/rugs8.webp"
        />
        <meta property="og:type" content="website" />
      </MetaTags>
      <main className="pt-5 text-white text-muted text-break text-wrap">
        <div className="narrative text-center">
          <h1>Meet Our Partners</h1>
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
            <h2 className="w-100 text-center mb-4">Featured Partners</h2>
            <Row className="d-flex justify-content-center align-items-stretch">
              <Col xs={12} md={6} lg={4} className="mb-4">
                <FpvNycPartnerCard />
              </Col>
              <Col xs={12} md={6} lg={4} className="mb-4 ">
                <GreenLightCard />
              </Col>
            </Row>
          </section>
        </Container>
      </main>
    </>
  );
}
