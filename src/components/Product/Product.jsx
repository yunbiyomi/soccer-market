import styled from 'styled-components';
import React from 'react'
import useCommaFormat from '../../hooks/useCommaFormat';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const productPrice = useCommaFormat(product.price);
  
  return (
    <ProductContainer>
      <SProduct to={`/detail?id=${product.product_id}`}>
        <ProductImg 
          src={product.image} 
          alt={product.product_name} 
        />
        <ProductStoreName>
          {product.store_name}
        </ProductStoreName>
        <ProductName>
          {product.product_name}
        </ProductName>
        <ProductFeeWrap>
          <ProductFee>
            {productPrice}
          </ProductFee>
          원
        </ProductFeeWrap>
      </SProduct>
    </ProductContainer>
  )
}

export default Product

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SProduct = styled(Link)`
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  border: 1px solid var(--gray);
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
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