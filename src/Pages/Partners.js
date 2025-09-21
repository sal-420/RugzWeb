import React from 'react';
import MetaTags from 'react-meta-tags';
import Container from 'react-bootstrap/Container';
import FpvNycPartnerCard from '../Components/PartnerFpvNycCard';
import GreenLightCard from '../Components/PartnerGreenLightCard';
import '../Components/Partner.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Components/Footer';
import '../Components/Footer.css';

import { useEffect } from 'react';
export default function Partners() {
       useEffect(() => {
         // Add a unique class to the body when this page is active
         document.body.classList.add('partners-active');
    
         // Clean up when the component unmounts
         return () => {
           document.body.classList.remove('partners-active');
         };
       }, []);
  
  const partnersMetaTagsContent = (
    <MetaTags>
      <title>Notorious Rugs - Partners</title>
      <meta
        name="description"
        content="Meet the partners who help Notorious Rugs deliver innovative, educational NFT experiences. Discover our collaborators in blockchain and digital art."
      />
      <link rel="canonical" href="https://www.notoriousrugs.io/Partners"></link>
      <meta property="og:title" content="Notorious Rugs - Partners" />
      <meta
        property="og:description"
        content="Meet the partners who help Notorious Rugs deliver innovative, educational NFT experiences."
      />
      <meta property="og:url" content="https://www.notoriousrugs.io/Partners" />
    </MetaTags>
  );
  return (
    <>
      {partnersMetaTagsContent}
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
        <Footer />
      </main>
    </>
  );
}
