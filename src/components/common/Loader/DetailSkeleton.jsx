import React from 'react'
import styled from 'styled-components';

const DetailSkeleton = () => {
  return (
    <Skeleton>
      <ProductInfoWrap>
        <ProductImg />
        <ProductRightContainer>
          <ProductP />
          <ProductP />
          <ProductP />
          <BtnWrap>
            <SBtn />
            <SBtn />
          </BtnWrap>
        </ProductRightContainer>
      </ProductInfoWrap>
    </Skeleton>
  )
}

export default DetailSkeleton

const Skeleton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductInfoWrap = styled.div`
  width: 1280px;
  margin: 80px 0 180px 0;
  display: flex;

  @media (max-width: 1024px) {
    width: 1024px;
    flex-direction: column;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 768px;
  }

  @media (max-width: 480px) {
    width: 480px;
  }
`;

const ProductImg = styled.div`
  width: 600px;
  height: 600px;
  margin-right: 50px;  
  border-radius: 50px;
  background: linear-gradient(to right, var(--light-gray), var(--disabled-gray));

  @media (max-width: 1024px) {
    width: 1024px;
    height: 1024px;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 768px;
    height: 768px;
  }

  @media (max-width: 480px) {
    width: 480px;
    height: 480px;
  }
`;

const ProductRightContainer = styled.div`
  @media (max-width: 1024px) {
    margin: 30px 0 50px 30px;
  }
`;

const ProductP = styled.div`
  width: 300px;
  height: 45px;
  margin-bottom: 15px;
  border-radius: 50px;
  background: linear-gradient(to right, var(--light-gray), var(--disabled-gray));

  @media (max-width: 1024px) {
    width: 400px;
    height: 40px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 370px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SBtn = styled.div`
  width: 300px;
  height: 70px;
  border-radius: 50px;
  margin-right: 30px;
  background: linear-gradient(to right, var(--light-gray), var(--disabled-gray));
`;