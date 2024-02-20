import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from '../../api/axios'
import OrderListBar from './OrderListBar';
import OrderProduct from './OrderProduct';
import { useSelector } from 'react-redux';
import useCommaFormat from '../../hooks/useCommaFormat';

const OrderProductContainer = () => {
  const [orderProducts, setOrderProducts] = useState([]);
  const totalProductFee = useSelector(state => state.price.totalProductFee);
  const totalShippingFee = useSelector(state => state.price.totalShippingFee);
  const totalFee = useCommaFormat(totalProductFee + totalShippingFee);


  // is_active인 상품만 가져오기
  const getOrderItem = async () => {
    try {
      const response = await axios.get(`cart/`);
      const isActiveProducts = response.data.results.filter(product => product.is_active);
      setOrderProducts(isActiveProducts);
    } catch (error) {
      console.error('주문할 상품 목록 가져오기 실패', error.response.data);
    }
  }

  useEffect(() => {
    getOrderItem();
  }, [])

  useEffect(() => {
    console.log(orderProducts);
  }, [orderProducts]);

  return (
    <SOrderProductContainer>
      <OrderListBar />
      <OrderProductWrap>
        {
          orderProducts.map(product => 
            <OrderProduct 
              key={product.product_id}
              product={product}
            />
          )
        }
      </OrderProductWrap>
      <TotalBox>
        총 주문금액<STotalFee>{totalFee}원</STotalFee>
      </TotalBox>
    </SOrderProductContainer>
  )
}

export default OrderProductContainer

const SOrderProductContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const OrderProductWrap = styled.div`
  width: 100%;
`;

const TotalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 35px;
  font-size: 18px;
`;

const STotalFee = styled.span`
  margin-left: 9px;
  font-size: 24px;
  font-weight: bold;
  color: var(--green);
`;