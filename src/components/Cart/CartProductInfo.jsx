import React, { useEffect } from 'react'
import styled from 'styled-components';
import ProductDeliverWay from '../Product/ProductDeliverWay';
import useCommaFormat from '../../hooks/useCommaFormat';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from '../../features/price/totalPriceActions';
import { setCookie } from '../../hooks/Cookies';

const CartProductInfo = ({ product, isCheck, quantity }) => {
  const productPrice = useCommaFormat(product.price);
  const dispatch = useDispatch();
  const totalProductFee = useSelector(state => state.price.totalProductFee);
  const totalShippingFee = useSelector(state => state.price.totalShippingFee); 

  const handleCalculateFee = () => {
    if (isCheck) { // isCheck가 true일 때만 계산을 진행하도록 수정
      dispatch(plus(product.price * quantity, product.shipping_fee));
    } else { // isCheck가 false일 때는 총 상품 금액과 배송비를 빼서 계산
      dispatch(minus(product.price * quantity, product.shipping_fee));
    }
  }

  // isCheck 값이 변할 때마다 총 금액 계산
  useEffect(() => {
    handleCalculateFee();
  }, [isCheck]);

  // totalProductFee와 totalShippingFee 값이 변할 때마다 쿠키에 저장
  useEffect(() => {
    setCookie('totalProductFee', `${totalProductFee}`);
    setCookie('totalShippingFee', `${totalShippingFee}`);
  }, [totalProductFee, totalShippingFee])

  return (
    <ProductInfoContainer>
      <SProductImg 
        src={product.image}
      />
      <ProductInfoWrap>
        <SStoreName>{product.store_name}</SStoreName>
        <SProductName>{product.product_name}</SProductName>
        <SPrice>{productPrice}원</SPrice>
        <ProductDeliverWay
          shippingMethod={product.shipping_method}
          shippingFee={product.shipping_fee} 
          fontSize='14px' 
          marginBottom='0'
        />
      </ProductInfoWrap>
    </ProductInfoContainer>
  )
}

export default CartProductInfo

const ProductInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SProductImg = styled.img`
  width: 160px;
  height: 160px;
  margin: 0 30px 0 10px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SStoreName = styled.p`
  font-size: 14px;
  color: var(--light-font);
  margin-bottom: 10px;
`;

const SProductName = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SPrice = styled.p`
  font-weight: bold;
  margin-bottom: 50px;
`;