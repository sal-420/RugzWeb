import React from 'react';
import MetaTags from 'react-meta-tags';
import MintButton from '../Components/MintButton';
import RugzHomeHumor from '../Components/RugzHomeHumor';
import LinkToAnchor from '../Components/LinkToAnchor';
import { HashLink } from 'react-router-hash-link';

export default function About() {
  return (
    <>
      <MetaTags>
        <link rel="canonical" href="https://notoriousrugs.io/About" />
        <title>NotoriousRugs - About</title>
        <meta
          name="description"
          content="Discover 6969 free-to-low-cost NotoriousRug NFTs, inspired by infamous rug pulls and the lessons they taught. The first 420 NFTs are completely free, while the rest are available at an almost-free price. Our goal is to provide an enjoyable experience and valuable education for NFT enthusiasts."
        />
        <meta name="keywords" content="Free, NFT" />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:title"
          content="NotoriousRugs - a collection of Free NFTs"
        />
        <meta
          property="og:description"
          content="Discover 6969 free-to-low-cost NotoriousRug NFTs, inspired by infamous rug pulls and the lessons they taught. The first 420 NFTs are completely free, while the rest are available at an almost-free price. Our goal is to provide an enjoyable experience and valuable education for NFT enthusiasts."
        />
        <meta property="og:url" content="https://notoriousrugs.io" />
        <meta
          property="og:image"
          content="https://notoriousrugs.io/images/rugs8.webp"
        />
        <meta property="og:type" content="website" />
      </MetaTags>
      <main className="col-12 col-md-8 mx-auto text-muted">
        <p></p>
        <h1 className="font-weight-bold">About Notorious Rugs</h1>
        <p>
          Inspired by past infamous rug pulls, learning experiences,
          influencers, and memes that shaped the NFT space, this collection
          offers a lighthearted take on the NFT journey. We aim to educate users
          on DAPPs, GAS, the crypto blockchain, and general crypto principles
          through free-to-low-cost NFTs, providing a hands-on experience on the
          Ethereum blockchain.
        </p>
        <p>
          We are not affiliated with We are not affiliated with any blockchain.
          We do not endorse or promote any specific blockchain. We recommend
          that you do your own research and choose a blockchain that meets your
          needs. For our collection, we are using ethereum. It is the most
          recognized, also has a large user base, which means you will have a
          better chance of finding buyers for your NFTs.
        </p>
        <section className="text-break text-wrap">
          <h2 className="font-weight-bold">FAQs</h2>
          <h3>How can I tell if this is a rug pull?</h3>
          <p>
            Check out our contract on Etherscan:{' '}
            <a
              href="https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code"
              alt="go to Etherscan contract address"
              aria-label="go to Etherscan contract address"
            >
              0xf567d57b1450258ebbcfa323798a0ef90d081aef
            </a>
            &nbsp;on the ethereum blockchain.{' '}
          </p>
          <p>You will see our contract is safe and mints are free!</p>
          <section>
            <h3>What is a contract?</h3>
            <p>
              A <strong className="text-white">crypto contract</strong>, also
              known as a{' '}
              <strong className="white-warning">smart contract</strong>, is a
              self-executing program stored on a blockchain. It automatically
              enforces the terms of an agreement when predefined conditions are
              met. Smart contracts are used to verify and enforce transactions
              without the need for intermediaries.
            </p>
          </section>
          <section>
            <h3>What is a DAPP?</h3>
            <p>
              A <strong className="text-white">DAPP</strong> is a decentralized
              application that can be a page within a website or a standalone
              single-page website. The purpose of a DAPP is to provide a
              friendly user interface for interacting with a smart contract.
            </p>
          </section>
          <section>
            <p>
              <h3>What is GAS?</h3>
              <strong className="text-white">GAS</strong> is the fee paid to use
              the blockchain. It operates on a demand-pricing model depending on
              blockchain traffic.
            </p>
          </section>
          <section>
            <h3>What are Coin Prices?</h3>
            <p>
              Coins/Tokens are the currency for the specific crypto blockchain.
              Cryptocurrency prices are primarily determined by supply and
              demand; when demand for a coin increases but the supply remains
              limited, the price tends to rise.
            </p>
          </section>
          <section>
            <p>
              Our{' '}
              <MintButton
                btnText="DAPP"
                btnId="dapp"
                btnSize="sm"
                btnClass="ml-1 p-0"
              />{' '}
              provides the current Ethereum coin (ETH) price and its payable USD
              amount.
            </p>

            <p>
              You can also mint directly from the contract:{' '}
              <a
                href="https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code"
                alt="Etherscan contract address"
                aria-label="Etherscan contract address"
              >
                0xf567d57b1450258ebbcfa323798a0ef90d081aef
              </a>
            </p>
          </section>
          <section>
            <h4> How do you determine prices?</h4>
            <ol>
              <li>
                We use industry-standard API's to fetch the real-time
                block-chain coin prices to calculate the USD amount.
              </li>
              <li>
                Coin prices start at default value of $1 USD and is updated
                every 5 minutes using industry-standard API protocols to get the
                latest coin price. We then convert the coin value USD. If you
                see a coin price of $1 USD, this indicates a{' '}
                <span className="text-white">failed API</span> call. The
                conversion to USD is a convenience we provide to our users.
              </li>
              <li>
                <strong className="text-white">Disclaimer: </strong>Failed APIs
                are beyond our control. If this should occur , you'll have the
                inconvenience to manually do the coin value to USD conversion.
              </li>
            </ol>
            <p>
              Our Current USD&nbsp;
              <HashLink
                to="/#anchor-current-usd-price"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: 'auto', block: 'end' })
                }
              >
                &nbsp;Current USD Price
              </HashLink>
              &nbsp; section of our Home page provides the price of three
              popular coins in one location.
            </p>
          </section>
          <p>
            <h3>What are secondary markets?</h3>
            <strong className="text-white">Secondary markets</strong> are market
            places where NFTs can be resold/traded after the original purchase.
            They are typically decentralized platforms that allow users to buy,
            sell, and trade NFTs directly with one another. Examples of
            secondary markets include OpenSea, Rarible, and Foundation. We are
            not affiliated with any secondary market. We do not endorse or
            promote any specific secondary market. We recommend that you do your
            own research and choose a secondary market that meets your needs.
            For our collection, we are using OpenSea. It also has a large user
            base, which means you will have a better chance of finding buyers
            for your NFTs.
          </p>
        </section>
        <section>
          <h3>Keeping it light</h3>
          <p>
            Can you spot the notorious rugs pulls on the&nbsp;
            {/* <LinkToAnchor
              anchorId="anchor-splash-page"
              anchorText="last image"
            />{' '}
            of the home page. */}
            <HashLink
              to="/#anchor-splash-page"
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'auto', block: 'end' })
              }
            >
              last image
            </HashLink>
            &nbsp;of our Home page
          </p>
          <p>Having fun with animation:</p>
          <RugzHomeHumor />
        </section>
      </main>
    </>
  );
}
