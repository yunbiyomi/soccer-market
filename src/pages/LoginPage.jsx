import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/common/Button/Button'
import Logo from '../components/common/Logo/Logo'
import FormContainer from '../components/common/Form/FormContainer'
import axios from 'axios'

const LogInPage = () => {
  const url = 'https://openmarket.weniv.co.kr/';
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [memberType, setMemberType] = useState('BUYER');

  const handleMemberType = (id) => () => {
    switch(id){
      case 'BUYER':
        setMemberType('BUYER');
        break;
      case 'SELLER':
        setMemberType('SELLER');
        break;
      default:
        break;
    }
  } 

  const handleLogIn = async () => {
    const formData = {
      username: userName,
      password: password,
      login_type: memberType,
    }

    try {
      const response = await axios.post(url+`/accounts/login/`, formData);
      console.log('로그인 성공: ', response.data);
    } catch (error) {
      console.error('로그인 실패', error.response.data);
    }
  }

  return (
    <>
      <Logo />
      <FormContainer 
        memberType={memberType}
        onClickBuyer={handleMemberType('BUYER')}
        onClickSeller={handleMemberType('SELLER')}
      >
        <label htmlFor='id'>
          <InputBox id='id' placeholder='아이디' type='text' onChange={(e)=>setUserName(e.target.value)} autoComplete='off'/>
        </label>
        <label htmlFor='pw'>
          <InputBox id='pw' placeholder='비밀번호' type='password' autoComplete='off'onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <Button width="480px" height="60px" onClick={handleLogIn}>
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

export default LogInPage

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