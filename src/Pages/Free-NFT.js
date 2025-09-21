import React from 'react';
import MetaTags from 'react-meta-tags';
import MintButton from '../Components/MintButton.js';
import '../Components/site.css';
import { useEffect } from 'react';
import Footer from '../Components/Footer';
import '../Components/Footer.css';

export default function FreeNFT() {
  useEffect(() => {
    // Add a unique class to the body when this page is active to style the nav
    document.body.classList.add('freeNFT-active');
    // Clean up when the component unmounts
    return () => {
      document.body.classList.remove('freeNFT-active');
    };
  }, []);

  const freeNftfaqJsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.notoriousrugs.io/Free-NFT',
    url: 'https://www.notoriousrugs.io/Free-NFT',
    publisher: {
      '@type': 'Organization',
      name: 'Notorious Rugs',
      url: 'https://www.notoriousrugs.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.notoriousrugs.io/images/rugs8.webp',
      },
    },
    mainEntity: [
      {
        type: 'Question',
        name: 'Are Notorious Rugs NFTs free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the first 4020 Notorious Rugs NFTs are free to mint. Subsequent mints (4021-6969) will have a small fee of 0.0042069 ETH to cover GAS costs.',
        },
      },
      {
        type: 'Question',
        name: 'How can I mint the free Notorious Rugs NFTs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "You can mint the free Notorious Rugs NFTs by: 1. Minting directly from our DApp at <a href='https://mint.notoriousrugs.io/'>https://mint.notoriousrugs.io/</a> or from our smart contract at <a href='https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code'>0xf567d57b1450258ebbcfa323798a0ef90d081aef</a>. 2. Buying or selling Notorious Rugs on the secondary market, such as the Notorious Rugs collection on <a href='https://opensea.io/collection/notorious-rugs'>OpenSea</a>.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why are Notorious Rugs offered for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Notorious Rugs is dedicated to helping you learn about NFTs, blockchain, and crypto safety in a risk-free environment. We believe education and awareness are the best ways to protect yourself in the evolving world of digital assets. Always practice due diligence and never share your private information.',
        },
      },
    ],
  };

  const freeNFTMetaTagsContent = (
    <MetaTags>
      <title>How to Mint Your Free NFTs - Notorious Rugs</title>
      <meta
        name="description"
        content="Discover easy ways to mint your free NFTs at Notorious Rugs. Follow our simple guides with direct links to claim your digital assets."
      />
      <link rel="canonical" href="https://www.notoriousrugs.io/Free-NFT" />

      <meta
        property="og:title"
        content="How to Mint Your Free NFTs - Notorious Rugs"
      />
      <meta
        property="og:description"
        content="Discover easy ways to mint your free NFTs at Notorious Rugs. Follow our simple guides with direct links to claim your digital assets."
      />
      <meta property="og:url" content="https://www.notoriousrugs.io/Free-NFT" />
    </MetaTags>
  );

  return (
    <>
      {freeNFTMetaTagsContent}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(freeNftfaqJsonLdData),
        }}
      />    
      <main className="col-12 col-md-8 mx-auto text-muted">
        <p
          style={{
            // background: '#222',
            // color: '#222',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            border: '2px solid #009670',
          }}
        >
          Ready to start your NFT journey? <br />
          <span style={{ fontWeight: 'normal' }}>
            Mint your free Notorious Rugs NFT now and experience blockchain
            technology firsthand—no cost, no risk, just learning and fun!
          </span>
        </p>

        <article>
          <h1 className="font-weight-bold">
            How can I mint the free Notorious Rugs NFTs?
          </h1>
          <ol>
            <li>
              Mint directly from our smart contract{' '}
              <a
                href="https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code"
                alt="go to Etherscan contract address"
                aria-label="Notorious Rugs Etherscan contract address"
              >
                0xf567d57b1450258ebbcfa323798a0ef90d081aef
              </a>
            </li>
            <li>
              Mint from our{' '}
              <MintButton
                btnText="DAPP"
                btnId="dapp"
                btnSize="sm"
                btnClass="ml-1 p-0"
              />{' '}
            </li>
            <li>
              Buy/Sell Notorious Rugs on the secondary market &nbsp;
              <a
                href="https://opensea.io/collection/notorious-rugs"
                title="Open Sea collection"
                className="myBtn"
              >
                <img
                  src="images/opensea.png"
                  alt="Notorious Rugs collection on Open Sea"
                  aria-label="Notorious Rugs collection on Open Sea"
                  title="Notorious Rugs collection on Open Sea"
                />
                &nbsp; Open Sea
              </a>
            </li>
          </ol>
        </article>
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
          Notorious Rugs is dedicated to helping you learn about NFTs,
          blockchain, and crypto safety in a risk-free environment. We believe
          education and awareness are the best ways to protect yourself in the
          evolving world of digital assets. Always practice due diligence and
          never share your private information.
        </p>
        <article>
          <section>
            <h2>Red Flags to Avoid Investment Scams</h2>
            <ul>
              <li>
                <strong className="text-white">Guaranteed Profits:</strong> No
                investment can guarantee profits. If it sounds too good to be
                true, it probably is.
              </li>
              <li>
                <strong className="text-white">Unsolicited Contact:</strong>{' '}
                Legitimate investments don't cold-call or reach out
                unexpectedly.
              </li>
              <li>
                <strong className="text-white">Pressure Tactics:</strong>{' '}
                Scammers use urgency to rush your decisions. Stay calm and
                skeptical.
              </li>
              <li>
                <strong className="text-white">Website Quality:</strong> Be wary
                of sites with recent registrations, missing contact info, or
                poor grammar.
              </li>
              <li>
                <strong className="text-white">Private Information:</strong>{' '}
                Never share passwords, private keys, or sensitive info with
                unverified sources. No one legitimate will ever ask for these.
              </li>
            </ul>

            <p>
              Remember, these red flags aren't unique to crypto. Scammers use
              the same tricks across all investment types.
            </p>

            <p>
              <strong className="text-white">Verify Everything:</strong> Do your
              due diligence before committing to any investment. Research the
              legitimacy of the opportunity and potential risks.
            </p>
          </section>
        </article>
        <Footer />
      </main>
    </>
  );
}
