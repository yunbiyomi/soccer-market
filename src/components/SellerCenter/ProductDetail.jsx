import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useCommaFormat from '../../hooks/useCommaFormat';
import Button from '../common/Button/Button';

const ProductDetail = ({ product }) => {
  return (
    <ProductDetailWrap>
      <ProductInfoWrap>
        <ProductImg src={product.image}/>
        <ProdctInfoBox to={`/detail?id=${product.product_id}`}>
          <ProductName>{product.product_name}</ProductName>
          <ProductStoke>재고 : {product.stock}개</ProductStoke>
        </ProdctInfoBox>
      </ProductInfoWrap>
      <ProductContent className='price'>{useCommaFormat(product.price)}원</ProductContent>
      <ProductContent><SButton>수정</SButton></ProductContent>
      <ProductContent><SButton className='delete'>삭제</SButton></ProductContent>
    </ProductDetailWrap>
  )
}

export default ProductDetail

const ProductDetailWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 3fr 1fr 1fr;
  background-color: white;
  border-bottom: 1px solid var(--gray);
`;

const ProductInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  margin: 16px 30px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProdctInfoBox = styled(Link)`
  cursor: pointer;
`;

const ProductName = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductStoke = styled.p`
  font-size: 16px;
  color: var(--light-font);
`;

const ProductContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  &.price {
    font-weight: bold;
  }
`;

const SButton = styled(Button)`
  width: 80px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  margin: 0;

  &.delete {
    background-color: white;
    border: 1px solid var(--point-color);
    color: var(--point-color);

    &:hover {
      border: 1px solid var(--gray);
      color: var(--gray);
    }
  }
`;