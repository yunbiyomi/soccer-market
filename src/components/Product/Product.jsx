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

  @media (max-width: 1024px) {
    max-width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    height: 300px;
  }
`;

const ProductStoreName = styled.p`
  margin-top: 16px;
  color: var(--light-font);

  @media (max-width: 1024px) {
    margin-top: 14px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
    font-size: 16px;
  }
`;

const ProductName = styled.p`
  margin-top: 10px;
  font-size: 20px;

  @media (max-width: 1024px) {
    margin-top: 8px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 20px;
  }
`;

const ProductFeeWrap = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ProductFee = styled.p`
  margin-right: 2px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;