import React from 'react'
import styled from 'styled-components'
import ImgIcon from '../../assets/icon-img.svg'
import Button from '../common/Button/Button'

const UploadProductEditor = () => {
  return (
    <EditorContainer>
      <ProductInfoWrap>
        <ProductInfoLeftBox>
          <InfoTitle>상품 이미지</InfoTitle>
          <ProductImgBox>
          </ProductImgBox>  
        </ProductInfoLeftBox>
        <ProductInfoRightBox>
          <InfoTitle htmlFor='product-name'>상품명</InfoTitle>
          <ProductNameInput id='product-name' type='text' required/>
          <InfoTitle htmlFor='product-price'>판매가</InfoTitle>
          <SInputWrap>
            <SInput id='product-price' type='text' required />
            <SUnitBox>원</SUnitBox>
          </SInputWrap>
          <InfoTitle>배송방법</InfoTitle>
          <BtnWrap>
            <SButton>택배, 소포, 등기</SButton>
            <SButton>직접배송(화물배달)</SButton>
          </BtnWrap>
          <InfoTitle htmlFor='product-shipping-fee'>기본 배송비</InfoTitle>
          <SInputWrap>
            <SInput id='product-shipping-fee' type='text' required />
            <SUnitBox>원</SUnitBox>
          </SInputWrap>
          <InfoTitle htmlFor='product-stoke'>재고</InfoTitle>
          <SInputWrap>
            <SInput id='product-stoke' type='text' required />
            <SUnitBox>개</SUnitBox>
          </SInputWrap>
        </ProductInfoRightBox>
      </ProductInfoWrap>
      <EditorBox>
        <InfoTitle htmlFor='product-detail'>상품 상세 정보</InfoTitle>
        <DetailInput id='product-detail' type='text' required/>
      </EditorBox>
    </EditorContainer>
  )
}

export default UploadProductEditor

const EditorContainer = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
`;

const ProductInfoWrap = styled.div`
  display: flex;
`;

const ProductInfoLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const InfoTitle = styled.label`
  margin-bottom: 10px;
  color: var(--light-font);
`;

const ProductImgBox = styled.div`
  width: 430px;
  height: 430px;
  position: relative;
  background-color: var(--gray);
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background-image: url(${ImgIcon});
  }
`;

const ProductInfoRightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductNameInput = styled.input`
  width: 530px;
  height: 50px;
  margin-bottom: 16px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
`;

const SInputWrap = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  margin-bottom: 16px;
`;

const SInput = styled(ProductNameInput)`
  width: 150px;
  border-radius: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const SUnitBox = styled.div`
  width: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: var(--gray);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const BtnWrap = styled.div`
  display: flex;
`;

const SButton = styled(Button)`
  width: 200px;
  height: 50px;
  margin: 0 10px 16px 0;
  font-size: 16px;
  font-weight: 400;
`;

const EditorBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailInput = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 20px;
  margin-bottom: 100px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  resize: none;
`;