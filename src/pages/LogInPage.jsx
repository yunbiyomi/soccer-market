import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/common/Button/Button'
import Logo from '../components/common/Logo/Logo'
import FormContainer from '../components/common/Form/FormContainer'
import axios from '../api/axios'
import { setCookie } from '../hooks/Cookies'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/authActions'

const LogInPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [memberType, setMemberType] = useState('BUYER');
  const idInputRef = useRef(null);
  const pwInputRef = useRef(null);
  const dispatch = useDispatch();

  const LOGIN_INCORRECT_ERROR = "로그인 정보가 없습니다.";
  const MEMBER_TYPE_ERROR = "로그인 정보가 없습니다. 로그인 유형을 학인해주세요.";

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

  // Enter키 눌러서 로그인
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') 
      handleLogIn();
  };

  // 로그인
  const handleLogIn = async () => {
    if(!userName && idInputRef.current){
      setErrorMsg('아이디를 입력해주세요.');
      idInputRef.current.focus();
      return
    }
    else if(!password && pwInputRef.current){
      setErrorMsg('비밀번호를 입력해주세요.');
      pwInputRef.current.focus();
      return
    }

    const formData = {
      username: userName,
      password: password,
      login_type: memberType,
    }

    try {
      const response = await axios.post(`accounts/login/`, formData);
      setErrorMsg('');
      const token = response.data.token;
      if(token){
        setCookie("token", `JWT ${token}`, {
          path: "/",
          sameSite:'strict',
          // secure: true,
          // httpOnly: true,
        })
        setCookie("memberType", `${memberType}`, {
          path: "/",
          sameSite:'strict'
        })
        dispatch(login(token, memberType));
      }
      navigate('/');
    } catch (error) {
      console.error('로그인 실패', error.response.data);
      if(error.response.data.FAIL_Message === LOGIN_INCORRECT_ERROR)
        setErrorMsg('아이디 또는 비밀번호가 일치하지 않습니다.');
      else if(error.response.data.FAIL_Message === MEMBER_TYPE_ERROR)
        setErrorMsg('회원 유형을 확인해주세요.');
    }
  }
  
  return (
    <LoginPageContainer>
      <Logo 
        width='300px'
      />
      <FormContainer 
        memberType={memberType}
        onClickBuyer={handleMemberType('BUYER')}
        onClickSeller={handleMemberType('SELLER')}
      >
        <label htmlFor='id'>
          <InputBox id='id' placeholder='아이디' type='text' onChange={(e)=>setUserName(e.target.value)} autoComplete='off' ref={idInputRef} onKeyDown={handleKeyDown}/>
        </label>
        <label htmlFor='pw'>
          <InputBox id='pw' placeholder='비밀번호' type='password' autoComplete='off'onChange={(e)=>setPassword(e.target.value)} ref={pwInputRef} onKeyDown={handleKeyDown}/>
        </label>
        {
          ErrorMsg && (
            <ErrorMsg>{errorMsg}</ErrorMsg>
          )
        }
        <Button width="330px" height="55px" margin="10px 0 0 0" onClick={handleLogIn}>
          로그인
        </Button> 
      </FormContainer>
      <AWrap>
        <SLink href="/signup">회원가입</SLink>
        <SLink href="/login">비밀번호 찾기</SLink>
      </AWrap>
    </LoginPageContainer>
  )
}

export default LogInPage

const LoginPageContainer = styled.div`
  @media (max-width: 480px) {
    padding-top: 50px;
  }
`;

const InputBox = styled.input`
  width: 480px;
  height: 60px;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--gray );
  font-size: 16px;

  &:focus {
    border-bottom: 2px solid var(--point-color);
  }

  @media (max-width: 480px) {
    width: 330px;
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
  cursor: pointer;

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

const ErrorMsg = styled.div`
  color: var(--red);
  font-weight: 500;
  margin-top: 25px;
  padding-left: 3px;
`;
