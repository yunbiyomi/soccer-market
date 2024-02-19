import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import DeleteIcon from '../../../assets/icon-delete.svg'

const Modal = ({ children, closeModal, onClick }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>{children}</ModalContent>
        <BtnWrap>
          <SBtn onClick={closeModal}>아니오</SBtn>
          <SBtn onClick={onClick}>예</SBtn>
        </BtnWrap>
        <DeleteBtn onClick={closeModal}/>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal

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
  width: 360px;
  height: 200px;
  background-color: white;
  border: 1px solid var(--gray);
  border-radius: 10px;
  z-index: 9999;
`;

const DeleteBtn = styled.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 15px;
  right: 15px;
  background-image: url(${DeleteIcon});
  background-color: transparent;
`;

const ModalContent = styled.p`
  font-size: 18px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SBtn = styled(Button)`
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;

  &:first-child {
    color: var(--point-color);
    border: 1px solid var(--point-color);
    background-color: white;

    &:hover {
      color: white;
      border: none;
      background-color: var(--point-color);
    }
  }
`;