import React from 'react'
import styled from 'styled-components'
import Logo from '../../../components/common/Logo/Logo'
import { useNavigate } from 'react-router-dom'

const SellerHeader = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <SHeader>
        <Logo width='160px' />
        <STitle
          onClick={() => navigate('/sellercenter')}
        >
          판매자센터
        </STitle>
      </SHeader>
    </MainContainer>
    )
}

export default SellerHeader

const MainContainer = styled.header`
  width: 100%;
  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.05);
`;

const SHeader = styled.div`
  height: 100px;
  width: 1320px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    padding-left: 30px;
    width: 1024px;
  }

  @media (max-width: 768px) {
    width: 768px;
  }

  @media (max-width: 480px) {
    width: 480px;
  }
`;

const STitle = styled.h1`
  font-size: 30px;
  margin: 0 0 5px 25px;
  text-align: start;
  cursor: pointer;
`;