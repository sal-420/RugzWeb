import React from "react";
import {
    Button,
    Modal,
} from "react-bootstrap";
import { dAppUrl } from '../constants/dAppURL';

 function goToDapp() {
    window.location.href = dAppUrl;
}
  
  export default function MintModal ({handleClose, show, modalHeader})  {
  return (
    <>
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
