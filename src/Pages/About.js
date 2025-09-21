import React from 'react';
import MetaTags from 'react-meta-tags';
import MintButton from '../Components/MintButton';
import RugzHomeHumor from '../Components/RugzHomeHumor';
import LinkToAnchor from '../Components/LinkToAnchor';
import { HashLink } from 'react-router-hash-link';
import Footer from '../Components/Footer';
import '../Components/Footer.css';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    // Add a unique class to the body when this page is active
    document.body.classList.add('about-active');

    // Clean up when the component unmounts
    return () => {
      document.body.classList.remove('about-active');
    };
  }, []);

  const aboutMetaTagsContent = (
    <MetaTags>
      <title>About Us - Notorious Rugs: Free NFTs & Blockchain Education</title>
      <meta
        name="description"
        content="At Notorious Rugs, we provide free NFTs and empower individuals with essential knowledge about blockchain technology and crypto safety. Discover the exciting world of digital assets in a risk-free environment."
      />
      <link rel="canonical" href="https://www.notoriousrugs.io/About" />
      <meta
        property="og:title"
        content="About Us - Notorious Rugs: Free NFTs & Blockchain Education"
      />
      <meta
        property="og:description"
        content="At Notorious Rugs, we provide free NFTs and empower individuals with essential knowledge about blockchain technology and crypto safety. Discover the exciting world of digital assets in a risk-free environment."
      />
      <meta property="og:url" content="https://www.notoriousrugs.io/About" />
    </MetaTags>
  );

  const aboutJsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.notoriousrugs.io/Blockchain-Glossary',
    url: 'https://www.notoriousrugs.io/Blockchain-Glossary',
    publisher: {
      '@type': 'Organization',
      name: 'Notorious Rugs',
      description:
        'Frequently Asked Questions about blockchain, NFTs, stablecoins, and more by Notorious Rugs.',
      url: 'https://www.notoriousrugs.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.notoriousrugs.io/images/rugs8.webp',
      },
    },
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the Notorious Rugs contract safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Check out our contract: <a>0xf567d57b1450258ebbcfa323798a0ef90d081aef</a> on the ethereum blockchain.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I make minting Notorious Rugs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Notorious Rugs NFTs are for education, fun, and promoting safe practices—not investment. There are no guaranteed profits. The true value comes from what you learn and experience. While the NFT space can be unpredictable, our focus is on learning, not speculation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I mint the free Notorious Rugs NFTs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "You can mint the free Notorious Rugs NFTs by: 1. Minting directly from our DAPP at <a href='https://mint.notoriousrugs.io/'>https://mint.notoriousrugs.io/</a> or from our smart contract at <a href='https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code'>0xf567d57b1450258ebbcfa323798a0ef90d081aef</a>. 2. Buying or selling Notorious Rugs on the secondary market, such as the Notorious Rugs collection on <a href='https://opensea.io/collection/notorious-rugs'>OpenSea</a>.",
        },
      },
    ],
  };

  return (
    <>
      {aboutMetaTagsContent}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLdData) }}
      />

      <main className="col-12 col-md-8 mx-auto text-muted">
        <article>
          <p></p>
          <h1>About Notorious Rugs free NFTs</h1>
          <p>
            Inspired by notorious rug pulls, gotcha learning experiences,
            influencer's, and the memes that have shaped the NFT space. The
            Notorious Rugs collection was created as a reminder of the
            importance of due diligence.
          </p>

          <p>
            The Notorious Rugs free NFT collection offers a hands-on way to
            learn about smart contracts, DAPPs, GAS, blockchain, and crypto
            technology. By minting NFTs through our DAPP, directly from the
            smart contract, or exploring the secondary market, you'll gain
            real-world experience that builds your confidence and understanding
            of the evolving blockchain landscape.
          </p>
          <p>
            We hope that displaying our NFT serves a similar purpose to the
            "Drug Free Zone" signs proudly displayed in communities — a visible
            reminder to promote awareness and encourage safe practices.
          </p>

          <section>
            <h2>Why are Notorious Rugs offered for free?</h2>
            <p>
              Notorious Rugs is dedicated to helping you learn about NFTs,
              blockchain, and crypto safety in a risk-free environment. We
              believe education and awareness are the best ways to protect
              yourself in the evolving world of digital assets.
            </p>
          </section>
          <section className="text-break text-wrap">
            <h2>Is the Notorious Rugs contract safe?</h2>
            <p>
              Check out our contract:{' '}
              <a
                href="https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code"
                aria-label="Etherscan contract address"
              >
                0xf567d57b1450258ebbcfa323798a0ef90d081aef
              </a>
              &nbsp; on the ethereum blockchain.{' '}
            </p>
            <p>You will see its safe and NFT mints are free!</p>
          </section>

          <section>
            <h2>How much can I make minting Notorious Rugs?</h2>
            <p>
              Notorious Rugs NFTs are for education, fun, and promoting safe
              practices—not investment. There are no guaranteed profits. The
              true value comes from what you learn and experience. While the NFT
              space can be unpredictable, our focus is on learning, not
              speculation.
            </p>
          </section>
          <section>
            <h2>How can I mint the free Notorious Rugs NFTs?</h2>
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

            <p>
              <strong className="text-white">Note: </strong> we are not
              affiliated with any blockchain or secondary market. We do not
              endorse or promote any specific platform. We recommend that you do
              your own research and choose a platform that meets your needs. For
              our collection, we are using the ethereum blockchain and the Open
              Sea secondary market. Both are the most recognized, have a large
              user base, which means you will have a better chance of finding
              buyers for your NFTs.
            </p>
          </section>

          <section>
            <h2>How do you determine coin prices?</h2>
            <p>
              We use industry-standard APIs to fetch real-time blockchain coin
              prices and convert them to USD for your convenience. Prices update
              every 15 minutes. If you see a default value of $1 USD, it means
              the API call failed and you'll need to check the price manually.
            </p>
            <p>
              Visit our
              <HashLink
                smooth
                to="/#anchor-current-usd-price"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'auto', block: 'end' })
                }
              >
                &nbsp;Current USD Price
              </HashLink>
              &nbsp;section on our <a href="/">Home page</a> for up-to-date
              prices of popular coins.
            </p>
          </section>
        </article>

        <hr className="border-2 border-top border-white" />
        <article>
          <section>
            <h2>Keep Learning and Stay Safe!</h2>
            <p>
              The world of NFTs and blockchain is exciting but can be risky.
            </p>
            <p>
              Want a challenge? Test your NFT skills—can you spot the notorious
              rug pulls on the{' '}
              <HashLink
                to="/#anchor-splash-page"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'auto', block: 'end' })
                }
              >
                &nbsp;last image
              </HashLink>
              &nbsp; of our <a href="/">Home page</a>
            </p>
            <p>Keep your NFT journey light and fun:</p>
            <RugzHomeHumor />
          </section>
        </article>
        <Footer />  
      </main>
    </>
  );
}
