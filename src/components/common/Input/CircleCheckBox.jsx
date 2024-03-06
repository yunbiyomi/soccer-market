import React from 'react'
import styled from 'styled-components'
import CheckBox from '../../../assets/circle-check-box.svg'
import CheckBoxFill from '../../../assets/circle-check-box-Fill.svg'

const CircleCheckBox = ({ id, checked, onChange }) => {
  return (
    <>
      <label htmlFor={id}>
        <span className='a11y-hidden'>상품 선택</span>
        <CartListCheck type='checkbox' id={id} checked={checked} onChange={onChange} />
      </label>
    </>
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