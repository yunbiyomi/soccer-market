import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import useQueryString from '../hooks/useQueryString';
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import ProductDetail from '../components/Product/Detail/ProductDetail';
import DetailInfoBar from '../components/Product/Detail/DetailInfoBar';
import styled from 'styled-components';
import Button from '../components/common/Button/Button'
import DetailSkeleton from '../components/common/Loader/DetailSkeleton';

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const productId = useQueryString();
  const [load, setLoad] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // 테블릿, 모바일 버전 모달 출력
  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

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
              <ProductDetail 
                product={product} 
                isOrderModalOpen={isOrderModalOpen}
                closeOrderModal={closeOrderModal}
              />
              <DetailInfoBar 
                content={product.product_info}
              />
              <MobileBtnWrap>
                <MobileBtn 
                  onClick={openOrderModal}
                >
                  구매하기
                </MobileBtn>
              </MobileBtnWrap>
            </DetailContainer>
          )
          : (
            <DetailSkeleton />
          )
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

const MobileBtnWrap = styled.div`
  display: none;
  width: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 20;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileBtn = styled(Button)`
  width: 100%;
  height: 100px;
  font-size: 30px;
  margin:0;
  border-radius: 0px;

  @media (max-width: 480px) {
    width: 480px;
    height: 80px;
    font-size: 25px;
  }
`;