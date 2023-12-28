import React from 'react'
import styled from 'styled-components'
import agreeCheck from '../../../assets/agree-check.svg'
import agreeCheckFill from '../../../assets/agree-check-fill.svg'

const CheckBox = (props) => {
  return (
    <AgreeBox>
      <CheckInput id={props.id} {...props}/>
      <label htmlFor={props.id}>
        싸커마켓의 <u>이용약관</u> 및 <u>개인정보처리방침</u>에 대한 내용을 확인하였고 동의합니다.
      </label>
    </AgreeBox>
  )
}

export default CheckBox

const AgreeBox = styled.div`
  width: 480px;
  display: flex;
  justify-content: center;
`;

const CheckInput = styled.input`
  margin-right: 10px;
  appearance: none;
  width: 16px;
  height: 16px;
  outline: none;
  cursor: pointer;
  background: url(${agreeCheck}) center center / contain no-repeat;

  &:checked {
    background: url(${agreeCheckFill}) center center / contain no-repeat;
  }
`;