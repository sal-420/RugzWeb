import React from 'react';
import MetaTags from 'react-meta-tags';
import MintButton from '../Components/MintButton';
import RugzHomeHumor from '../Components/RugzHomeHumor';
import LinkToAnchor from '../Components/LinkToAnchor';
import { HashLink } from 'react-router-hash-link';
import Footer from '../Components/Footer';
import '../Components/Footer.css';
import { useEffect } from 'react';

export default function Contact() {
     useEffect(() => {
       // Add a unique class to the body when this page is active
       document.body.classList.add('contact-active');
  
       // Clean up when the component unmounts
       return () => {
         document.body.classList.remove('contact-active');
       };
     }, []);
  
  const contactMetaTagsContent = (
    <MetaTags>
      <title>Contact Us - NotoriousRugs</title>
      <meta
        name="description"
        content="Need assistance? Visit our Free-NFT page for answers to your questions about our free NFTs. Our comprehensive resources are designed to help you quickly find the information you need!"
      />
      <link rel="canonical" href="https://www.notoriousrugs.io/Contact-Us" />
      <meta property="og:title" content="Contact Us - NotoriousRugs" />
      <meta
        property="og:description"
        content="Need assistance? Visit our Free-NFT page for answers to your questions about our free NFTs. Our comprehensive resources are designed to help you quickly find the information you need!"
      />
      <meta
        property="og:url"
        content="https://www.notoriousrugs.io/Contact-Us"
      />
    </MetaTags>
  );


  return (
    <>
      {contactMetaTagsContent}
      <main className="col-12 col-md-8 mx-auto text-muted">
        <p
          style={{
            // background: '#222',
            // color: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            border: '2px solid #ffc107',
          }}
        >
          As part of our mission at Notorious Rugs, we strive to provide you
          with the resources and support you need to navigate the world of NFTs
          and blockchain safely. Remember, education and awareness are key to
          protecting yourself in the digital asset space.
        </p>

        <hr className="border-2 border-top border-white" />
        <article>
          <h1>Contact & Support</h1>
          <p>Notorious Rugs is a self-service educational project. </p>
          <p>
            For help on how to mint Notorious Rugs see our{' '}
            <a href="/Free-NFT">Free NFT</a> page.
          </p>
          <p>
            For general questions about blockchain, NFTs, or crypto safety,
            please refer to our{' '}
            <a href="/Blockchain-Glossary">Blockchain Glossary</a>. It covers
            many common topics and questions.
          </p>
          <p>
            Like most of the blockchain world, this project is designed for
            independent exploration — there's no traditional customer support.
            This is part of the learning experience and reflects how
            decentralized platforms operate.
          </p>
        </article>
        < Footer />
      </main>
    </>
  );
}
