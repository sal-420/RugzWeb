import React, { Component } from 'react';
import Currency from './Currency';
import axios from 'axios';
import { getPriceApi } from '../constants/cryptoApiUrl.js';
import './Crypto.css';

let coinToCurrencyArray = [];
// Coin price template
let coinInfo = {
  id: 1,
  name: 'Ethereum',
  symbol: 'ETH',
  price_usd: 1,
};

function toArrayFromAxiosApiObj(apiResponseData) {
  // Clear the array otherwise it will be appended to on every call. Every execution will add an additional <div> though the price display will be jumbled
  coinToCurrencyArray = [];

  // Load the array in the same order as the response which is returned in the same order as the request
  coinInfo = {
    price_usd: apiResponseData['ethereum'].usd,
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
  };
  coinToCurrencyArray.push(coinInfo);

  coinInfo = {
    price_usd: apiResponseData['bitcoin'].usd,
    id: 2,
    name: 'Bit Coin',
    symbol: 'BTC',
  };
  coinToCurrencyArray.push(coinInfo);

  coinInfo = {
    price_usd: apiResponseData['litecoin'].usd,
    id: 3,
    name: 'Lite Coin',
    symbol: 'LITE',
  };
  coinToCurrencyArray.push(coinInfo);
}

class Crypto extends Component {
  constructor() {
    super();
    this.state = {
      coinToCurrencyData: [
        {
          id: '1',
          name: 'Ethereum',
          symbol: 'ETH',
          price_usd: '1',
        },
        {
          id: '2',
          name: 'Bit Coin',
          symbol: 'BTC',
          price_usd: '1',
        },
        {
          id: '3',
          name: 'Lite Coin',
          symbol: 'Lite',
          price_usd: '1',
        },
      ],
    };
  }

  fetchCurrencyData = () => {
    axios
      //.get(apiListOfCoinsUrl) -- single get returns  or if to run multiple use the .all either way an object is returned for each get
      .all([
        axios.get(getPriceApi),
        // axios.get(apiEthUrl), use one get for all coins. because .all is used each an array of .data is returned
        // axios.get(apiBtcUrl),
        // axios.get(apiLiteUrl)
      ])
      .then((response) => {
        toArrayFromAxiosApiObj(response[0].data);
        this.setState({ coinToCurrencyData: coinToCurrencyArray });
      })
      .catch((err) =>
        console.log(`Axios error getting prices for coins: ${err}`)
      );
  };

  componentDidMount() {
    this.fetchCurrencyData();
    // set timer to get price every minute
    this.interval = setInterval(() => this.fetchCurrencyData(), 60 * 1000);
  }

  render() {
    let cryptoList = this.state.coinToCurrencyData.map((currency) => (
      <Currency data={currency} key={currency.id} />
    ));

    return (
      <>
        <div>
          <a href="#anchor-current-usd-price" id="anchor-current-usd-price">
            <span className="d-none">
              Anchor for crypto proices
            </span>
          </a>
        </div>

        <section className="crypto-container text-center">
          <p className="text-white">
            Current USD Price (per Axios API) for 3 popular tokens updated every
            15 minutes
          </p>
          <ul className="crypto"> {cryptoList} </ul>
        </section>
      </>
    );
  }
}

export default Crypto;
