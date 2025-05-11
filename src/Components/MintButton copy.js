import React from "react";
import {
  Button,
} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import contractStatusFile from "../data/contractStatus.txt";
import { dAppUrl } from '../constants/dAppURL';
import { ContractStatusInFile } from './ReadContractStatusTextFile';

let errorReadingFile = 'errorReadingFile';
let modalHeader = "Contract minting is unavailable";

  function goToDapp() {
    window.location.href = dAppUrl;
  }

  // async function readTxtFile(_contractStatusFile) {
  //   let ContractStatusInFile = errorReadingFile;
  //   await fetch(_contractStatusFile)
  //       .then(t => t.text()).then(text => {
  //           ContractStatusInFile = text;   
  //       });  
  //   const linesArray = ContractStatusInFile.split(/\r?\n/);
  //   ContractStatusInFile = linesArray[0];
  //   return ContractStatusInFile;
  // }  

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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Continue to DAPP?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={goToDapp}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
