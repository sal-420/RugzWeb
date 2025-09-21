import React from 'react';
import MetaTags from 'react-meta-tags';
import { useEffect } from 'react';
import Footer from '../Components/Footer';
import '../Components/Footer.css';

export default function BlockchainKnowledgeBase() {
  useEffect(() => {
    // Add a unique class to the body when this page is active to style the nav
    document.body.classList.add('nav-knowledge-base-active');
    // Clean up when the component unmounts
    return () => {
      document.body.classList.remove('nav-knowledge-base-active');
    };
  }, []);

  const glossaryJsonLdData = {
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
          text: 'An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership of a specific item or piece of content, such as art.',
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
      {
        '@type': 'Question',
        name: 'What are Stablecoins?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stablecoins are a type of cryptocurrency designed to maintain a stable value, typically pegged to a fiat currency like the US dollar . This makes them less volatile than cryptocurrencies such as Bitcoin, making them suitable for transactions and a stable store of value.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are some pros of stablecoins?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stablecoins offer several significant advantages in the digital currency landscape:<ul><li><strong>Stability:</strong> Stablecoins are less volatile than other cryptocurrencies, making them more predictable for transactions.</li><li><strong>Fast Transactions:</strong> Transactions with stablecoins can be processed almost instantly, especially for cross-border payments, compared to traditional banking systems.</li><li><strong>Lower Transaction Fees:</strong> Using stablecoins often incurs lower fees than credit card transactions or international wire transfers.</li><li><strong>Access to DeFi Services:</strong> Stablecoins are commonly used in decentralized finance (DeFi) applications, providing opportunities for lending, borrowing, and earning interest.</li><li><strong>Global Accessibility:</strong> Stablecoins can be accessed and used globally, offering financial services to non-banked populations.</li></ul>',
        },
      },
      {
        '@type': 'Question',
        name: 'What are some cons of stablecoins?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '<ul><li><strong>Centralization Risks:</strong> Many of the most popular stablecoins are backed by fiat currencies and are controlled by centralized companies. This creates a dependency on the issuer, which can be contrary to the decentralized vision of cryptocurrencies and introduce risks of mismanagement.</li><li><strong>Regulatory Uncertainty:</strong> The regulatory landscape for stablecoins is still evolving. This lack of clarity can pose risks for investors, as new regulations could impact their use, stability, and value.</li><li><strong>Counterparty and Reserve Risks:</strong> For fiat-backed stablecoins, there is a risk that the issuer may not actually hold the full reserves they claim, or that those reserves are not as secure as stated. Mismanagement of reserves could lead to a stablecoin losing its peg.</li><li><strong>Limited Consumer Protection:</strong> Unlike traditional bank deposits, stablecoins are not insured by organizations like the FDIC. If an issuer fails, users could lose some or all of their holdings.</li><li><strong>Risk of De-Pegging:</strong> While rare for well-established, fiat-backed stablecoins, events like the collapse of the algorithmic stablecoin UST in 2022 demonstrate that stability is not always guaranteed, and a de-pegging event can cause significant losses.</li></ul>',
        },
      },
      {
        '@type': 'Question',
        name: 'What are some pros of fiat currency (US Dollar)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '<ul><li><strong>Universal Acceptance:</strong> It is widely accepted for transactions globally, both physically and digitally, providing deep market liquidity.</li><li><strong>Established Protections:</strong> Consumers benefit from strong safeguards, including FDIC insurance for bank deposits, offering robust security.</li><li><strong>Simplicity:</strong> Cash and credit cards are a straightforward and familiar way to transact for most people, requiring no special knowledge.</li><li><strong>No Conversion Needed:</strong> Transactions in dollars do not require conversion, simplifying the purchasing process.</li><li><strong>Regulatory Clarity:</strong> It operates within a well-defined regulatory framework, providing stability and trust.</li></ul>',
        },
      },
      {
        '@type': 'Question',
        name: 'What are some cons of fiat currency (US Dollar)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '<ul><li><strong>Inflation Risk:</strong> Its value can be eroded over time by inflation, diminishing purchasing power.</li><li><strong>Centralization & Trust:</strong> Its stability relies on trust in the issuing government and central bank, which can lead to volatility if that trust erodes.</li><li><strong>Limited Privacy:</strong> Transactions are not private and can be traced by financial institutions and governments.</li><li><strong>Higher Transaction Fees:</strong> Credit card transactions may incur higher fees compared to stablecoin transactions.</li><li><strong> Slower Cross-Border Payments:</strong> International transfers can be slow and more costly compared to digital alternatives.</li></ul>',
        },
      },
      {
        '@type': 'Question',
        name: 'How do stablecoins and the US dollar compare for financial use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stablecoins offer significant advantages in speed and low cost, especially for cross-border payments and accessing decentralized finance. However, they carry notable risks related to regulatory uncertainty, centralization, and the potential for losing their peg. In contrast, the US dollar offers universal acceptance, strong consumer protections like FDIC insurance, and regulatory clarity, making it highly reliable for everyday use. Its primary drawbacks are slower and more expensive international transfers. The choice between them depends on balancing the efficiency of digital assets against the proven reliability of traditional finance.',
        },
      },
    ],
  };
  
  const faqsMetaTagsContent = (
    <MetaTags>
      <title>Blockchain & NFT Terms Glossary - Notorious Rugs</title>
      <meta
        name="description"
        content="Discover key blockchain and NFT terms in our glossary at Notorious Rugs. Enhance your understanding of digital assets with clear definitions."
      />
      <link
        rel="canonical"
        href="https://www.notoriousrugs.io/Blockchain-Gloassary"
      />
      <meta
        property="og:title"
        content="Blockchain & NFT Terms Glossary - Notorious Rugs"
      />
      <meta
        property="og:description"
        content="Discover key blockchain and NFT terms in our glossary at Notorious Rugs. Enhance your understanding of digital assets with clear definitions."
      />
      <meta
        property="og:url"
        content="https://www.notoriousrugs.io/Blockchain-Gloassary"
      />
    </MetaTags>
  );

  return (
    <>
      {faqsMetaTagsContent}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLdData) }}
      />

      <main className="col-12 col-md-8 mx-auto text-muted">
        <article>
          <h1 className="text-break text-wrap">
            Key blockchain and NFT terms you should know
          </h1>

          <section>
            <h2>What is a rug pull?</h2>
            <p>
              A <strong className="text-white">rug pull</strong>, is a scam
              project that is promoted with ties to a coin which promises of
              high returns. Scammers then withdraw the funds and abandon project
              leaving the project worthless.
            </p>
          </section>
          <section>
            <h2>What is a blockchain?</h2>
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
            <h2>What is a NFT?</h2>
            <p>
              A <strong className="text-white">NFT</strong>, also known as a{' '}
              <strong className="text-white">Non-Fungible Token</strong>, is a
              unique digital asset that represents ownership of a specific item
              or piece of content, such as art.
            </p>
          </section>
          <section>
            <h2>What is minting?</h2>
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
            <h2>What is a smart contract?</h2>
            <p>
              A <strong className="text-white">crypto contract</strong>, also
              known as a <strong className="text-white">smart contract</strong>,
              is a self-executing{' '}
              <strong className="text-white">immutable</strong> program stored
              on a blockchain. Smart contracts enforces the terms of an
              agreement, verify and enforce transactions without the need for
              intermediaries.
            </p>
            <h2>What is an immutable smart contract?</h2>
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
            <h2>What is a DAPP?</h2>
            <p>
              A <strong className="text-white">DAPP</strong> is a decentralized
              application that can be a page within a website or a standalone
              single-page website. The purpose of a DAPP is to provide a
              friendly user interface for interacting with a smart contract.
            </p>
          </section>
          <section>
            <h2>What is GAS?</h2>
            <p>
              <strong className="text-white">GAS</strong> is the fee paid to use
              the blockchain. It operates on a demand-pricing model depending on
              blockchain traffic.
            </p>
          </section>
          <section>
            <h2>What are Tokens?</h2>
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
            <h2>What are Coin Prices?</h2>
            <p>See our What are Tokens?</p>
          </section>

          <section>
            <h2>What are secondary markets?</h2>
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
            <h2>What is a wallet?</h2>
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
            <h2>What is Tokenization?</h2>
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
          <section>
            <h2>What are Stablecoins?</h2>
            <p>
              <span className="text-white">Stablecoins</span> are a type of
              cryptocurrency designed to maintain a stable value, typically
              pegged to a fiat currency like the US dollar . This makes them
              less volatile than cryptocurrencies such as Bitcoin, making them
              suitable for transactions and a stable store of value.
            </p>
          </section>
          <section>
            <h2>What are some pros of Stablecoins?</h2>
            <ul>
              <li>
                <strong className="text-white">Stability:</strong> Stablecoins
                are less volatile than other cryptocurrencies, making them more
                predictable for transactions.
              </li>
              <li>
                <strong className="text-white">Fast Transactions:</strong>{' '}
                Transactions with stablecoins can be processed almost instantly,
                especially for cross-border payments, compared to traditional
                banking systems.
              </li>
              <li>
                <strong className="text-white">Lower Transaction Fees:</strong>{' '}
                Using stablecoins often incurs lower fees than credit card
                transactions or international wire transfers.
              </li>
              <li>
                <strong className="text-white">Access to DeFi Services:</strong>{' '}
                Stablecoins are commonly used in decentralized finance (DeFi)
                applications, providing opportunities for lending, borrowing,
                and earning interest.
              </li>
              <li>
                <strong className="text-white">Global Accessibility:</strong>{' '}
                Stablecoins can be accessed and used globally, offering
                financial services to non-banked populations.
              </li>
            </ul>
          </section>

          <section>
            <h2>What are some cons of Stablecoins?</h2>
            <ul>
              <li>
                <strong className="text-white">Centralization Risks:</strong>{' '}
                Many of the most popular stablecoins are backed by fiat
                currencies and are controlled by centralized companies. This
                creates a dependency on the issuer, which can be contrary to the
                decentralized vision of cryptocurrencies and introduce risks of
                mismanagement.
              </li>
              <li>
                <strong className="text-white">Regulatory Uncertainty:</strong>{' '}
                The regulatory landscape for stablecoins is still evolving. This
                lack of clarity can pose risks for investors, as new regulations
                could impact their use, stability, and value.
              </li>
              <li>
                <strong className="text-white">
                  Counterparty and Reserve Risks:
                </strong>{' '}
                For fiat-backed stablecoins, there is a risk that the issuer may
                not actually hold the full reserves they claim, or that those
                reserves are not as secure as stated. Mismanagement of reserves
                could lead to a stablecoin losing its peg.
              </li>
              <li>
                <strong className="text-white">
                  Limited Consumer Protection:
                </strong>{' '}
                Unlike traditional bank deposits, stablecoins are not insured by
                organizations like the FDIC. If an issuer fails, users could
                lose some or all of their holdings.
              </li>
              <li>
                <strong className="text-white">Risk of De-Pegging:</strong>{' '}
                While rare for well-established, fiat-backed stablecoins, events
                like the collapse of the algorithmic stablecoin UST in 2022
                demonstrate that stability is not always guaranteed, and a
                de-pegging event can cause significant losses.
              </li>

              <li>
                <strong className="text-white">Transaction Speed:</strong> Cash
                transactions are instant, but credit card transactions can take
                longer, especially for international payments.
              </li>

              <li>
                <strong className="text-white">
                  Limited Digital Integration:
                </strong>{' '}
                While improving, traditional banking systems may not offer the
                same level of integration with digital platforms as stable
                coins.
              </li>
            </ul>
          </section>
          <section>
            <h2>What are some pros of fiat currency (US Dollar)?</h2>
            <ul>
              <li>
                <strong className="text-white">Universal Acceptance:</strong> It
                is widely accepted for transactions globally, both physically
                and digitally, providing deep market liquidity.
              </li>
              <li>
                <strong className="text-white">Established Protections:</strong>{' '}
                Consumers benefit from strong safeguards, including FDIC
                insurance for bank deposits, offering robust security.
              </li>
              <li>
                <strong className="text-white">Simplicity:</strong> Cash and
                credit cards are a straightforward and familiar way to transact
                for most people, requiring no special knowledge.
              </li>
              <li>
                <strong className="text-white">No Conversion Needed:</strong>{' '}
                Transactions in dollars do not require conversion, simplifying
                the purchasing process.
              </li>
              <li>
                <strong className="text-white">Regulatory Clarity:</strong> It
                operates within a well-defined regulatory framework, providing
                stability and trust.
              </li>
            </ul>
          </section>
          <section>
            <h2>What are some cons of fiat currency (US Dollar)?</h2>
            <ul>
              <li>
                <strong className="text-white">Inflation Risk:</strong> Its
                value can be eroded over time by inflation, diminishing
                purchasing power.
              </li>
              <li>
                <strong className="text-white">Centralization & Trust:</strong>{' '}
                Its stability relies on trust in the issuing government and
                central bank, which can lead to volatility if that trust erodes.
              </li>
              <li>
                <strong className="text-white">Limited Privacy:</strong>{' '}
                Transactions are not private and can be traced by financial
                institutions and governments.
              </li>
              <li>
                <strong className="text-white">Higher Transaction Fees:</strong>{' '}
                Credit card transactions may incur higher fees compared to
                stablecoin transactions.
              </li>
              <li>
                <strong className="text-white">
                  Slower Cross-Border Payments:
                </strong>{' '}
                International transfers can be slow and more costly compared to
                digital alternatives.
              </li>
            </ul>
          </section>
          <section>
            <h2>
              {' '}
              How do stablecoins and the US dollar compare for financial use?{' '}
            </h2>
            <p>
              Stablecoins are faster, cheaper for cross-border payments, and
              enable access to digital finance, but carry risks of regulation
              and centralization. The US dollar offers universal acceptance,
              strong consumer protections, and stability, though its traditional
              banking rails can be slow and costly for international transfers .
              The choice depends on balancing the efficiency of digital assets
              with the trust and reliability of traditional finance
            </p>
          </section>
        </article>
        <hr className="border-2 border-top border-white" />
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
        <hr className="border-2 border-top border-white" />
        <p>Keep Learning and Stay Safe!</p>
        <p>The world of NFTs and blockchain is exciting but can be risky.</p>
        <Footer />
      </main>
    </>
  );
}
