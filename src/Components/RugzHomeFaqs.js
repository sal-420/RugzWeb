import React from 'react';
import MintButton from './MintButton.js';
import CryptoEth from '../Components/CryptoEth';

export default function RugzHomeFaqs() {
  return (
    <section className="bg-navy-black text-break text-wrap text-white">
      <h2 className="text-center pt-5">FAQS</h2>
      <div className="row text-black">
        <div className="col-lg-12 mb-5 text-white text-center  pt-lg-0">
          <div>Wen mint date?</div>
          <div className="text-muted">Stealth drop</div>
          <br />
          <div className="">Whats the mint price?</div>
          <div className="text-muted">
            <span>
              First <span className="text-lime-green">42</span>
              <span className="text-info rotate2 rotate_this">
                <span>6</span>
                <span className="text-danger">9</span>
              </span>
              NFTs will be free
            </span>
            <div className="text-muted">
              After they will cost
              <span className="text-lime-green"> .00420</span>
              <span className="text-info rotate2 rotate_this">
                <span>6</span>
                <span className="text-danger">9</span>
              </span>{' '}
              ETH (approx. <CryptoEth />)
              <br />
              <br />
              <span className="text-white">How many free mints remain?</span>
              <br />
              <span>
                Please check our
                <MintButton
                  btnText={'DAPP'}
                  btnId={'dapp'}
                  btnSize={'sm'}
                  btnClass={'ml-1 p-0'}
                />
              </span>
            </div>
          </div>
          <br />
          <div>Is there a whitelist?</div>
          <div className="text-muted">
            <div>No, nobody has time for that.</div>
          </div>
          <br />
          <div>How many can I mint per transaction?</div>
          <div className="text-muted">
            <div>
              Free mints will be limited to 5 mints per transaction and wallet
            </div>
            <div>
              Paid mints will be limited to 20 mints per transaction with no
              wallet limit
            </div>
          </div>
          <br />
          <div>Any roadmap or utility?</div>
          <div className="text-muted">
            <div>No roadmap. No Discord. No utility. CC0.</div>
          </div>
          <br />
          <div>Where can I see the smart contract?</div>
          <div className="text-muted">
            <div>
              Take a look at our contract:{' '}
              <a
                href="https://etherscan.io/address/0xf567d57b1450258ebbcfa323798a0ef90d081aef#code"
                alt="go to Etherscan contract address"
                aria-label="go to Etherscan contract address"
              >
                0xf567d57b1450258ebbcfa323798a0ef90d081aef
              </a>
            </div>
          </div>
          <div>
            <br />
            For more FAQs and additional see our <a href="/About">About Page</a>
          </div>
        </div>
      </div>
    </section>
  );
}
