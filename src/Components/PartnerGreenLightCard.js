import React from 'react';
import Card from 'react-bootstrap/Card';
import GlowingGreen from '../images/Greenlight.webp';
import './MyCustomCard.css';

function PartnerGreenLightCard() {
  return (
    <Card
      className="mb-4"
      style={{
        width: '28rem',
        borderRadius: '2rem',
        boxShadow: ' 5px 10px #375a7f',
        backgroundColor: 'pink',
      }}
    >
      <Card.Body className="text-off-white">
        <h2>
          <a href="https://gogreenlight.co/">
            <img
              loading="lazy"
              decoding="async"
              alt="GoGreenLight.co a social dating mobile APP"
              src={GlowingGreen}
              title="Ditch the swipe life and say hello to the spice of life. With no messaging and no matching, Greenlight restores dating to its original simplicity. Connect with people doing the things you love."
              style={{ width: '100%', height: '70' }}
              className="shadow"
            ></img>
          </a>
        </h2>
        <p></p>
        <Card.Subtitle className="mb-2">
          <p className="font-2em">Go Green Light</p>
        </Card.Subtitle>
        <Card.Title></Card.Title>
        <hr />
        <Card.Text className="text-muted">
          Ditch the swipe life and say hello to the spice of life. With no
          messaging and no matching,{' '}
          <a
            href="https://gogreenlight.co/"
            // style={{
            //   color: ' blue',
            // }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Greenlight
          </a>{' '}
          restores dating to its original simplicity. Connect with people doing
          the things you love.
        </Card.Text>

        <Card.Link href="https://gogreenlight.co/">
          Visit Go Green Light
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PartnerGreenLightCard;
