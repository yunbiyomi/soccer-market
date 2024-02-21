import React from 'react'
import styled from 'styled-components';
import OrderProductContainer from './OrderProductContainer';
import OrderInfo from './OrderInfo';

const Order = () => {
  return (
    <SOrderContainer>
      <OrderTitle>주문/결제하기</OrderTitle>
      <OrderProductContainer />
      <OrderInfo />
    </SOrderContainer>
  )
}

export default Order

const SOrderContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 160px;
`;

const OrderTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 50px 0;
`;