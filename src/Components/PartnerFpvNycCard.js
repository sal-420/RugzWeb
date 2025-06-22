import React from 'react';
import './MyCustomCard.css';
import Card from 'react-bootstrap/Card';

function FpvNycPartnerCard() {
  return (
    <Card
      id="fpvnyc-card"
      className="mb-4"
      style={{
        width: '28rem',
        borderRadius: '2rem',
        boxShadow: '5px 10px green',
        backgroundColor: '#375a7f',
      }}
    >
      <Card.Body className="text-off-white">
        <h2>
        <a href="https://fpvnyc.com/">
          <img
            loading="lazy"
            decoding="async"
            alt="FPVNYC.com a cinema drone videos services"
            src="https://fpvnyc.com/wp-content/uploads/2023/08/FPVNYC2.jpg"
            title="A provider of premier FPV and cinema drone videos that will bring your vision to life with impactful standout visuals"
            style={{ width: '100%', height: '70' }}
            className="shadow-lightgreen"
          ></img>
        </a>
        </h2>
        <p></p>
        <Card.Subtitle className="mb-2">
          <p className="font-2em">FPV NYC</p>
        </Card.Subtitle>
        <hr />
        <Card.Title></Card.Title>
        <Card.Text className="text-muted">
          FPVNYC is a provider of{' '}
          <a
            href="https://www.fpvnyc.com"
            // style={{
            //   color: ' blue',
            // }}
            target="_blank"
            rel="noopener noreferrer"
          >
            premier FPV and cinema drone videos
          </a>{' '}
          that will bring your vision to life with impactful, standout visuals.
        </Card.Text>
        <Card.Link href="https://www.fpvnyc.com">Visit FPV NYC</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default FpvNycPartnerCard;
