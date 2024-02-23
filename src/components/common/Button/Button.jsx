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
  border: ${props => props.border || ''};
  border-radius: 5px;
  background-color: ${props => props.bgColor || 'var(--point-color)'};
  color:${props => props.color || 'white'};
  font-size: ${props => props.fontSize || '18px'};
  font-weight: ${props => props.fontWeight || 'bold'};
  margin: ${props => props.margin || '35px 0 0 0'};

  &:hover {
    background-color: white;
    color: var(--point-color);
    border: 1px solid var(--point-color);
  }

  &:disabled {
    background-color: var(--gray);
    border: none;
    color: white;
    cursor: auto;
  }
`;