import React from 'react'
import styled from 'styled-components'
import Logo from '../../../components/common/Logo/Logo'
import Category from './Category'
import InputBox from './InputBox'

const Header = () => {
  return (
    <MainContainer>
      <SHeader>
        <LeftWrap>
          <Logo width='160px' />
          <InputDisplay>
            <InputBox />
          </InputDisplay>
        </LeftWrap>
        <Category />
      </SHeader>
    </MainContainer>
  )
}

export default Header

const MainContainer = styled.header`
  width: 100%;
  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.05);
`;

const SHeader = styled.div`
  height: 100px;
  width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 1024px;
  }

  @media (max-width: 768px) {
    width: 768px;
  }

  @media (max-width: 480px) {
    width: 480px;
    height: 80px;
  }
`;

const LeftWrap = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin-left: 50px;
  }

  @media (max-width: 480px) {
    margin-left: 35px;
  }
`;

const InputDisplay = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;