import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  const { type } = props;
  return (
    <SButton type={type ? type : 'button'} {...props} >
      {props.children}
    </SButton>
  )
}

export default Button

const SButton = styled.button`
  width: ${props => props.width || '100%'}; 
  height: ${props => props.height || '100%'};
  border-radius: 5px;
  background-color: ${props => props.bgColor || 'var(--point-color)'};
  color:${props => props.color || 'white'};
  font-size: 18px;
  font-weight: bold;
  margin-top: 35px;

  &:hover {
    background-color: var(--gray);
  }

  &:disabled {
    background-color: var(--gray);
  }
`;