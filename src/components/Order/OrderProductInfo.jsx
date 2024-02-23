import React from 'react'
import styled from 'styled-components'
import useCommaFormat from '../../hooks/useCommaFormat'
import { getCookie } from '../../hooks/Cookies';

const OrderProductInfo = ({ product, detailProduct }) => {
  const price = useCommaFormat(detailProduct.price);
  const orderKind = getCookie('orderKind');
  const directQuantity = getCookie('quantity');
  const quantity = orderKind === 'cart_order' ? product.quantity : directQuantity;

  return (
    <SOrderProductContainer>
      <OrderProductImg 
        src={detailProduct.image}
      />
      <SInfoWrap>
        <SStoreName>{detailProduct.store_name}</SStoreName>
        <SProductName>{detailProduct.product_name}</SProductName>
        <SProductPrice>{price}원</SProductPrice>
        <SQuantity>수량: {quantity}개</SQuantity>
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
  margin-bottom: 3px;
`;

const SProductName = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

const SProductPrice = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: bold;
`;

const SQuantity = styled.p`
  font-size: 14px;
  color: var(--light-font);
`;