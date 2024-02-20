import React from 'react'
import styled from 'styled-components';

const OrderListBar = () => {
  return (
    <SOrderListBar>
      <OrderListTitle>상품정보</OrderListTitle>
      <OrderListTitle>할인</OrderListTitle>
      <OrderListTitle>배송비</OrderListTitle>
      <OrderListTitle>주문금액</OrderListTitle>
    </SOrderListBar>
  )
}

export default OrderListBar

const SOrderListBar = styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  background-color: var(--light-gray);
  border-radius: 10px;
`;

const OrderListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;