import React from 'react';
import MetaTags from 'react-meta-tags';
import MintButton from '../Components/MintButton';
import RugzHomeHumor from '../Components/RugzHomeHumor';
import LinkToAnchor from '../Components/LinkToAnchor';
import { HashLink } from 'react-router-hash-link';
import '../Components/RugzHome.css';
import '../Components/site.css';

export default function About() {
  return (
    <>
      <MetaTags>
        <title>About our free NFTs | How to mint</title>
        <meta
          name="description"
          content="Discover how to mint your free Notorious Rugs NFT and learn about blockchain safety, crypto best practices, and NFT technology in a risk-free, educational environment."
        />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://www.notoriousrugs.io/About" />

        <meta
          name="keywords"
          content="Free NFTs, NFT education, blockchain learning, crypto safety, Ethereum NFTs, mint NFTs, smart contracts, NFT marketplace, NFT security, digital collectibles, NFT community"
        />
        <meta
          property="og:title"
          content="Notorious Rugs - a collection of Free NFTs"
        />
        <meta
          property="og:description"
          content="Notorious Rugs is a free NFT collection focused on blockchain education, crypto safety, and community awareness."
        />
        <meta property="og:url" content="https://www.notoriousrugs.io/About" />
        <meta
          property="og:image"
          content="https://www.notoriousrugs.io/images/rugs8.webp"
        />
        <meta property="og:type" content="website" />
      </MetaTags>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Notorious Rugs',
            url: 'https://www.notoriousrugs.io',
            description:
              'Notorious Rugs is a free NFT collection focused on blockchain education, crypto safety, and community awareness.',
            keywords: [
              'Free NFTs',
              'NFT education',
              'blockchain learning',
              'crypto safety',
              'Ethereum NFTs',
              'mint NFTs',
              'smart contracts',
              'NFT marketplace',
              'NFT security',
              'NFT scams',
            ],
            publisher: {
              '@type': 'Organization',
              name: 'Notorious Rugs',
              url: 'https://www.notoriousrugs.io',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.notoriousrugs.io/images/rugs8.webp',
              },
            },
            sameAs: ['https://opensea.io/collection/notorious-rugs'],
            mainEntity: {
              '@type': 'Product',
              name: 'Notorious Rugs Free NFT Collection',
              image: 'https://www.notoriousrugs.io/images/rugs8.webp',
              description:
                'A collection of free NFTs designed to educate users about blockchain, smart contracts, and crypto safety.',
              brand: {
                '@type': 'Brand',
                name: 'Notorious Rugs',
              },
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '0.0',
                highPrice: '.0042069',
                priceCurrency: 'USD',
                offerCount: '6969',
                offers: [
                  {
                    '@type': 'PriceSpecification',
                    name: 'Free Notorious Rugs NFT mints',
                    '@description':
                      'Mint from our DAPP - First 4020 Notorious Rugs NFT mints will be free',
                    price: 0.0,
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/InStock',
                    url: 'https://mint.notoriousrugs.io/',
                  },
                  {
                    '@type': 'PriceSpecification',
                    name: 'Free Notorious Rugs NFT mints',
                    '@description':
                      'Mint from our contract - First 4020 Notorious Rugs NFT mints will be free',
                    price: 0.0,
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/InStock',
                    url: 'https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code',
                  },
                  {
                    '@type': 'PriceSpecification',
                    name: 'Payable formerly free Notorious Rugs NFT mints',
                    '@description':
                      'Mint from our DAPP -  mint 4021 - 6969 will be payable',
                    price: 0.0042069,
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/InStock',
                    url: 'https://mint.notoriousrugs.io/',
                  },
                  {
                    '@type': 'PriceSpecification',
                    name: 'Payable formerly free Notorious Rugs NFT mints',
                    '@description':
                      'Mint from our contract NFT - mint 4021 - 6969 will be payable',
                    price: 0.0042069,
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/InStock',
                    url: 'https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code',
                  },
                  {
                    '@type': 'PriceSpecification',
                    name: 'Payable formerly free Notorious Rugs NFT mints on Open Sea',
                    '@description':
                      'Buy or Sell Notorious Rugs on the secondary market',
                    price: '0.0042069',
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/InStock',
                    url: 'https://opensea.io/collection/notorious-rugs',
                  },
                ],
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a rug pull?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A rug pull is a scam project promoted with ties to a coin and promises of high returns. Scammers then withdraw the funds and abandon the project, leaving it worthless.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a blockchain?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A blockchain is a decentralized public digital ledger that securely records transactions across a network of computers. It consists of linked blocks of data that are immutable, meaning once recorded, the information cannot be altered without consensus from the network participants. Blockchains have no customer support - you are on your own.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is an NFT?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An NFT, or Non Fungible Token, is a unique digital asset that represents ownership of a specific item or piece of content, such as art.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is minting?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Minting, or to mint, is the process of storing a digital file on the blockchain. This creates a unique token (ID) that represents ownership of the digital file. Minting is typically done through a smart contract or by executing a transaction on the secondary market.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a smart contract?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A smart contract is a self-executing, immutable program stored on a blockchain. Smart contracts enforce the terms of an agreement, verify, and enforce transactions without the need for intermediaries.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is an immutable smart contract?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An immutable smart contract is a contract that cannot be changed once it is pushed onto the blockchain. Any changes require a new contract to be created, ensuring the terms cannot be altered by any party.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a DAPP?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A DAPP is a decentralized application that can be a page within a website or a standalone single-page website. Its purpose is to provide a user interface for interacting with a smart contract.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is GAS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'GAS is the fee paid to use the blockchain. It operates on a demand-pricing model depending on blockchain traffic.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are Tokens?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Tokens and coins are the digital currency of a specific blockchain. Think of them as the blockchain's version of dollars or euros. Their prices are mainly determined by supply and demand.",
                },
              },
              {
                '@type': 'Question',
                name: 'What are Coin Prices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "See our 'What are Tokens?' section for more information.",
                },
              },
              {
                '@type': 'Question',
                name: 'What are secondary markets?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Secondary markets are marketplaces where NFTs can be resold or traded after the original purchase (mint). They are typically decentralized platforms that allow users to buy, sell, and trade NFTs directly with one another. Examples include OpenSea, Rarible, and Foundation.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a wallet?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A wallet is a software program (browser extension) that stores your public and private keys, allowing you to send and receive cryptocurrency. Wallets can also be hardware-based (cold wallets), which are physical devices that provide extra security. Remember your wallet passwords—there is no customer support to help you reset them!',
                },
              },
              {
                '@type': 'Question',
                name: 'What is Tokenization?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tokenization is the process of bringing real world assets (RWA), such as securities, real estate, or commodities, onto the blockchain by representing them as digital tokens. These tokens act like digital versions of the real thing, making it easier to buy and sell them instantly, without middlemen, and with immediate automatic settlement.',
                },
              },
            ],
          }),
        }}
      />
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
          <strong className="text-white">Our Mission:</strong> Notorious Rugs is
          dedicated to helping you learn about NFTs, blockchain, and crypto
          safety in a risk-free environment. We believe education and awareness
          are the best ways to protect yourself in the evolving world of digital
          assets. Always practice due diligence and never share your private
          information.
        </p>
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
          <p></p>
          <h1 className="font-weight-bold">About Notorious Rugs free NFTs</h1>
          <p>
            Inspired by notorious rug pulls, gotcha learning experiences,
            'influencers', and the memes that have shaped the NFT space. The
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
            <h2 className="font-weight-bold">
              How can I mint the free Notorious Rugs NFTs?
            </h2>

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
            <ol>
              <li>
                Notorious Rugs NFTs are for education, fun, and promoting safe
                practices—not investment. There are no guaranteed profits. The
                true value comes from what you learn and experience. While the
                NFT space can be unpredictable, our focus is on learning, not
                speculation.
              </li>
            </ol>
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
        <article>
          <section>
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

            <p>This cannot be repeated often enough.</p>
            <p>
              <strong className="text-white">Verify Everything:</strong> Do your
              due diligence before committing to any investment. Research the
              legitimacy of the opportunity, including the background of its
              promoters, financials, and potential risks.
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
            <p>Blockchains have no customer support - you are on your own.</p>
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
              Minting is typically done through a smart contract or by executing
              a transaction on the secondary market.
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
            <h3>What are secondary markets?</h3>
            <p>
              <strong className="text-white">Secondary markets</strong> are
              marketplaces where NFTs can be resold/traded after the original
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
              keys (password), allowing you to send and receive cryptocurrency.
              It also interacts with various blockchain networks to enable users
              to manage their digital assets. Think of it as a bank account that
              can send and receive money.
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
              orld <span className="text-white">a</span>sets (
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
            <h2>Contact & Support</h2>
            <p>
              Notorious Rugs is a self-service educational project. This page
              has provided you with how to mint Notorious Rugs NFTs and learn
              about blockchain safety and best practices.
            </p>
            <p>
              Like most of the blockchain world, this project is designed for
              independent exploration—there’s no traditional customer support.
              This is part of the learning experience and reflects how
              decentralized platforms operate.
            </p>
            <p>
              Please review the FAQ and glossary above if you have questions.
              Everything you need to begin your NFT journey is right here!
            </p>
            <p>
              Ready to start? Mint your free Notorious Rugs NFT and experience
              blockchain firsthand.
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
      </main>
    </>
  );
}
