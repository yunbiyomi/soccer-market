import React, { useEffect } from 'react'
import styled from 'styled-components'
import CartList from './CartList'
import { useDispatch } from 'react-redux'
import { reset } from '../../features/price/totalPriceActions'

const CartContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset())
  }, [])

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