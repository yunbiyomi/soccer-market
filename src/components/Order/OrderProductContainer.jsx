import React from 'react'
import styled from 'styled-components';
import OrderListBar from './OrderListBar';
import OrderProduct from './OrderProduct';
import { useSelector } from 'react-redux';
import useCommaFormat from '../../hooks/useCommaFormat';
import { getCookie } from '../../hooks/Cookies';

const OrderProductContainer = ({ products }) => {
  const orderKind = getCookie('orderKind');
  const cookieQuantity = getCookie('quantity');
  const cookieTotalProductFee = useSelector(state => state.price.totalProductFee);
  const cookieTotalShippingFee = useSelector(state => state.price.totalShippingFee);
  const totalProductFee = orderKind === 'cart_order' ? cookieTotalProductFee : products.price * cookieQuantity;
  const totalShippingFee = orderKind === 'cart_order' ? cookieTotalShippingFee : products.shipping_fee;
  const totalFee = useCommaFormat(totalProductFee + totalShippingFee);

  return (
    <SOrderProductContainer>
      <OrderListBar />
      <OrderProductWrap>
        {
          Array.isArray(products) ? (
            products.map(product => 
              <OrderProduct 
                key={product.product_id}
                product={product}
              />
            )
          ) : (
            <OrderProduct 
              key={products.product_id}
              product={products}
              productFee={totalProductFee}
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