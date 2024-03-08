import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/soccer-market-logo.png'

const Logo = (props) => {
  return (
    <SLogo>
      <a href="/">
        <img src={logo} alt="SoccerMarket 로고" width={props.width}/>
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
  scale: 1.2;

  @media (max-width: 480px) {
    margin: 0;
  }
`;