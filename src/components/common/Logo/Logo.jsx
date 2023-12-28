import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/soccer-market-logo.png'

const Logo = () => {
  return (
    <SLogo>
      <a href="/">
        <img src={logo} alt="SoccerMarket 로고" />
      </a>
    </SLogo>
  )
}

export default Logo

const SLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;