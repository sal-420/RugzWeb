import React from "react";
import etherScanLogo from "../images/logo-etherscan.svg";
import {
  Button,
} from "react-bootstrap";

import axios from 'axios'
import { getEthPriceApi } from '../constants/cryptoApiUrl.js'


function getUsdPrice() {
       const res =  getEthPriceApi
    fetchCurrencyData = () => {
    console.log('test2 API link ', getEthPriceApi)
    axios 
      .get(getEthPriceApi) 
      .then(response => {
        debugger
        toArrayFromAxiosApiObj(response[0].data)
        this.setState({ data: coinArray })
      })
      .catch(err => console.log(`Axios error: ${err}`))
}
       return '??.??'
       
}
 


  
export default function RugzHomeFaqs() {
  return (    
          <div className="bg-navy-black text-white">
                 <h3 className="text-center pt-5">FAQS</h3>
                     <div className="row text-black">
                          <div className="col-lg-12  mb-5 text-white text-center pt- pt-lg-0">
                               <div >
                                      Wen mint date? 
                               </div>
                               <div className="text-info">
                                      10/25/2022 
                               </div>
                               <br/>
                               <div className="xtext-success">
                                      Whats the mint price? 
                               </div>
                              <div className="text-info">
                                     <span>First <span className="text-lime-green">42</span><span className="text-info rotate2 rotate_this"><span>6</span><span className="text-danger">9</span></span>
                                            NFTs will be free</span>
                                     <div className="text-info">
                                            After they will cost<span className="text-lime-green"> .0420</span><span className="text-info rotate2 rotate_this"><span>6</span><span className="text-danger">9</span>
                                            </span> ETH <span className="text-success">(${getUsdPrice()})</span>
                                           <br/>
                                            <span className="text-white">How many free mints remain?</span>
                                           <br/>
                                            <span>We do not interact with the contract. Please check the 
                                                   <Button variant="success" id="dapp" size="sm" className="ml-1 p-0" href="http://www.mint.notoriousrugs.io/">DAPP</Button>
                                            </span>
                                     </div>
                              </div>
                              
                               <br/>
                              <div>
                                      Is there a whitelist?
                               </div>
                               <div className="text-info">
                                <div>No, nobody has time for that.</div>
                     
                              </div>
                                    <br/>
                              <div>
                                      How many can I mint per transaction?
                               </div>
                               <div className="text-info">
                                     <div>Free mints will be limited to 5 mints per transaction and wallet</div>
                                     <div>Paid mints will be limited to 20 mints per transaction with no wallet limit</div>
                              </div>
                                     <br/>
                              <div>
                                      Any roadmap or utility?
                               </div>
                               <div className="text-info">
                                <div>No roadmap. No Discord. No utility. CC0.</div>
                     
                              </div>
                                   <br/>
                              <div>
                                      Where can i see the smart contract?
                              </div>
                              <div className="text-info">
                                     <div>Take a look at our contract: <a href="https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code">0xf567d57b1450258ebbcfa323798a0ef90d081ae <img src={etherScanLogo} alt="Etherscan Logo" /></a>
                                    </div>
                              </div>
                              
                          </div>
                     </div>
            </div>   
  );
}
