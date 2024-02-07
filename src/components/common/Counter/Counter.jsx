import React from 'react'
import styled from 'styled-components';

const Counter = () => {
  return (
    <CounterWrap>
      <CountBtn isLeft>-</CountBtn>
      <NumBox>1</NumBox>
      <CountBtn isRight>+</CountBtn>
    </CounterWrap>
  )
}

export default Counter

const CounterWrap = styled.div`
  display: flex;
  margin: 30px 0;
`;

const CountBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid var(--gray);
  background-color: white;
  font-size: 30px;
  color: var(--gray);
  border-radius: ${({ isLeft, isRight }) => (isLeft ? '5px 0 0 5px' : (isRight ? '0 5px 5px 0' : 'none'))};

  &:hover {
    color: white;
    background-color: var(--gray);
  }
`;

const NumBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: black;
  border: 1px solid var(--gray);
  border-left: none;
  border-right: none;
`;