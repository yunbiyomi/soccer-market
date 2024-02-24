import React from 'react'
import styled from 'styled-components'
import DashBoardHeader from './DashBoardHeader'

const DashBoard = () => {
  return (
    <DashBoardContainer>
      <DashBoardHeader />
    </DashBoardContainer>
  )
}

export default DashBoard

const DashBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;