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
          content="6969 Free NFTs inspired by numerous appalling rug pulls. The first 4200 NFTs are completely free, while the rest are available at an almost-free price."
        />
        <meta name="keywords" content="Free NFTs, NFT education" />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:title"
          content="NotoriousRugs - a collection of Free NFTs"
        />
        <meta
          property="og:description"
          content="6969 Free NFTs inspired by numerous appalling rug pulls. The first 4200 NFTs are completely free, while the rest are available at an almost-free price."
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
        <h1 className="font-weight-bold">About NotoriousRugs</h1>
        <p>
          Inspired by past infamous rug pulls, learning experiences,
          influencers, and memes that shaped the NFT space, this collection
          offers a no cost hands on NFT experience.
        </p>
        <p>
          {' '}
          Our mission is to provide a free education on smart contracts, DAPPs,
          GAS, blockchain, and crypto technology. We offer both a minting and
          secondary market experience.
        </p>
        <div>
          <ol>
            <li>
              Mint directly from our smart contract{' '}
              <a
                href="https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code"
                alt="go to Etherscan contract address"
                aria-label="go to Etherscan contract address"
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
              Buy/Sell NotoriousRugs on the secondary market &nbsp;
              <a
                href="https://opensea.io/collection/notorious-rugs"
                title="Open Sea"
                className="myBtn"
              >
                <img
                  src="images/opensea.png"
                  alt="Go to our collection on Open Sea"
                  aria-label="Go to our collection on Open Sea"
                  title="Go to our collection on Open Sea"
                />
                &nbsp; Open Sea
              </a>
            </li>
          </ol>
        </div>
        <p>
          <strong className="text-white">Note: </strong> we are not affiliated
          with with any blockchain or secondary market. We do not endorse or
          promote any specific platform. We recommend that you do your own
          research and choose a platform that meets your needs. For our
          collection, we are using the ethereum block chain and the Open Sea
          secondary market. Both are the most recognized, have a large user
          base, which means you will have a better chance of finding buyers for
          your NFTs.
        </p>
        <section className="text-break text-wrap">
          <h2 className="font-weight-bold">FAQs</h2>
          <h3>Is this contract safe?</h3>
          <p>
            Check out our contract:{' '}
            <a
              href="https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code"
              aria-label="go to Etherscan contract address"
            >
              0xf567d57b1450258ebbcfa323798a0ef90d081aef
            </a>
            &nbsp;on the ethereum blockchain.{' '}
          </p>
          <p>You will see its safe and mints are free!</p>
        </section>
        <section>
          <h3>What is a rug pull?</h3>
          <p>
            A <strong className="text-white">rug pull</strong>, is a scam
            project that is promoted with ties to a coin which promises of high
            returns. Scammers then withdraw the funds and abandon project
            leaving the project worthless.
          </p>
        </section>
        <section>
          <h3>What is a blockchain?</h3>
          <p>
            A <strong className="text-white">blockchain</strong> is a
            decentralized public digital ledger that securely records
            transactions across a network of computers. It consists of linked
            blocks of data that are immutable, meaning once recorded, the
            information cannot be altered without consensus from the network
            participants.
          </p>
        </section>
        <section>
          <h3>What is a NFT?</h3>
          <p>
            A <strong className="text-white">NFT</strong>, also known as a{' '}
            <strong className="text-white">Non Fungible Token</strong>, is a
            unique digital asset that represents ownership of a specific item or
            piece of content, such as art.
          </p>
        </section>
        <section>
          <h3>What is a minting?</h3>
          <p>
            <strong className="text-white">Minting</strong>, also known as{' '}
            <strong className="text-white"> mint</strong>, is the process of
            storing a digital file on the blockchain. This process creates a
            unique token (ID) that represents ownership of the digital file.
            Minting is typically done through a smart contract, or an executed
            transaction on the secondary market.
          </p>
        </section>
        <section>
          <h3>What is a smart contract?</h3>
          <p>
            A <strong className="text-white">crypto contract</strong>, also
            known as a <strong className="text-white">smart contract</strong>,
            is a self-executing program stored on a blockchain. Smart contracts
            enforces the terms of an agreement, verify and enforce transactions
            without the need for intermediaries.
          </p>
        </section>
        <section>
          <h3>What is a DAPP?</h3>
          <p>
            A <strong className="text-white">DAPP</strong> is a decentralized
            application that can be a page within a website or a standalone
            single-page website. The purpose of a DAPP is to provide a friendly
            user interface for interacting with a smart contract.
          </p>
        </section>
        <section>
          <h3>What is GAS?</h3>
          <p>
            <strong className="text-white">GAS</strong> is the fee paid to use
            the blockchain. It operates on a demand-pricing model depending on
            blockchain traffic.
          </p>
        </section>
        <section>
          <h3>What are Coin Prices?</h3>
          <p>
            Coins/Tokens are the currency for the specific crypto blockchain.
            Cryptocurrency prices are primarily determined by supply and demand;
            when demand for a coin increases but the supply remains limited, the
            price tends to rise.
          </p>
        </section>

        <section>
          <h4> How do you determine prices?</h4>
          <ol>
            <li>
              We use industry-standard API's to fetch the real-time block-chain
              coin prices to calculate the USD amount.
            </li>
            <li>
              Coin prices start at default value of $1 USD and is updated every
              15 minutes using industry-standard API protocols to get the latest
              coin price. We then convert the coin value to USD. If you see a
              coin price of $1 USD, this indicates a{' '}
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
            Our
            <HashLink
              smooth
              to="/#anchor-current-usd-price"
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'auto', block: 'end' })
              }
            >
              &nbsp;Current USD Price
            </HashLink>
            &nbsp; section of our Home page provides the price of three popular
            coins in one location.
          </p>
        </section>

        <section>
          <h3>What are secondary markets?</h3>
          <p>
            <strong className="text-white">Secondary markets</strong> are market
            places where NFTs can be resold/traded after the original purchase
            (mint). They are typically decentralized platforms that allow users
            to buy, sell, and trade NFTs directly with one another. Examples of
            secondary markets include OpenSea, Rarible, and Foundation. We are
            not affiliated with any secondary market.
          </p>
        </section>
        <section>
          <h3>What is a wallet?</h3>
          <p>
            A <strong className="text-white">wallet</strong> is a software
            program (browser extension) that stores your public and private
            keys, allowing you to send and receive cryptocurrency. It also
            interacts with various blockchain networks to enable users to manage
            their digital assets.
          </p>
          <p>
            Wallets can also be hardware-based, known as{' '}
            <strong className="text-white">cold wallets</strong>, meaning they
            are on a physical device that you connect to your laptop making it
            more secure against hacking and online threats.
          </p>
        </section>
        <section>
          <hr className="border-2 border-top border-white" />
        </section>
        <section>
          <p>That's enough jargon—begin your NFT journey and start minting!</p>
          <h3>Test your NFT skills</h3>
          <p>
            Can you spot the notorious rugs pulls on the{' '}
            {/* <LinkToAnchor
              anchorId="anchor-splash-page"
              anchorText="last image"
            />{' '} */}
            {/* of the home page. */}
            <HashLink
              to="/#anchor-splash-page"
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'auto', block: 'end' })
              }
            >
              &nbsp;last image
            </HashLink>
            &nbsp;of our Home page.
          </p>
          <p>Keep you NFT journey light:</p>
          <RugzHomeHumor />
        </section>
      </main>
    </>
  );
}
