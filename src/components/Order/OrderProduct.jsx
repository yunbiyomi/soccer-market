import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OrderProductInfo from './OrderProductInfo'
import axios from '../../api/axios'
import ProductDeliverWay from '../Product/ProductDeliverWay'
import useCommaFormat from '../../hooks/useCommaFormat'

const OrderProduct = ({ product }) => {
  const productId = product.product_id;
  const [detailProduct, setDetailProduct] = useState([]);
  const shippingFee = useCommaFormat(detailProduct.shipping_fee);
  const productTotalFee = useCommaFormat(product.quantity * detailProduct.price);

  // 주문 상품 상세 정보 가져오기
  const getDetailOrderProduct = async () => {
    try {
      const response = await axios.get(`products/${productId}`);
      setDetailProduct(response.data);
    } catch (error) {
      console.error('주문 상품 상세 정보 가져오기 실패', error.response.data);
    }
  }

  useEffect(() => {
    getDetailOrderProduct();
  }, [])

  useEffect(() => {
    console.log('detail', detailProduct);
  }, [detailProduct])

  return (
    <SOrderProductContainer>
      <OrderProductInfo
        product={product}
        detailProduct={detailProduct}
      />
      <SContent>-</SContent>
      <SContent>{shippingFee=== '0' ? '무료배송' : `${shippingFee}원`}</SContent>
      <SPrice>{productTotalFee}원</SPrice>
    </SOrderProductContainer>
  )
}

export default OrderProduct

const SOrderProductContainer = styled.li`
  width: 100%;
  height: 130px;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  position: relative;
  border-bottom: 1px solid var(--gray);
`;

const SContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--light-font);
`;

const SPrice = styled(SContent)`
  color: black;
`;