import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/common/Button/Button'
import Logo from '../components/common/Logo/Logo'
import FormContainer from '../components/common/Form/FormContainer'

const LoginPage = () => {
  const [memberType, setMemberType] = useState('buyer');

  const handleMemberType = (id) => () => {
    switch(id){
      case 'buyer':
        setMemberType('buyer');
        break;
      case 'seller':
        setMemberType('seller');
        break;
      default:
        break;
    }
  } 

  return (
    <>
      <Logo />
      <FormContainer 
        memberType={memberType}
        onClickBuyer={handleMemberType('buyer')}
        onClickSeller={handleMemberType('seller')}
      >
        <label htmlFor='id'>
          <InputBox id='id' placeholder='아이디' type='text' />
        </label>
        <label htmlFor='pw'>
          <InputBox id='pw' placeholder='비밀번호' type='password' autoComplete='new-password'/>
        </label>
        <Button width="480px" height="60px">
          로그인
        </Button> 
      </FormContainer>
      <AWrap>
        <SLink href="/signup">회원가입</SLink>
        <SLink href="/login">비밀번호 찾기</SLink>
      </AWrap>
    </>
  )
}

export default LoginPage

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