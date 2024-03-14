import React from 'react'
import styled, { keyframes } from 'styled-components';
import Button from '../Button/Button'
import Counter from '../Counter/Counter';

const OrderModal = ({ totalNum, setTotalNum, stoke, totalFee, isLogIn, handleImmediatelyBuy, handleDisabled, openCartModal, closeOrderModal }) => {
  // 모달 내부 요소 클릭 시 이벤트 전파 중지
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalOverlay onClick={closeOrderModal}>
      <ModalContainer onClick={handleModalClick}>
        <CounterWrap>
          <Counter 
            totalNum={totalNum}
            setTotalNum={setTotalNum}
            stoke={stoke}
          />
        </CounterWrap>
        <SLine />
        <TotalWrap>
          <TotalContent>
            총 상품 금액
          </TotalContent>
          <TotalCountWrap>
            <TotalContent>
              총 수량 <TotalNumHighlight>{totalNum}</TotalNumHighlight>개
            </TotalContent>
            <TotalSideBar />
            <ProductFee>
              {totalFee} 원
            </ProductFee>
          </TotalCountWrap>
        </TotalWrap>
        <BtnWrap>
          <SBtn 
            onClick={handleImmediatelyBuy}
            disabled={!stoke || handleDisabled}
          >
            바로구매
          </SBtn>
          <SBtn 
            onClick={openCartModal}
            disabled={!isLogIn || handleDisabled}
          >
            장바구니
          </SBtn>
        </BtnWrap>
        <DeleteBtn />
      </ModalContainer>
    </ModalOverlay>
  )
}

export default OrderModal

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); 
  backdrop-filter: blur(1.5px); 
  z-index: 99;
  cursor: default;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  border: 1px solid var(--gray);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  z-index: 1000;
  animation: ${fadeIn} .6s ease forwards;
`;

const CounterWrap = styled.div`
  width: 100%;
  margin-top: 70px;
  margin-right: 100px;
`;

const SLine = styled.div`
  width: 100%;
  height: .5px;
  margin-bottom: 20px;
  background-color: var(--gray);
`;

const TotalWrap = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalContent = styled.p`
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

const TotalCountWrap = styled.div`
  display: flex;
  align-items: center;
`;

const TotalNumHighlight = styled.span`
  color: var(--point-color);
  font-weight: bold;
`;

const TotalSideBar = styled.div`
  width: 1.5px;
  height: 20px;
  background-color: var(--gray);
  margin: 0 15px;
`;

const ProductFee = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: var(--point-color);

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  width: 100px;
  height: 5px;
  top: 15px;
  border-radius: 5px;
  background-color: var(--light-gray);
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SBtn = styled(Button)`
  width: 480px;
  height: 70px;
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    width: 350px;
    height: 60px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 210px;
    height: 50px;
  }
`;