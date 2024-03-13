import React from 'react'
import styled from 'styled-components'

const FormContainer = (props) => {
  const { memberType, onClickBuyer, onClickSeller } = props;

  return (
    <SFormContainer>
      <BtnWrap>
        <CategoryBtn memberType={memberType} onClick={onClickBuyer}>
          구매회원 로그인
        </CategoryBtn>
        <CategoryBtn memberType={memberType} onClick={onClickSeller}>
          판매회원 로그인
        </CategoryBtn>
      </BtnWrap>
      <SForm>
        {props.children}
      </SForm>
    </SFormContainer>
  )
}

export default FormContainer

const SFormContainer = styled.div`
  width: 550px;
  border-top: none;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 400px;
    margin-top: 50px;
  }
`;

const BtnWrap = styled.div`
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CategoryBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid var(--gray);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ memberType }) => memberType === 'SELLER' ? 'white' : 'var(--light-gray)'};
  border-bottom: ${({ memberType }) => memberType === 'SELLER' ? 'none' : '1px solid var(--gray);'};
  cursor: pointer;

  &:first-child {
    background-color: ${({ memberType }) => memberType === 'BUYER' ? 'white' : 'var(--light-gray)'};
    border-bottom: ${({ memberType }) => memberType === 'BUYER' ? 'none' : '1px solid var(--gray);'};
  }
`;

const SForm = styled.form`
  padding: 35px;
  border: 1px solid var(--gray);
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;