import React, { useState } from 'react'
import styled from 'styled-components'
import useCommaFormat from '../../hooks/useCommaFormat'
import Counter from '../common/Counter/Counter'
import Button from '../common/Button/Button'

const ProductDetail = ({ product }) => {
  const productFee = useCommaFormat(product.shipping_fee)
  const [a, setA] = useState(0);
  return (
    <ProductDetailContainer>
      <ProductInfoWrap>
        <ProductImg src={product.image} />
        <ProductRightContainer>
          <ProductStoreName>
            {product.store_name}
          </ProductStoreName>
          <ProductName>
            {product.product_name}
          </ProductName>
          <ProductFee>
            {productFee}
          </ProductFee>
          <CountWrap>
            <DeliverWay>
              택배배송 / 무료배송
            </DeliverWay>
            <SLine />
            <Counter />
            <SLine />
          </CountWrap>
          <TotalWrap>
            <TotalContent>총 상품 금액</TotalContent>
            <TotalCountWrap>
              <TotalContent>총 수량 1개</TotalContent>
              <ProductFee isTotal>
                {productFee}
              </ProductFee>
            </TotalCountWrap>
          </TotalWrap>
          <BtnWrap>
            <SBtn width='416px'>바로 구매</SBtn>
            <SBtn width='200px' disabled>장바구니</SBtn>
          </BtnWrap>
        </ProductRightContainer>
      </ProductInfoWrap>
      <DetailInfoWrap>
        <InfoWrap>
          <Infocontent active>상세보기</Infocontent>
          <InfoBar active/>
        </InfoWrap>
        <InfoWrap>
          <Infocontent>리뷰</Infocontent>
          <InfoBar />
        </InfoWrap>
        <InfoWrap>
          <Infocontent>Q&A</Infocontent>
          <InfoBar />
        </InfoWrap>
        <InfoWrap>
          <Infocontent>반품/교환정보</Infocontent>
          <InfoBar />
        </InfoWrap>
      </DetailInfoWrap>
    </ProductDetailContainer>
  )
}

export default ProductDetail

const ProductDetailContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductInfoWrap = styled.div`
  width: 1280px;
  margin: 80px 0;
  display: flex;
`;

const ProductImg = styled.img`
  width: 600px;
  height: 600px;
  margin-right: 50px;
  object-fit: cover;
`;

const ProductRightContainer = styled.div`
`;

const ProductStoreName = styled.p`
  font-size: 18px;
  color: var(--light-font);
  margin-bottom: 15px;
`;

const ProductName = styled.p`
  font-size: 36px;
  margin-bottom: 20px;
`;

const ProductFee = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: ${({ isTotal }) => (isTotal ? '0' : '100px')};
  color: ${({ isTotal }) => (isTotal ? 'var(--point-color)' : 'black')};
`;

const CountWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeliverWay = styled.p`
  font-size: 16px;
  color: var(--light-font);
  margin-bottom: 20px;
`;

const SLine = styled.div`
  width: 630px;
  height: 2px;
  background-color: var(--gray);
  margin: 10px 0;
`;

const TotalWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const TotalContent = styled.p`
  font-size: 18px;
`;

const TotalCountWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 40px;

  &::before {
    position: absolute;
    content: "";
    left: 105px;
    width: 1.5px;
    height: 20px;
    background-color: var(--gray);
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const SBtn = styled(Button)`
  width: ${props => props.width || '100%'}; 
  height: 60px;
  margin: 0;
`;

const DetailInfoWrap = styled.div`
  display: flex;
`;

const InfoWrap = styled.div`
  margin-bottom: 360px;
`;

const Infocontent = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ active }) => active ? 'var(--point-color)' : 'var(--gray)'};
  text-align: center;
`;

const InfoBar = styled.div`
  width: 320px;
  height: 4px;
  background-color: ${({ active }) => active ? 'var(--point-color)' : 'var(--gray)'};
`;