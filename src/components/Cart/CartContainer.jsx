import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button/Button'
import CartList from './CartList'

const CartContainer = () => {
  return (
    <SCartContainer>
      <CartTitle>장바구니</CartTitle>
      <CartList />
      <Button width='220px' height='68px' margin='40px 0 160px 0'>주문하기</Button>
    </SCartContainer>
  )
}

export default CartContainer

const SCartContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CartTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 50px 0;
`;