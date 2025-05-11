import React from "react";
import {
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { dAppUrl } from '../constants/dAppURL';
import { ContractStatusInFile as ReadContractStatus} from './ReadContractStatusTextFile';
import MintModal from "./MintModal";

let errorReadingFile = 'errorReadingFile';
let modalHeader = "Contract minting is unavailable";
let title="Go to our DAPP to mint your NFT";

function goToDapp() {
    window.location.href = dAppUrl;
} 

function isShowGoToDappModal(contractStatus) {
    switch (contractStatus) {
      case errorReadingFile:
      case 'goToDapp':
            return false;
      default:
            return true;
    }
  }

export default function MintButton({btnText, btnId, btnSize, btnClass}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  async function handleIsShowGoToDappModal()
  {
    const contractStatus = await ReadContractStatus;
    if (isShowGoToDappModal(contractStatus) === false)
    {
      goToDapp();
    }
    else {
      modalHeader = contractStatus;
      handleShow(true);
    }
  }

  return (
    <>
      <Button
        variant="success"
        aria-label="go to the DAPP"
        id={btnId}
        size={btnSize}
        className={btnClass}
        title={title}
        onClick={handleIsShowGoToDappModal}
      >
        {btnText}
      </Button>
      <MintModal
        handleClose={handleClose}
        show={show}
        modalHeader={modalHeader}
      ></MintModal>
    </>
  );
}
