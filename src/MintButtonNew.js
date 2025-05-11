import React from "react";
import {
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { dAppUrl } from '../constants/dAppURL';
import { ContractStatusInFile } from './ReadContractStatusTextFile';
import MintModal from "./MintModal";

let errorReadingFile = 'errorReadingFile';
let modalHeader = "Contract minting is unavailable";

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
    //const contractStatus = await readTxtFile(contractStatusFile);
    const contractStatus = await ContractStatusInFile;
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
      <Button variant="success" id={btnId} size={btnSize} className={btnClass}  onClick={(handleIsShowGoToDappModal)}>{btnText}</Button>
      <MintModal handleClose={handleClose} show={show} modalHeader={modalHeader}></MintModal>

    </>
  );
}
