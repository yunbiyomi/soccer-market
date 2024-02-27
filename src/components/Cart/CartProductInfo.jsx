import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ProductDeliverWay from '../Product/ProductDeliverWay';
import useCommaFormat from '../../hooks/useCommaFormat';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus, reset } from '../../features/price/totalPriceActions';
import { setCookie } from '../../hooks/Cookies';

const CartProductInfo = ({ product, isCheck, quantity, totalNum, isAllCheck }) => {
  const productPrice = useCommaFormat(product.price);
  const dispatch = useDispatch();
  const totalProductFee = useSelector(state => state.price.totalProductFee);
  const totalShippingFee = useSelector(state => state.price.totalShippingFee); 
  const [prevNum, setPrevNum] = useState(totalNum);

  // 체크 박스 유무에 따라 총 금액 계산
  const handleCalculateFee = () => {
    if (isCheck) {
      dispatch(plus(product.price * quantity, product.shipping_fee));
    } else {
      if(isAllCheck === false) {
        dispatch(reset());
      } else {
        dispatch(minus(product.price * quantity, product.shipping_fee));
      }
    }
  }

  // totalNum 값이 변할 때마다 총 금액 계산
  useEffect(() => {
    if(isCheck && prevNum < totalNum) {
      dispatch(plus(product.price, 0));
      setPrevNum(prevNum+1);
    } else if (isCheck && prevNum > totalNum) {
      dispatch(minus(product.price, 0));
      setPrevNum(totalNum);
    }
  }, [totalNum])

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
        alt={product.product_name}
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