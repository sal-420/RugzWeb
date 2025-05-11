const baseApiSimplePriceUrl = 'https://api.coingecko.com/api/v3/simple/price?'
const listOfCoinsUrl = 'ids=bitcoin%2Cethereum%2Clitecoin&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false'  

const ethCoinUrl = 'ids=ethereum&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false'  
// const btcCoinUrl = 'ids=liteCoinUrl&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false'  
// const liteCoinUrl = 'ids=bitcoin&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false'  

const apiListOfCoinsUrl = baseApiSimplePriceUrl + listOfCoinsUrl
const apiEthUrl = baseApiSimplePriceUrl + ethCoinUrl
// const apiBtcUrl = baseApiSimplePriceUrl + btcCoinUrl
// const apiLiteUrl = baseApiSimplePriceUrl + liteCoinUrl

// added 'withCredentials' when CORS errors started 
// solution came from https://stackoverflow.com/questions/50949594/axios-having-cors-issue
// if that does not fix then it has other suggestions such as https://github.com/axios/axios/issues/1358 it was a short cut link in 'this thread'
const withCredentials = ', withCredentials: false, params: {access_token: SECRET_TOKEN,}'
export const getPriceApi = apiListOfCoinsUrl + withCredentials
export const getEthPriceApi = apiEthUrl + withCredentials