import React from 'react'
import styled from 'styled-components';
import OrderListBar from './OrderListBar';
import OrderProduct from './OrderProduct';
import { useSelector } from 'react-redux';
import useCommaFormat from '../../hooks/useCommaFormat';

const OrderProductContainer = ({ products }) => {
  const totalProductFee = useSelector(state => state.price.totalProductFee);
  const totalShippingFee = useSelector(state => state.price.totalShippingFee);
  const totalFee = useCommaFormat(totalProductFee + totalShippingFee);

  return (
    <SOrderProductContainer>
      <OrderListBar />
      <OrderProductWrap>
        {
          products.map(product => 
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

const OrderProductWrap = styled.ul`
  width: 100%;
`;

const TotalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 35px 0 100px 0;
  font-size: 18px;
`;

const STotalFee = styled.span`
  margin-left: 9px;
  font-size: 24px;
  font-weight: bold;
  color: var(--point-color);
`;