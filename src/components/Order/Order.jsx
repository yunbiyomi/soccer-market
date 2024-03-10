import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from '../../api/axios'
import OrderProductContainer from './OrderProductContainer';
import OrderInfo from './OrderInfo';
import { getCookie } from '../../hooks/Cookies';

const Order = () => {
  const [orderProducts, setOrderProducts] = useState([]);
  const orderKind = getCookie('orderKind');
  const productId = getCookie('productId');

  // is_active인 상품만 가져오기
  const getOrderItem = async () => {
    if(orderKind === 'cart_order'){
      try {
        const response = await axios.get(`cart/`);
        const isActiveProducts = response.data.results.filter(product => product.is_active);
        setOrderProducts(isActiveProducts);
      } catch (error) {
        console.error('주문할 상품 목록 가져오기 실패', error.response.data);
      }
    } else {
      try {
        const response = await axios.get(`/products/${productId}`);
        setOrderProducts(response.data);
      } catch (error) {
        console.error('상품 디테일 정보 가져오기 실패', error.response.data);
      }
    }
  }

  useEffect(() => {
    getOrderItem();
  }, [])

  return (
    <SOrderContainer>
      <OrderTitle>주문/결제하기</OrderTitle>
      <OrderProductContainer
        products={orderProducts}
      />
      <OrderInfo
        products={orderProducts}
      />
    </SOrderContainer>
  )
}

export default Order

const SOrderContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 160px;
`;

const OrderTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 50px 0;
`;