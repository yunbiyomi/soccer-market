import React from 'react'
import styled from 'styled-components'
import useCommaFormat from '../../hooks/useCommaFormat'

const OrderProductInfo = ({ product, detailProduct }) => {
  const productPrice = useCommaFormat(detailProduct.price)

  return (
    <SOrderProductContainer>
      <OrderProductImg 
        src={detailProduct.image}
      />
      <SInfoWrap>
        <SStoreName>{detailProduct.store_name}</SStoreName>
        <SProductName>{detailProduct.product_name}</SProductName>
        <SQuantity>수량: {product.quantity}개</SQuantity>
      </SInfoWrap>
    </SOrderProductContainer>
  )
}

export default OrderProductInfo

const SOrderProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

const OrderProductImg = styled.img`
  width: 104px;
  height: 104px;
  margin: 0 30px 0 10px;
  object-fit: cover;
  border-radius: 10px;
`;

const SInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SStoreName = styled.p`
  font-size: 14px;
  color: var(--light-font);
  margin-bottom: 10px;
`;

const SProductName = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SQuantity = styled.p`
  font-size: 14px;
  color: var(--light-font);
`;