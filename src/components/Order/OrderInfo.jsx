import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../../api/axios'
import Button from '../common/Button/Button'
import { useSelector } from 'react-redux'
import useCommaFormat from '../../hooks/useCommaFormat'
import agreeCheck from '../../assets/agree-check.svg'
import agreeCheckFill from '../../assets/agree-check-fill.svg'
import ZipCodeModal from '../common/Modal/ZipCodeModal'
import { getCookie, removeCookie } from '../../hooks/Cookies'
import { useNavigate } from 'react-router-dom'

const OrderInfo = ({ products }) => {
  const initialOrderState = {
    receiver: '',
    receiverPhoneNumber: '',
    phoneNumberSplit: {
      start: '',
      mid: '',
      end: '',
    },
    address: '',
    detailAddress: '',
    addressMessage: '',
    paymentMethod: '',
  }

  const [orderState, setOrderState] = useState(initialOrderState);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddress, setIsAddress] = useState("");
  const [isZipCode, setIsZipCode] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const productId = products.length > 0 ? products[0].product_id : 0;
  const quantity = products.length > 0 ? products[0].quantity : 0;
  const orderKind = getCookie('orderKind');
  const totalProductFee = useSelector(state => state.price.totalProductFee);
  const totalShippingFee = useSelector(state => state.price.totalShippingFee); 
  const totalFee = totalProductFee + totalShippingFee;

  const handleInptChange = (id) => (e) => {
    const value = e.currentTarget.value;
    switch(id){
      case 'receiver':
        setOrderState({...orderState, receiver: value});
        break;
      case 'detailAddress':
        setOrderState({...orderState, detailAddress: value});
        break;
      case 'addressMessage':
        setOrderState({...orderState, addressMessage: value});
        break;
      default:
        break;
    }
  }

  // 결제 수단 저장
  const handlePaymentChange = (e) => {
    const value = e.target.id
    setOrderState({...orderState, paymentMethod: value})
  }

  // 휴대폰 번호 저장
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    setOrderState(prevState => ({
      ...prevState,
      phoneNumberSplit: {
        ...prevState.phoneNumberSplit,
        [name]: value
      }
    }));
  };

  useEffect(() => {
    setOrderState({
      ...orderState, 
      receiverPhoneNumber: `${orderState.phoneNumberSplit.start}${orderState.phoneNumberSplit.mid}${orderState.phoneNumberSplit.end}`
    });
  }, [orderState.phoneNumberSplit])

  // 우편번호 모달 열고 닫기
  const openPostCode = () => {
    setIsPopupOpen(true);
  }

  const closePostCode = () => {
    setIsPopupOpen(false);
  }

  // 우편번호, 주소 저장
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setIsZipCode(data.zonecode);
    setIsAddress(fullAddress);
    setIsPopupOpen(false);
  };

  // 집 주소 전체 저장
  useEffect(() => {
    setOrderState({
      ...orderState,
      address: `(${isZipCode}) ${isAddress} ${orderState.detailAddress}`
    });
  }, [isZipCode, isAddress, orderState.detailAddress])

  const handleIsCheck = () => {
    setIsChecked(!isChecked);
  }

  // 버튼 disabled 조건
  const isValidOrder =
    orderState.receiver &&
    orderState.receiverPhoneNumber &&
    orderState.address &&
    orderState.addressMessage &&
    orderState.paymentMethod &&
    isChecked;

  const putOrder = async () => {
    const formData = {};

    if (orderKind !== 'cart_order') {
      Object.assign(formData, {
        product_id: productId,
        quantity: quantity,
      });
    }

    Object.assign(formData, {
      order_kind: orderKind,
      receiver: orderState.receiver,
      receiver_phone_number: orderState.receiverPhoneNumber,
      address: orderState.address,
      address_message: orderState.addressMessage,
      payment_method: orderState.paymentMethod,
      total_price: totalFee
    });
  
    try {
      const response = await axios.post(`order/`, formData);
      console.log(response);
      removeCookie('orderKind', '');
      navigate('/');
    } catch (error) {
      console.error('direct_order 실패: ', error);
    }
  }

  return (
    <DeliverContainer>
      <MainTitle>배송정보</MainTitle>
      <BuyerWrap>
        <SubTitle>주문자 정보</SubTitle>
        <InputWrap>
          <SLabel htmlFor='buyer-name'>이름</SLabel>
          <SInput id='buyer-name' type='text' required />
        </InputWrap>
        <InputWrap>
          <SLabel htmlFor='buyer-phone'>휴대폰</SLabel>
          <PhoneInputWrap>
            <SmallInput id='buyer-phone' type='tel' required />
            <SLine>-</SLine>
            <SmallInput id='buyer-phone' type='tel' required />
            <SLine>-</SLine>
            <SmallInput id='buyer-phone' type='tel' required />
          </PhoneInputWrap>
        </InputWrap>
        <InputWrap>
          <SLabel htmlFor='buyer-email'>이메일</SLabel>
          <SInput id='buyer-email' type='email' required />
        </InputWrap>
      </BuyerWrap>
      <ReceiverWrap>
      <SubTitle>배송지 정보</SubTitle>
        <InputWrap>
          <SLabel htmlFor='receiver-name'>수령인</SLabel>
          <SInput id='receiver-name' type='text' onChange={handleInptChange('receiver')} required />
        </InputWrap>
        <InputWrap>
          <SLabel htmlFor='receiver-phone'>휴대폰</SLabel>
          <PhoneInputWrap>
            <SmallInput id='receiver-phone' name='start' type='tel' onChange={handlePhoneChange} required />
            <SLine>-</SLine>
            <SmallInput id='receiver-phone' name='mid' type='tel' onChange={handlePhoneChange} required />
            <SLine>-</SLine>
            <SmallInput id='receiver-phone' name='end' type='tel' onChange={handlePhoneChange} required />
          </PhoneInputWrap>
        </InputWrap>
        <InputWrap>
          <SLabel htmlFor='deliver-adress' className='adress'>배송주소</SLabel>
          <AdressWrap>
            <ZipCodeWrap>
              <SLabel htmlFor='zip-code' className='a11y-hidden'>우편번호</SLabel>
              <SmallInput id='zip-code' type='text' placeholder='우편번호'  defaultValue={isZipCode} required/>
              <Button
                width='154px'
                height='40px'
                margin='0 0 0 10px'
                fontSize='15px'
                fontWeight='400'
                onClick={openPostCode}
              >
                우편번호 조회
              </Button>
              {isPopupOpen && (
                <ZipCodeModal 
                  onComplete={handleComplete}
                  closeModal={closePostCode}
                />
              )}
            </ZipCodeWrap>
            <DeliverInput id='deliver-adress' type='text' placeholder='주소' defaultValue={isAddress} required />
            <DeliverInput id='deliver-adress' type='text' placeholder='상세주소' onChange={handleInptChange('detailAddress')} required />
          </AdressWrap>
        </InputWrap>
        <InputWrap>
          <SLabel htmlFor='deliver-msg'>배송 메세지</SLabel>
          <DeliverInput id='deliver-msg' type='text' onChange={handleInptChange('addressMessage')} placeholder='예) 배송 전 연락바랍니다.' required />
        </InputWrap>
      </ReceiverWrap>
      <BottomWrap>
        <PaymentMethodWrap>
          <SubTitle>결제수단</SubTitle>
          <RadioWrap>
            <PaymentInput id='CARD' type='radio' name='paymennts' onChange={handlePaymentChange} />
            <PaymentLabel htmlFor='CARD'>신용/체크카드</PaymentLabel>
            <PaymentInput id='DEPOSIT' type='radio' name='paymennts' onChange={handlePaymentChange} />
            <PaymentLabel htmlFor='DEPOSIT'>무통장 입금</PaymentLabel>
            <PaymentInput id='PHONE_PAYMENT' type='radio' name='paymennts' onChange={handlePaymentChange} />
            <PaymentLabel htmlFor='PHONE_PAYMENT'>휴대폰 결제</PaymentLabel>
            <PaymentInput id='NAVERPAY' type='radio' name='paymennts' onChange={handlePaymentChange} />
            <PaymentLabel htmlFor='NAVERPAY'>네이버페이</PaymentLabel>
            <PaymentInput id='KAKAOPAY' type='radio' name='paymennts' onChange={handlePaymentChange} />
            <PaymentLabel htmlFor='KAKAOPAY'>카카오페이</PaymentLabel>
          </RadioWrap>
        </PaymentMethodWrap>
        <FinalPaymentWrap>
          <SubTitle className='no-border'>최종 결제 정보</SubTitle>
          <FinalPaymentBox>
            <FinalPriceBox>
              <PriceWrap>
                <PriceTitle>- 상품금액</PriceTitle>
                <PriceContent>{useCommaFormat(totalProductFee)}원</PriceContent>
              </PriceWrap>
              <PriceWrap>
                <PriceTitle>- 할인금액</PriceTitle>
                <PriceContent>0원</PriceContent>
              </PriceWrap>
              <PriceWrap>
                <PriceTitle>- 배송비</PriceTitle>
                <PriceContent>{useCommaFormat(totalShippingFee)}원</PriceContent>
              </PriceWrap>
              <PriceWrap className='total'>
                <PriceTitle>- 결제금액</PriceTitle>
                <PriceContent className='total'>{useCommaFormat(totalFee)}원</PriceContent>
              </PriceWrap>
            </FinalPriceBox>
            <FinalCheckBox>
              <AgreeBox>
                <CheckInput id='payment-agree' type='checkbox' checked={isChecked} onChange={handleIsCheck}/>
                <label htmlFor='payment-agree'>
                  주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
                </label>
              </AgreeBox>
              <Button width='220px' height='68px' fontSize='24px' margin='30px 0 0 0 ' disabled={!isValidOrder} onClick={putOrder}>결제하기</Button>
            </FinalCheckBox>
          </FinalPaymentBox>
        </FinalPaymentWrap>
      </BottomWrap>
    </DeliverContainer>
  )
}

