import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ProductDetail from './ProductDetail';
import axios from '../../api/axios'

const DashBoardProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  // 판매자 상품 가져오기
  const getSellerProduct = async () => {
    try {
      const response = await axios.get(`seller/`);
      setProducts(response.data.results);
      setIsLoad(true);
    } catch (error) {
      console.error('판매자 상품 가져오기 실패: ', error);
    }
  }

  useEffect(()=> {
    getSellerProduct();
  }, [])

  return (
    <DashBoardProductContainer>
      <DashBoardProductHeader>
        <HeaderContent>상품정보<LengthSpan>( {products.length} )</LengthSpan>
        </HeaderContent>
        <HeaderContent>판매가격</HeaderContent>
        <HeaderContent>수정</HeaderContent>
        <HeaderContent>삭제</HeaderContent>
      </DashBoardProductHeader>
      {
        isLoad ? (
        products.map(product => 
          <ProductDetail
            key={product.product_id}
            product={product}
          />
        )) : (
          <Skeleton />
        )
      }
    </DashBoardProductContainer>
  )
}

export default DashBoardProduct

const Skeleton = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid var(--gray);
  background: linear-gradient(to right, var(--light-gray), var(--disabled-gray));
`;

const DashBoardProductContainer = styled.div`
  width: 100%;
`;

const DashBoardProductHeader = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr 1fr 1fr;
  height: 100px;
  background-color: white;
  border-bottom: 1px solid var(--gray);

  @media (max-width: 1024px) {
    grid-template-columns: 3fr 2fr 1fr 1fr;
  }
`;

const HeaderContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const LengthSpan = styled.span`
  color: var(--point-color);
  font-size: 18px;
  font-weight: bold;
`;