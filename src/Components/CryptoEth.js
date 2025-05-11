import React, { Component } from 'react'
import CurrencyPayableUsd from './CurrencyPayableUsd'
import axios from 'axios'
import { getEthPriceApi } from '../constants/cryptoApiUrl.js'

let coinToCurrencyArray = []
// Coin price template
let coinInfo = {
  id: 1,
  name: 'Ethereum',
  symbol: 'ETH',
  price_usd: 1
}

function toArrayFromAxiosApiObj(apiResponseData) {
    // Clear the array otherwise it will be appended to on every call. Every execution will add an additional <div> though the price display will be jumbled
    coinToCurrencyArray = []
    // Load the array in the same order as response which is returned in the same order as the request
    coinInfo = {
        price_usd: apiResponseData['ethereum'].usd,
        id: 1,
        name: 'Ethereum',
        symbol: 'ETH'
    }
    coinToCurrencyArray.push(coinInfo)
}
  
class CryptoEth extends Component {
   constructor() {
    super()
    this.state = {
      coinToCurrencyData: [
        {
          id: '1',
          name: 'Ethereum',
          symbol: 'ETH',
          price_usd: '1',
        }
      ],
    }
  }

  fetchCurrencyData = () => {
    axios 
      //.get(apiListOfCoinsUrl) -- single get returns  or if to run multiple use the .all either way an object is returned for each get
      .all([
          axios.get(getEthPriceApi),        
          ])
      .then(response => {
        toArrayFromAxiosApiObj(response[0].data)
        this.setState({ coinToCurrencyData: coinToCurrencyArray })
      })
      .catch(err => console.log(`Axios error getting prices for coins: ${err}`))
  }
  componentDidMount() {
    this.fetchCurrencyData()
    // set timer to get price every minute (1000ms) changed to 5minutes (60 * 5000)
    this.interval = setInterval(() => this.fetchCurrencyData(), 60 * 5000)
  }

  render() {  
    let cryptoEth = this.state.coinToCurrencyData.map(currency => (
      <CurrencyPayableUsd data={currency} key={currency.id} />
    ))

    return (
        <> {cryptoEth} </>
    )
  }
}

export default CryptoEth