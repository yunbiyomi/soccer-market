import React from 'react'
import styled from 'styled-components'

const Button = ({children}) => {
  return (
    <SButton>
      {children}
    </SButton>
  )
}

export default Button

const SButton = styled.button`
  width: 480px;
  height: 60px;
  border-radius: 5px;
  background-color: var(--point-color);
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-top: 35px;

  &:hover {
    background-color: var(--gray);
  }
`;