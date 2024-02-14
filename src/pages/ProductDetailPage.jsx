import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import useQueryString from '../hooks/useQueryString';
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import ProductDetail from '../components/Product/Detail/ProductDetail';
import DetailInfoBar from '../components/Product/Detail/DetailInfoBar';
import styled from 'styled-components';

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const productId = useQueryString();
  const [load, setLoad] = useState(false);

  // 현재 페이지에 알맞는 상품 정보 가져오기
  const getProduct = async () => {
    try {
      const response = await axios.get(`/products/${productId}`);
      setProduct(response.data);
      setLoad(true);
    } catch (error) {
      console.error('상품 디테일 정보 가져오기 실패', error.response.data);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Header />
      {
        load
          ? (
            <DetailContainer>
              <ProductDetail product={product} />
              <DetailInfoBar content={product.product_info}/>
            </DetailContainer>
          )
          : <p>로딩중</p>
      }
      <Footer />
    </>
  )
}

export default ProductDetailPage

const DetailContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;