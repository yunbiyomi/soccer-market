import React from 'react'
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import DeleteIcon from '../../../assets/icon-delete.svg'

const ZipCodeModal = ({ onComplete, closeModal }) => {
  const style = {
    marginTop: '30px',
    height: '700px',
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <DaumPostcode 
          style={style}
          onComplete={onComplete}
        />
        <DeleteBtn onClick={closeModal}/>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default ZipCodeModal

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); 
  backdrop-filter: blur(1.5px); 
  z-index: 999;
  cursor: default;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
  background-color: white;
  border: 1px solid var(--gray);
  border-radius: 10px;
  padding: 50px 30px;
  z-index: 9999;
`;

const DeleteBtn = styled.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 25px;
  right: 25px;
  background-image: url(${DeleteIcon});
  background-color: transparent;
`;