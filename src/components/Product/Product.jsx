import styled from 'styled-components';
import React from 'react'

const Product = ({ product }) => {
  return (
    <>
      <SProduct>
        <ProductImg src={product.image} alt={product.product_name} />
        <ProductStoreName>
          {product.store_name}
        </ProductStoreName>
        <ProductName>
          {product.product_name}
        </ProductName>
        <ProductFeeWrap>
          <ProductFee>
            {product.shipping_fee}
          </ProductFee>
          원
        </ProductFeeWrap>
      </SProduct>
    </>
  )
}

export default Product

const SProduct = styled.div`
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  border: 1px solid var(--gray);
  object-fit: cover;
  cursor: pointer;
`;

const ProductStoreName = styled.p`
  margin-top: 16px;
  color: var(--light-font);
`;

const ProductName = styled.p`
  margin-top: 10px;
  font-size: 20px;
`;

const ProductFeeWrap = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const ProductFee = styled.p`
  margin-right: 2px;
  font-size: 20px;
  font-weight: bold;
`;