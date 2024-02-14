import React from 'react'
import styled from 'styled-components';

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <SContent>장바구니에 담긴 상품이 없습니다.</SContent>
      <SSmallContent>원하시는 상품을 장바구니에 담아보세요!</SSmallContent>
    </EmptyCartContainer>
  )
}

export default EmptyCart

const EmptyCartContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SContent = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 17px;
`;

const SSmallContent = styled.p`
  font-size: 14px;
  color: var(--light-font);
`;