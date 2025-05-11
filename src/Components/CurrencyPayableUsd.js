import React from 'react'

function calaculatePayableUsdAmount(currentEthPriceUsd)
{
  const percent =  0.42072646404744
  return (currentEthPriceUsd * percent / 100).toFixed(2);
}
const CurrencyPayableUsd = props => {
  const {
    name,
    symbol,
    price_usd,
  } = props.data
  return (
    <span>${+(calaculatePayableUsdAmount(price_usd)).toLocaleString("en-us", {style:"currency", currency: "USD" })} USD</span>
  )
}

export default CurrencyPayableUsd