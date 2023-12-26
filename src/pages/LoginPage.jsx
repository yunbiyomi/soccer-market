import React from 'react'
import logo from '../assets/soccer-market-logo.png'
import styled from 'styled-components'
import Button from '../components/common/Button/Button'

const LoginPage = () => {
  return (
    <>
      <SLogo>
        <a href="/">
          <img src={logo} alt="SoccerMarket 로고" />
        </a>
      </SLogo>
      <FormContainer>
        <BtnWrap>
          <CategoryBtn>구매회원 로그인</CategoryBtn>
          <CategoryBtn>판매회원 로그인</CategoryBtn>
        </BtnWrap>
        <SForm>
          <label htmlFor='id'>
            <InputBox
              id='id'
              placeholder='아이디'
              type='text'
            />
          </label>
          <label htmlFor='pw'>
            <InputBox id='pw' placeholder='비밀번호' type='password'/>
          </label>
          <Button width="480px" height="60px">
            로그인
          </Button> 
        </SForm>
      </FormContainer>
      <AWrap>
        <SLink href="/signup">회원가입</SLink>
        <SLink href="/login">비밀번호 찾기</SLink>
      </AWrap>
    </>
  )
}

export default LoginPage

const SLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const FormContainer = styled.div`
  width: 550px;
  border-top: none;
  border-radius: 10px;
  overflow: hidden;
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
  background-color: var(--light-gray);
  cursor: pointer;

  &:first-child {
    background-color: white;
    border-bottom: none;
  }
`;

const SForm = styled.form`
  padding: 35px;
  border: 1px solid var(--gray);
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const InputBox = styled.input`
  width: 480px;
  height: 60px;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--gray );
  font-size: 16px;

  &:focus {
    border-bottom: 1px solid var(--point-color);
  }
`;

const AWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLink = styled.a`
  margin: 30px 15px;
  position: relative;

  &:last-child::before {
    content: "";
    position: absolute;
    width: 1.5px;
    height: 15px;
    top: 50%;
    left: -14px;
    transform: translateY(-50%);
    background-color: #313131;
  }
`;