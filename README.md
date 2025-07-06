# RugzWeb

## How to start the React

### The first time you install the repo

Type: **run npm install**

### To **RUN/START** the APP locally

- Type: **npm run start**

- Open the terminal on the root project (where the package.json file is ) of the react app and type: **npm run start**
- This how to is from: <https://stackoverflow.com/questions/63103940/how-to-run-react-project>

## To deploy on GoDaddy

- Type: **npm run build**
- Go to the build folder
- Upload the local files to GoDaddy
  - upload the files (where idex is located) to GoDaddy where index where should go on GoDaddy - under the root folder on GoDaddy
  - upload the remaining folders to GoDaddy
- After uploading, if you've uploaded before, delete the old files from GoDaddy

## Slide show used in this app borrowed from

[https://github.com/Pau1fitz/react-slidez](https://github.com/Pau1fitz/react-slidez)

## Multi-page ReactJS app with bootstrap

ReactJS web application with multiple pages example. It uses the react-bootstrap NavBar for navigation. For theming bootswatch is being used.

### Libraries

- react-bootstrap
- bootswatch
- react-router-dom

## Repo FYI

Best efforts were made to a deliver clean bug free code  (no obsolete/test code, no repeated code, etc.).

## SEO

SEO examples are included.This is a client side client side rendering app which is not the best choice for SEO. Do your research for the best framework that meets your needs

<details>
<summary>Nested JSON-LD with FAQs sample</summary>

FAQs are not valid for our site: see [here](https://developers.google.com/search/docs/appearance/structured-data/faqpage), keeping the source as an example of a nested JSON-LD

```
<script type="application/ld+json">
          {
           "@context": "https://schema.org",
            "@graph": [
             {
               "@type": "WebSite",
               "name": "Notorious Rugs",
               "url": "https://notoriousrugs.io",
               "description": "Notorious Rugs is a collection of free and low-cost NFTs",
               "keywords": "Free NFTs, NFT education, crypto, blockchain, crypto art, digital collectibles, NFT marketplace, Ethereum NFTs, free NFT mints"
              },
              {
               "@type": "Product",
               "name": "Free NFT Collection",
               "description": "Notorious Rugs is a collection of free and low-cost NFTs",
               "url": "https://notoriousrugs.io",
               "image": "https://notoriousrugs.io/images/rugs8.webp",
               "offers": {
                   "@type": "AggregateOffer",
                   "lowPrice": "0.0",
                   "highPrice": ".0042069",
                   "priceCurrency": "USD",
                   "offerCount": "6969",
                   "offers": [
                      {
                       "@type": "PriceSpecification",
                       "name": "free NFT mints",
                       "@description": "First 4020 NFT mints will be free",
                       "price": 0.00,
                       "priceCurrency": "USD"
                      },
                      {
                       "@type": "PriceSpecification",
                       "name": "payable free NFT mints",
                       "@description": "NFT mint 4021 - 6969 will be payable",
                       "price": 0.0042069,
                       "priceCurrency": "USD"
                      }
                   ]
                  }
              },
              {
                   "@context": "https://schema.org",
                   "@type": "FAQPage",
                   "url": "https://notoriousrugs.io/about",
                   "mainEntity": [{
                        "@type": "Question",
                        "name": "Why are notorious rugs NFTs free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Notorious Rugs free NFT collection provides a hands-on education on smart contracts, DAPPs, GAS, blockchain, and crypto technology by offering to mint from a DAPP or directly from the smart contract and the secondary market experience."
                        }
                   },{
                       "@type": "Question",
                       "name": "Is the Notorious Rugs contract safe?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "Check out our contract: 0xf567d57b1450258ebbcfa323798a0ef90d081aef on the ethereum blockchain."
                       }
                     },{
                       "@type": "Question",
                       "name": "How much can I make minting Notorious Rugs?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "You can't guarantee any profit from minting Notorious Rugs NFTs. This is a free collection about education and fun, not investment. The value of Notorious Rugs is based on what you personally gain from the learning experience. Stranger things have happened in the NFT space, so you never know what the future holds in the secondary market."
                       }
                     },{
                       "@type": "Question",
                       "name": "What is a rug pull?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "A rug pull, is a scam project that is promoted with ties to a coin which promises of high returns. Scammers then withdraw the funds and abandon project leaving the project worthless."
                       }
                     },{
                       "@type": "Question",
                       "name": "What is a blockchain?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "A blockchain is a decentralized public digital ledger that securely records transactions across a network of computers. It consists of linked blocks of data that are immutable, meaning once recorded, the information cannot be altered without consensus from the network participants."
                       }
                     },{
                       "@type": "Question",
                       "name": "What is a NFT?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "A NFT, also known as a Non Fungible Token, is a unique digital asset that represents ownership of a specific item or piece of content, such as art."
                       }
                     },{
                       "@type": "Question",
                       "name": "What is minting?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "Minting, also known as mint, is the process of storing a digital file on the blockchain. This process creates a unique token (ID) that represents ownership of the digital file. Minting is typically done through a smart contract, or an executed transaction on the secondary market."
                       }
                     },{
                       "@type": "Question",
                       "name": "What is a smart contract?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "A crypto contract, also known as a smart contract, is a self-executing immutable program stored on a blockchain. Smart contracts enforces the terms of an agreement, verify and enforce transactions without the need for intermediaries."
                       }
                     },{
                       "@type": "Question",
                       "name": "What is an immutable smart contract?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "An immutable smart contract is a contract that cannot be changed once it is pushed onto the blockchain. Any changes to the contract would require a new contract to be created. This ensures that the terms of the contract are enforced and cannot be altered by any party, providing a high level of security and trust for all participants."
                       }
                     },{
                       "@type": "Question",
                       "name": "What is a DAPP?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "A DAPP is a decentralized application that can be a page within a website or a standalone single-page website. The purpose of a DAPP is to provide a friendly user interface for interacting with a smart contract."
                       }
                     },{
                       "@type": "Question",
                       "name": "What is GAS?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "GAS is the fee paid to use the blockchain. It operates on a demand-pricing model depending on blockchain traffic."
                       }
                     },{
                       "@type": "Question",
                       "name": "What are Coin Prices?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "Coins and tokens are the digital currency of a specific blockchain. Think of them as the blockchain’s version of dollars or euros. Just like traditional currencies, their prices are mainly determined by supply and demand: when demand goes up and supply stays limited, the price usually rises."
                       }
                     },{
                       "@type": "Question",
                       "name": "What are secondary markets?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "Secondary markets are market places where NFTs can be resold/traded after the original purchase (mint). They are typically decentralized platforms that allow users to buy, sell, and trade NFTs directly with one another. Examples of secondary markets include OpenSea, Rarible, and Foundation. We are not affiliated with any secondary market."
                       }
                     },{
                       "@type": "Question",
                       "name": "What is a wallet?",
                       "acceptedAnswer": {
                         "@type": "Answer",
                         "text": "A wallet is a software program (browser extension) that stores your public and private keys, allowing you to send and receive cryptocurrency. It also interacts with various blockchain networks to enable users to manage their digital assets. Think of it as a bank account that can receive and send money. Wallets can also be hardware-based, known as cold wallets, meaning they are on a physical device that you connect to your laptop making it more secure against hacking and online threats. Think of it as the wallet in your pocket, only you can access it when you have the physical device. Be sure not to lose it!"
                       }
                     }]
              }
            ]
          }
          </script>
</details>
