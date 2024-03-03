import React from 'react'
import styled from 'styled-components'
import DashBoardHeader from './DashBoardHeader'
import DashBoardProduct from './DashBoardProduct'

const DashBoard = () => {
  return (
    <DashBoardContainer>
      <DashBoardHeader />
      <DashBoardWrap>
        <DashBoardProduct />
      </DashBoardWrap>
    </DashBoardContainer>
  )
}

export default DashBoard

const DashBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 200px;
`;

const DashBoardWrap = styled.div`
  width: 1280px;
  height: 600px;
  border: 1px solid var(--gray);
  background-color: var(--light-gray);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--point-color);
    border-radius: 15px;
    border: 4px solid white;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }

  @media (max-width: 1024px) {
    width: 924px;
  }

  @media (max-width: 768px) {
    width: 708px;
  }
`;