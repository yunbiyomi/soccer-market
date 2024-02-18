import React from 'react'
import styled from 'styled-components'
import CartList from './CartList'

const CartContainer = () => {
  return (
    <SCartContainer>
      <CartTitle>장바구니</CartTitle>
      <CartList />
    </SCartContainer>
  )
}

export default CartContainer

const SCartContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 160px;
`;

const CartTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 50px 0;
`;