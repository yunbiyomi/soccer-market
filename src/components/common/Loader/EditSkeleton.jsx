import React from 'react'
import styled from 'styled-components';

const EditSkeleton = () => {
  return (
    <EditorContainer>
      <ProductInfoWrap>
        <ProductInfoLeftBox>
          <InfoTitle>상품 이미지</InfoTitle>
          <ProductImgBox>
          </ProductImgBox>  
        </ProductInfoLeftBox>
        <ProductInfoRightBox>
          <InfoTitle>상품명</InfoTitle>
          <ProductNameInput />
          <InfoTitle >판매가</InfoTitle>
          <SInputWrap>
          <ProductNameInput />
          </SInputWrap>
          <InfoTitle>배송방법</InfoTitle>
          <BtnWrap>
            <ProductNameInput />
          </BtnWrap>
          <InfoTitle>기본 배송비</InfoTitle>
          <SInputWrap>
          <ProductNameInput />
          </SInputWrap>
          <InfoTitle>재고</InfoTitle>
          <SInputWrap>
          <ProductNameInput />
          </SInputWrap>
        </ProductInfoRightBox>
      </ProductInfoWrap>
      <EditorBox>
        <InfoTitle>상품 상세 정보</InfoTitle>
          <DetailInput/>
      </EditorBox>
    </EditorContainer>
  )
}

export default EditSkeleton

const EditorContainer = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;

  @media (max-width: 1024px) {
    width: 1024px;
  }

  @media (max-width: 768px) {
    width: 768px;
  }
`;

const ProductInfoWrap = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    margin-left: 30px;
    flex-direction: column;
  }
`;

const ProductInfoLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  @media (max-width: 1024px) {
    margin-top: 30px;
    flex-direction: column;
  }
`;

const InfoTitle = styled.label`
  margin-bottom: 10px;
  color: var(--light-font);

  @media (max-width: 1024px) {
    margin-bottom: 15px;
  }
`;

const ProductImgBox = styled.div`
  width: 430px;
  height: 430px;
  position: relative;
  background: linear-gradient(to right, var(--light-gray), var(--disabled-gray));

  @media (max-width: 1024px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 768px) {
    width: 708px;
    height: 708px;
  }
`;


const ProductInfoRightBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin-top: 30px;
  }
`;

const ProductNameInput = styled.div`
  width: 530px;
  height: 50px;
  margin-bottom: 16px;
  border: 1px solid var(--gray);
  background: linear-gradient(to right, var(--light-gray), var(--disabled-gray));
  border-radius: 5px;
  padding: 0 10px;
`;

const SInputWrap = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  margin-bottom: 16px;
`;

const BtnWrap = styled.div`
  display: flex;

  &.bottom {
    justify-content: end;
    margin: 30px 0 100px 0;

    @media (max-width: 1024px) {
    margin-right: 20px;
  }
  }
`;

const EditorBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }
`;

const DetailInput = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  background: linear-gradient(to right, var(--light-gray), var(--disabled-gray));
`;