export default OrderInfo 

const DeliverContainer = styled.div`
  width: 1280px;
`;

const MainTitle = styled.h3`
  width: 100%;
  padding-bottom: 18px;
  font-size: 24px;
  border-bottom: 2px solid var(--gray);
`;

const BuyerWrap = styled.div`
`;

const SubTitle = styled.h4`
  width: 100%;
  margin: 40px 0 0 0;
  padding-bottom: 18px;
  font-size: 18px;
  border-bottom: 2px solid var(--gray);

  &.no-border {
    border: none;
  }
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray);
`;

const SLabel = styled.label`
  display: inline-block;
  width: 150px;

  &.adress {
    position: relative;
  }
`;

const SInput = styled.input`
  width: 334px;
  height: 40px;
  margin: 8px 0;
  padding: 0 5px;
  border: 1px solid var(--gray);
`;

const PhoneInputWrap = styled.div`
  width: 334px;
  display: flex;
  align-items: center;
`;

const SmallInput = styled(SInput)`
  width: 100%;
`;

const SLine = styled.p`
  margin: 0 5px;
`;

const ReceiverWrap = styled.div`

`;

const AdressWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ZipCodeWrap = styled.div`
  width: 334px;
  display: flex;
  align-items: center;
`;

const DeliverInput = styled(SInput)`
  width: 800px;
`;

