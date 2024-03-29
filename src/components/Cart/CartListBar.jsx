import React from 'react'
import styled from 'styled-components'
import CircleCheckBox from '../common/Input/CircleCheckBox'

const CartListBar = ({ checked, onChange }) => {
  return (
    <CartListBarContainer>
      <CartListTitle>
        <CircleCheckBox
          checked={checked}
          onChange={onChange}
        />
      </CartListTitle>
      <CartListTitle>상품정보</CartListTitle>
      <CartListTitle>수량</CartListTitle>
      <CartListTitle>상품금액</CartListTitle>
    </CartListBarContainer>
  )
}

export default CartListBar

const CartListBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: .25fr 3fr 1fr 1fr;
  background-color: var(--light-gray);
  border-radius: 10px;

  @media (max-width: 768px) {
    grid-template-columns: .1fr 3fr 1fr 1.5fr;
  }
`;

const CartListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  &:first-child {
    margin: 0 30px;
  }
`;