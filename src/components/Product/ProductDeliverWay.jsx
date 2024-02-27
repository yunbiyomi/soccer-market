import React from 'react'
import styled from 'styled-components';
import useCommaFormat from '../../hooks/useCommaFormat';

const ProductDeliverWay = ({ shippingMethod, shippingFee, textAlign, fontSize, marginBottom }) => {
  const delivery = shippingMethod === 'PARCEL' ? '택배배송' : '화물배송';
  const fee = useCommaFormat(shippingFee);

  return (
    <DeliverWay fontSize={fontSize} textAlign={textAlign} marginBottom={marginBottom}>
      {delivery} / {fee === '0' ? '무료배송' : `${fee}원`}
    </DeliverWay>
  )
}

export default ProductDeliverWay

const DeliverWay = styled.p`
  text-align: ${(props) => props.textAlign || 'start'};;
  font-size: ${(props) => props.fontSize || '16px'};
  color: var(--light-font);
  margin-bottom: ${(props) => props.marginBottom || '20px'};

  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
    font-size: 18px;
  }
`;