const BottomWrap = styled.div`
  display: flex;
`;

const PaymentMethodWrap = styled.div`
  width: 760px;
  margin-right: 40px;
`;

const RadioWrap = styled.div`
  border-bottom: 2px solid var(--gray);
  display: flex;
  align-items: center;
`;

const PaymentInput = styled.input`
  -webkit-apperance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  margin: 18px 8px 18px 0;
  border: 2px solid var(--point-color);
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: var(--point-color);
    border: 4px solid white;
    box-shadow: 0 0 0 1.6px var(--point-color);
  }
`;

const PaymentLabel = styled.label`
  margin-right: 30px;
  cursor: pointer;
`;

const FinalPaymentWrap = styled.div`
  width: 480px;
`;

const FinalPaymentBox = styled.div`
  width: 100%;
  border: 2px solid var(--point-color);
  border-radius: 10px;
  overflow: hidden;
`;

const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  &.total {
    border-top: 1px solid var(--gray);
    padding: 20px 0 0 0;
  }
`;

const PriceTitle = styled.p`
`;

const PriceContent = styled.p`
  font-size: 18px;
  font-weight: bolder;

  &.total {
    font-size: 24px;
    color: var(--green);
  }
`;

const FinalPriceBox = styled.div`
  padding: 30px;
`;

const FinalCheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--light-gray);
  padding: 30px;
`;

const AgreeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckInput = styled.input`
  margin-right: 10px;
  appearance: none;
  width: 16px;
  height: 16px;
  outline: none;
  cursor: pointer;
  background: url(${agreeCheck}) center center / contain no-repeat;

  &:checked {
    background: url(${agreeCheckFill}) center center / contain no-repeat;
  }
`;