import React from 'react';
import MetaTags from 'react-meta-tags';
import RugzHome from '../Components/RugzHome';
// import RugzFooter from "../Components/RugzFooter";
// import Slideshow from "../Components/SlideShow";
import { Helmet } from 'react-helmet';

const homeMetaTagsContent = (
  <MetaTags>
    <title>Free NFTs & Blockchain Insights - Notorious Rugs</title>
    <link rel="canonical" href="https://www.notoriousrugs.io" />
    <meta
      name="google-site-verification"
      content="_38ouHz07qzzhb4uwgZSWQpgghnmVLFVG8K6Q5CFI8g"
    />
    <meta
      name="description"
      content="Discover free NFTs at Notorious Rugs! Explore our collection and learn about blockchain technology and crypto safety in a risk-free environment."
    />
    <meta
      property="og:title"
      content="Free NFTs & Blockchain Insights - Notorious Rugs"
    />
    <meta
      property="og:description"
      content="Discover free NFTs at Notorious Rugs! Explore our collection and learn about blockchain technology and crypto safety in a risk-free environment."
    />
    <meta property="og:url" content="https://www.notoriousrugs.io" />
  </MetaTags>
);
const pageMetadata = {
  title: 'Free NFTs & Blockchain Insights - Notorious Rugs',
  canonical: 'https://www.notoriousrugs.io',
  meta: [
    {
      name: 'google-site-verification',
      content: '_38ouHz07qzzhb4uwgZSWQpgghnmVLFVG8K6Q5CFI8g',
    },
    {
      name: 'description',
      content:
        'Discover free NFTs at Notorious Rugs! Explore our collection and learn about blockchain technology and crypto safety in a risk-free environment.',
    },
    {
      property: 'og:title',
      content: 'Example Website - Home',
    },
    {
      property: 'og:description',
      content: 'Free NFTs & Blockchain Insights - Notorious Rugs',
    },
    { property: 'og:url', content: 'https://www.notoriousrugs.io' },
  ],
};

const homeJsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Notorious Rugs',
      url: 'https://notoriousrugs.io',
      description: 'Notorious Rugs is a collection of free and low-cost NFTs',
      keywords:
        'Free NFTs, NFT education, crypto, blockchain, crypto art, digital collectibles, NFT marketplace, Ethereum NFTs, free NFT mints',
    },
    {
      '@type': 'Product',
      name: 'Free NFT Collection',
      description: 'Notorious Rugs is a collection of free and low-cost NFTs',
      url: 'https://notoriousrugs.io',
      image: 'https://notoriousrugs.io/images/rugs8.webp',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '0.0',
        highPrice: '0.0042069',
        priceCurrency: 'USD',
        offerCount: '6969',
        offers: [
          {
            '@type': 'PriceSpecification',
            name: 'free NFT mints',
            description: 'First 4020 NFT mints will be free',
            price: 0.0,
            priceCurrency: 'USD',
          },
          {
            '@type': 'PriceSpecification',
            name: 'payable free NFT mints',
            description: 'NFT mint 4021 - 6969 will be payable',
            price: 0.0042069,
            priceCurrency: 'USD',
          },
        ],
      },
    },
    {
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
          '@type': 'Question',
          name: 'Are Notorious Rugs NFTs free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the first 4020 Notorious Rugs NFTs are free to mint. Subsequent mints (4021-6969) will have a small fee of 0.0042069 ETH to cover GAS costs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I mint the free Notorious Rugs NFTs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Free mints will be limited to 5 mints per transaction and wallet. Paid mints will be limited to 20 mints per transaction with no wallet limit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I see the smart contract?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "You can find our contract: <a href='https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code'>0xf567d57b1450258ebbcfa323798a0ef90d081aef</a> on the Ethereum blockchain.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Helmet>
        {/* Replace MetaTags content with Helmet tags */}
        <title>{pageMetadata.title}</title>
        <link rel="canonical" href={pageMetadata.canonical} />
        {/* 2. Map over the meta array and use the spread operator */}
        {pageMetadata.meta.map((tag, index) => (
          <meta key={index} {...tag} />
        ))}
        {/* Add the JSON-LD script tag */}
        <script type="application/ld+json">
          {JSON.stringify(homeJsonLdData)}
        </script>
      </Helmet>
      <div className="Home-header-background pl-2">
        <RugzHome />
        {/* <RugzFooter /> */}
      </div>
    </>
  );
}
