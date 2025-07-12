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
        <link rel="canonical" href="https://www.notoriousrugs.io/About" />
        <title>About our free NFTs | How to mint</title>
        <meta
          name="description"
          content="Notorious Rugs - a collection of free NFTs"
        />
        content="Free NFTs, NFT education, crypto, blockchain, crypto art,
        digital collectibles, NFT marketplace, Ethereum NFTs, free mint NFTs"
        <meta
          name="keywords"
          content="Free NFTs, NFT education, crypto, blockchain, crypto art, digital collectibles, NFT marketplace, Ethereum NFTs, free NFT mints"
        />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:title"
          content="Notorious Rugs - a collection of Free NFTs"
        />
        <meta
          property="og:description"
          content="Notorious Rugs - a collection of free NFTs"
        />
        <meta property="og:url" content="https://www.notoriousrugs.io/About" />
        <meta
          property="og:image"
          content="https://www.notoriousrugs.io/images/rugs8.webp"
        />
        <meta property="og:type" content="website" />
      </MetaTags>
      <main className="col-12 col-md-8 mx-auto text-muted">
        <article>
          <p></p>
          <h1 className="font-weight-bold">About Notorious Rugs free NFTs</h1>
          <p>
            Inspired by notorious rug pulls, gotcha learning experiences,
            'influencers', and the memes that have shaped the NFT space. the
            Notorious Rugs collection was created as a reminder of the
            importance of due diligence.
          </p>

          <p>
            The Notorious Rugs free NFT collection offers a hands-on way to
            learn about smart contracts, DAPPs, GAS, blockchain, and crypto
            technology. By minting NFTs through our DAPP, directly from the
            smart contract, or exploring the secondary market, you’ll gain
            real-world experience that builds your confidence and understanding
            of the evolving blockchain landscape.
          </p>
          <p>
            We hope that displaying our NFT serves a similar purpose to the
            "Drug Free Zone" signs proudly displayed in communities — a visible
            reminder to promote awareness and encourage safe practices.
          </p>
          <section>
            <h2 className="font-weight-bold">
              How can I mint the free Notorious Rugs NFTs?
            </h2>

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
                Buy/Sell Notorious Rugs on the secondary market &nbsp;
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

            <p>
              <strong className="text-white">Note: </strong> we are not
              affiliated with with any blockchain or secondary market. We do not
              endorse or promote any specific platform. We recommend that you do
              your own research and choose a platform that meets your needs. For
              our collection, we are using the ethereum block chain and the Open
              Sea secondary market. Both are the most recognized, have a large
              user base, which means you will have a better chance of finding
              buyers for your NFTs.
            </p>
          </section>
          <section className="text-break text-wrap">
            <h2>Is the Notorious Rugs contract safe?</h2>
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
            <p>You will see its safe and NFT mints are free!</p>
          </section>

          <section>
            <h2>How much can I make minting Notorious Rugs?</h2>
            <ol>
              <li>
                You can't guarantee any profit from minting Notorious Rugs NFTs.
                This is a free collection about education, fun and promoting
                safe practices, not investment. The value of Notorious Rugs is
                based on what you personally gain from the learning experience.
              </li>
              <li>
                Stranger things have happened in the NFT space, so you never
                know what the future holds in the secondary market.
              </li>
            </ol>
          </section>
        </article>
        <article>
          <section>
            <h2>Red flags to look for to avoid being scammed</h2>
            <p>
              <strong className="text-white">Guaranteed Profits:</strong> no
              investment can guarantee profits. If a project promises guaranteed
              returns, it's a scam.
            </p>
            <p>
              <strong className="text-white"> Unsolicited Contact:</strong>{' '}
              legitimate investments don't cold-call.
            </p>
            <p>
              <strong className="text-white">Pressure Tactics:</strong> pressure
              tactic is a classic extortion technique to extract funds from
              victims.
            </p>
            <p>
              <strong className="text-white">Website:</strong> if it's recently
              registered, has no contact information, or has misspellings and
              poor grammar, it's most likely a scam.
            </p>
            <p>
              <strong className="text-white">Private Information:</strong> never
              share your passwords, or sensitive details to unverified sources
              over the phone, email, or social media.
            </p>
            <p>
              <strong className="text-white">Password:</strong> NEVER share your
              password! This cannot be repeated often enough.
            </p>
            <p>
              <strong className="text-white">Verify Everything:</strong> due
              diligence - verify the legitimacy of any investment opportunity by
              researching
            </p>
          </section>
        </article>
        <hr className="border-2 border-top border-white" />
        <article>
          <h2 className="font-weight-bold text-break text-wrap">
            New to NFTs? Here are some key terms you should know
          </h2>

          <section>
            <h3>What is a rug pull?</h3>
            <p>
              A <strong className="text-white">rug pull</strong>, is a scam
              project that is promoted with ties to a coin which promises of
              high returns. Scammers then withdraw the funds and abandon project
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
            <p>Block chains have no customer support - you are on your own.</p>
          </section>
          <section>
            <h3>What is a NFT?</h3>
            <p>
              A <strong className="text-white">NFT</strong>, also known as a{' '}
              <strong className="text-white">Non Fungible Token</strong>, is a
              unique digital asset that represents ownership of a specific item
              or piece of content, such as art.
            </p>
          </section>
          <section>
            <h3>What is minting?</h3>
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
              is a self-executing{' '}
              <strong className="text-white">immutable</strong> program stored
              on a blockchain. Smart contracts enforces the terms of an
              agreement, verify and enforce transactions without the need for
              intermediaries.
            </p>
            <h3>What is an immutable smart contract?</h3>
            <p>
              An <strong className="text-white">immutable</strong> smart
              contract is a contract that cannot be changed once it is pushed
              onto the blockchain. Any changes to the contract would require a
              new contract to be created. This ensures that the terms of the
              contract are enforced and cannot be altered by any party,
              providing a high level of security and trust for all participants.
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
            <h3>What is GAS?</h3>
            <p>
              <strong className="text-white">GAS</strong> is the fee paid to use
              the blockchain. It operates on a demand-pricing model depending on
              blockchain traffic.
            </p>
          </section>
          <section>
            <h3>What are Tokens?</h3>
            <p>
              <strong className="text-white">Tokens</strong> and coins are the
              digital currency of a specific blockchain. Think of them as the
              blockchain's version of dollars or euros. Just like traditional
              currencies, their prices are mainly determined by supply and
              demand: when demand goes up and supply stays limited, the price
              usually rises.
            </p>
          </section>
          <section>
            <h3>What are Coin Prices?</h3>
            <p>See our What are Tokens?</p>
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
                every 15 minutes using industry-standard API protocols to get
                the latest coin price. We then convert the coin value to USD. If
                you see a coin price of $1 USD, this indicates a{' '}
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
              &nbsp; section of our Home page provides the price of three
              popular coins in one location.
            </p>
          </section>

          <section>
            <h3>What are secondary markets?</h3>
            <p>
              <strong className="text-white">Secondary markets</strong> are
              market places where NFTs can be resold/traded after the original
              purchase (mint). They are typically decentralized platforms that
              allow users to buy, sell, and trade NFTs directly with one
              another. Examples of secondary markets include OpenSea, Rarible,
              and Foundation. We are not affiliated with any secondary market.
            </p>
          </section>
          <section>
            <h3>What is a wallet?</h3>
            <p>
              A <strong className="text-white">wallet</strong> is a software
              program (browser extension) that stores your public and private
              keys, allowing you to send and receive cryptocurrency. It also
              interacts with various blockchain networks to enable users to
              manage their digital assets. Think of it as a bank account that
              can receive and send money.
            </p>
            <p>
              Wallets can also be hardware-based, known as{' '}
              <strong className="text-white">cold wallets</strong>, meaning they
              are on a physical device that you connect to your laptop making it
              more secure against hacking and online threats. Think of it as the
              wallet in your pocket, only you can access it when you have the
              physical device. Be sure not to lose it!
            </p>
            <p>
              Remember the passwords to your wallet - there is no customer
              support to help you reset it!
            </p>
          </section>
          <section>
            <h3>What is Tokenization?</h3>
            <p>
              <span className="text-white">Tokenization</span> is the process of
              bringing <span className="text-white">r</span>eal{' '}
              <span className="text-white">w</span>
              orld <span className="text-white">a</span>ssets (
              <span className="text-white">RWA</span>), such as securities, real
              estate, or commodities—onto the blockchain by representing them as
              digital tokens. These tokens act like digital versions of the real
              thing, making it easier to buy and sell them instantly, without
              middlemen, and with immediate automatic settlement.
            </p>
          </section>
        </article>
        <hr className="border-2 border-top border-white" />
        <article>
          <section>
            <p> How can we contact you if we have questions?</p>
            <ol>
              <li>
                Theres not much more to do, say or support. This is a free
                opportunity for you to take or not
              </li>
              <li>
                This is how the block chain works, consider this as a stepping
                stone to getting comfortable to the reality of no customer
                support on the blockchain.
              </li>
              <li>
                If you think about it, this is the direction many large companies
                are heading today, have you tried calling customer service
                recently? If you're lucky enough to find a phone number, you'll
                probably be on hold for hours.
              </li>
            </ol>
            <p>
              That's enough jargon—begin your NFT journey and start minting!
            </p>
            <p>
              Test your NFT skills - can you spot the notorious rugs pulls on
              the{' '}
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
        </article>
      </main>
    </>
  );
}
