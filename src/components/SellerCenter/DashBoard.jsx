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
  height: 700px;
  border: 1px solid var(--gray);
  background-color: var(--light-gray);
`;