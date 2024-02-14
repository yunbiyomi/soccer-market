import React from 'react'
import styled from 'styled-components';
import ProductDeliverWay from '../Product/ProductDeliverWay';
import useCommaFormat from '../../hooks/useCommaFormat';

const CartProductInfo = ({ product }) => {
  const productPrice = useCommaFormat(product.price);

  return (
    <ProductInfoContainer>
      <SProductImg src={product.image} />
      <ProductInfoWrap>
        <SStoreName>{product.store_name}</SStoreName>
        <SProductName>{product.product_name}</SProductName>
        <SPrice>{productPrice}원</SPrice>
        <ProductDeliverWay shippingMethod={product.shipping_method} shippingFee={product.shipping_fee} fontSize='14px' marginBottom='0'/>
      </ProductInfoWrap>
    </ProductInfoContainer>
  )
}

export default CartProductInfo

const ProductInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SProductImg = styled.img`
  width: 160px;
  height: 160px;
  margin: 0 30px 0 10px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductInfoWrap = styled.div`
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

const SPrice = styled.p`
  font-weight: bold;
  margin-bottom: 50px;
`;