import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ProductDetail from './ProductDetail';
import axios from '../../api/axios'

const DashBoardProduct = () => {
  const [products, setProducts] = useState([]);
  const getSellerProduct = async () => {
    try {
      const response = await axios.get(`seller/`);
      setProducts(response.data.results);
      console.log(products);
    } catch (error) {
      console.error('판매자 상품 가져오기 실패: ', error);
    }
  }

  useEffect(()=> {
    getSellerProduct();
  }, [])

  useEffect(()=> {
    console.log(products);
  }, [products])

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
        products.map(product => (
          <ProductDetail
            key={product.product_id}
            product={product}
          />
        ))
      }
    </DashBoardProductContainer>
  )
}

export default DashBoardProduct

const DashBoardProductContainer = styled.div`
  width: 100%;
`;

const DashBoardProductHeader = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr 1fr 1fr;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid var(--gray);
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