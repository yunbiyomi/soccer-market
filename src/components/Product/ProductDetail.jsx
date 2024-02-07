import React, { useState } from 'react'
import styled from 'styled-components'
import useCommaFormat from '../../hooks/useCommaFormat'
import Counter from '../common/Counter/Counter'
import Button from '../common/Button/Button'

const ProductDetail = ({ product }) => {
  const stoke = product.stock;
  const productPrice = useCommaFormat(product.price);
  const shippingFee = useCommaFormat(product.shipping_fee);
  const [totalNum, setTotalNum] = useState(1);
  const totalFee = useCommaFormat(product.price * totalNum);
  const delivery = product.shipping_method === 'PARCEL' ? '택배배송' : '화물배송';

  return (
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
          {productPrice} 원
        </ProductFee>
        <CountWrap>
          <DeliverWay>
            {delivery} / {shippingFee}원
          </DeliverWay>
          <SLine />
          {
            stoke
              ? <Counter totalNum={totalNum} setTotalNum={setTotalNum} stoke={stoke}/>
              : <NoStokeMsg>현재 재고가 없습니다</NoStokeMsg>
          }
          <SLine />
        </CountWrap>
        <TotalWrap>
          <TotalContent>
            총 상품 금액
          </TotalContent>
          <TotalCountWrap>
            <TotalContent>
              총 수량 <TotalNumText>{totalNum}</TotalNumText>개
            </TotalContent>
            <TotalSideBar />
            <ProductFee isTotal>
              {totalFee} 원
            </ProductFee>
          </TotalCountWrap>
        </TotalWrap>
        <BtnWrap>
          <SBtn width='416px' disabled={!stoke}>
            바로 구매
          </SBtn>
          <SBtn width='200px' disabled>
            장바구니
          </SBtn>
        </BtnWrap>
      </ProductRightContainer>
    </ProductInfoWrap>
  )
}

export default ProductDetail

const ProductInfoWrap = styled.div`
  width: 1280px;
  margin: 80px 0 180px 0;
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
  text-align: end;
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

const NoStokeMsg = styled.p`
  margin: 40px 0;
  font-size: 25px;
  text-align: center;
  color: var(--gray);
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

const TotalNumText = styled.span`
  color: var(--point-color);
  font-weight: bold;
`;

const TotalCountWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TotalSideBar = styled.div`
  width: 1.5px;
  height: 20px;
  background-color: var(--gray);
  margin: 0 15px;
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