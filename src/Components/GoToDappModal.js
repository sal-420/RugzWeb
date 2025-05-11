import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Modal from '../constants/dAppURL';
function goToDapp()
{
  alert('go to the dapp');
}
function GoToDappModal() {
  // attach this function to the Mint and GoToDapp buttons
  const [show, setShow] = useState(true);
  const [userResponse, setUsrResponse] = useState(false);

  const handleNo = () => setShow(false);
 // const handleYes = () => goToDapp();

  return (
    <> 
      {/* <Modal show={show} onHide={handleNo}> */}
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>The contract is {message}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Continue to the DAPP?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNo}>
            No
          </Button>
          <Button variant="primary" onClick={handleYes}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<GoToDappModal />);