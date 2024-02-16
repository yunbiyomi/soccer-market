import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useCommaFormat from '../../hooks/useCommaFormat';
import PlusIcon from '../../assets/plus-icon_2.svg'
import MinusIcon from '../../assets/minus-icon_2.svg'

const TotalFeeBox = () => {
  const totalProductFee = useSelector(state => state.price.totalProductFee);
  const totalShippingFee = useSelector(state => state.price.totalShippingFee);
  const totalFee = totalProductFee + totalShippingFee;

  return (
    <TotalFeeContainer>
      <PriceWrap>
        <SPriceTitle>총 상품금액</SPriceTitle>
        <SPriceUnit><SPrice>{useCommaFormat(totalProductFee)}</SPrice>원</SPriceUnit>
      </PriceWrap>
      <PriceWrap>
        <SPriceTitle>상품 할인</SPriceTitle>
        <SPriceUnit><SPrice>0</SPrice>원</SPriceUnit>
      </PriceWrap>
      <PriceWrap>
        <SPriceTitle>배송비</SPriceTitle>
        <SPriceUnit><SPrice>{useCommaFormat(totalShippingFee)}</SPrice>원</SPriceUnit>
      </PriceWrap>
      <PriceWrap> 
        <SPriceTitle>결제 예정 금액</SPriceTitle>
        <SPriceUnit><STotalFee>{useCommaFormat(totalFee)}</STotalFee>원</SPriceUnit>
      </PriceWrap>
    </TotalFeeContainer>
  )
}

export default TotalFeeBox

const TotalFeeContainer = styled.div`
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-radius: 10px;
  background-color: var(--light-gray);
`;

const PriceWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  &:nth-child(2) {
    &::before {
      content: '';
      position: absolute;
      right: 302px;
      width: 34px;
      height: 34px;
      background: url(${MinusIcon}) center center / cover;
    }
  }

  &:nth-child(3) {
    &::after {
      content: '';
      position: absolute;
      right: 302px;
      width: 34px;
      height: 34px;
      background: url(${PlusIcon}) center center / cover;
    }
  }
`;

const SPriceTitle = styled.p`
  margin-bottom: 12px;
`;

const SPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const SPriceUnit = styled.p`
`;

const STotalFee = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: var(--green);
`;