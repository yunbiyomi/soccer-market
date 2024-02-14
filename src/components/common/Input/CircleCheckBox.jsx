import React from 'react'
import styled from 'styled-components'
import CheckBox from '../../../assets/circle-check-box.svg'
import CheckBoxFill from '../../../assets/circle-check-box-Fill.svg'

const CircleCheckBox = () => {
  return (
    <CartListCheck type='checkbox'/>
  )
}

export default CircleCheckBox

const CartListCheck = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  margin: 0;
  outline: none;
  cursor: pointer;
  background: url(${CheckBox}) center center / contain no-repeat;

  &:checked {
    background: url(${CheckBoxFill}) center center / contain no-repeat;
  }
`;