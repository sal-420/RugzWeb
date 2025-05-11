import React from 'react'
import './Currency.css'

const Currency = props => {
  const {
    name,
    symbol,
    price_usd,
  } = props.data
  return (
    <li className="currency">
      <p className="currency-name">
        {name} ({symbol})
      </p>
      <p>{(price_usd).toLocaleString("en-us", {style:"currency", currency: "USD" })}</p>
      </li>
  )
}

export default Currency