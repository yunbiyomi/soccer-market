import React, { useEffect, useState } from 'react'
import logo from '../assets/soccer-market-logo.png'
import checkBox from '../assets/chek-disabled.svg'
import fillCheckBox from '../assets/check-ok.svg'
import styled from 'styled-components'
import Button from '../components/common/Button/Button'
import agreeCheck from '../assets/agree-check.svg'
import agreeCheckFill from '../assets/agree-check-fill.svg'
import axios from 'axios'

const SignUpPage = () => {
  const url = 'https://openmarket.weniv.co.kr/';

  const initialIdState = {
    userId: '',
    userIdRequired: false,
    isValidUserId: true,
    userIdMsg: '',
  }

  const initialPwState = {
    pw: '',
    pwRequired: false,
    isValidPw: false,
  }

  const initialPwCheckState = {
    pwCheck: '',
    pwCheckRequired: false,
    isValidPwCheck: false,
  }

  const initialUserNameState = {
    userName: '',
    userNameRequired: false,
  }

  const initialPhoneNumberState = {
    phoneNumber: '',
    phoneNumberSplit: {
      start: '010',
      mid: '',
      end: ''
    },
    isValidPhoneNumber: false,
  }

  const [idState, setIdState] = useState(initialIdState);
  const [pwState, setPwState] = useState(initialPwState);
  const [pwCheckState, setPwCheckState] = useState(initialPwCheckState);
  const [userNameState, setUserNameState] = useState(initialUserNameState);
  const [phoneNumberState, setPhoneNumberState] = useState(initialPhoneNumberState);
  const [checked, setChecked] = useState(false);

  const ID_REGEX = new RegExp("^[A-Za-z0-9]{1,20}$");
  const PW_REGEX = new RegExp("^[A-Za-z0-99@$!%*?&-_]{8,}$");
  const PHONE_NUMBER_REGEX = new RegExp("^[0-9]+$");
  // const PW_REGEX = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-99@$!%*?&-_]{8,}$");

  const handleInputChange = (id) => (e) => {
    const value = e.currentTarget.value;
    switch(id){
      case 'userId':
        setIdState({...idState, userId: value});
        break;
      case 'pw':
        setPwState({...pwState, pw: value});
        break;
      case 'pwCheck':
        setPwCheckState({...pwCheckState, pwCheck: value});
        break;
      case 'userName':
        setUserNameState({...userNameState, userName: value});
        break;
      default:
        break;
    }
  }

  // 휴대폰번호 입력 받기
  const onPhoneNumberHandler = (e) => {
    const {id, value} = e.currentTarget;
    setPhoneNumberState({
      ...phoneNumberState,
      phoneNumberSplit: {
        ...phoneNumberState.phoneNumberSplit,
        [id]: value,
      },
    })
  }

  // 동의
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  // 빈칸 검사
  const checkValidation = (id) => (e) => {
    switch(id){
      case 'userId':
        if(!idState.userId){
          setIdState({...idState, userIdRequired: true});
        }
        break;
      case 'pw':
        if(!pwState.pw)
          setPwState({...pwState, pwRequired: true});
        break;
      case 'pwCheck':
        if(!pwCheckState.pwCheck)
          setPwCheckState({...pwCheckState, pwCheckRequired: true});
        break;
      case 'userName':
        if(!userNameState.userName)
          setUserNameState({...userNameState, userNameRequired: true});
        break;
      case 'phoneNumber':
        setPhoneNumberState({...phoneNumberState, isValidPhoneNumber: PHONE_NUMBER_REGEX.test(phoneNumberState.phoneNumber)})
        console.log(phoneNumberState.phoneNumber);
        break;
      default:
        break;
    }
  }

  // 아이디 중복확인
  const handleCheckUserId = async () => {
    try {
      const response = await axios.post(url+`/accounts/signup/valid/username/`,{
        username:idState.userId
      });
      setIdState({...idState, userIdMsg: response.data});
    } catch (error) {
      setIdState({...idState, userIdMsg: error.response.data});
    }
  }

  useEffect(() => {
    // 휴대폰 번호 합치기
    const { phoneNumberSplit } = phoneNumberState;
    const { start, mid, end } = phoneNumberSplit;
    const combinedPhoneNumber = `${start}${mid}${end}`;
    setPhoneNumberState((prevPhoneNumberState) => ({
      ...prevPhoneNumberState,
      phoneNumber: combinedPhoneNumber,
    }));

    // 아이디 유효성 검사
    setIdState({...idState, isValidUserId: ID_REGEX.test(idState.userId)});

    // 비밀번호 유효성 검사
    setPwState({...pwState, isValidPw: PW_REGEX.test(pwState.pw)});

    // 비밀번호 확인
    if (pwCheckState.pwCheck) {
      setPwCheckState({...pwCheckState, isValidPwCheck: pwState.pw === pwCheckState.pwCheck});
    }
  }, [phoneNumberState.phoneNumberSplit, idState.userId, pwState.pw, pwCheckState.pwCheck]);

  // 회원가입
  const handleSignUp = async () => {
    const formData = {
      username: idState.userId,
      password: pwState.pw,
      password2: pwCheckState.pwCheck,
      phone_number: phoneNumberState.phoneNumber,
      name: userNameState.userName,
    }

    try {
      const response = await axios.post(url+`/accounts/signup/`, formData);
      console.log('회원가입 성공: ', response.data);
    } catch (error) {
      console.error('회원가입 실패: ', error)
    }
  }

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
          <label htmlFor='id'>아이디</label>
          <IdWrap>
            <SIdInput id='id' type="text" onChange={handleInputChange('userId')} onBlur={checkValidation('userId')} autoComplete='off' required/>
            <Button width='120px' height='54px' fontSize='16px' fontWeight='regular' margin='0 0 0 12px' onClick={handleCheckUserId} disabled={!idState.userId}>
              중복확인
            </Button>
          </IdWrap>
          {
            idState.userIdRequired && !idState.userId ? (
              <ErrorMsg>필수 정보입니다.</ErrorMsg>
            ) :
              !idState.isValidUserId && idState.userId ? (
                <ErrorMsg>20자 이내의 영문 대 소문자, 숫자만 사용 가능합니다.</ErrorMsg>
              ) :
              idState.userIdMsg.Success
                ? (<CorrectMsg>{idState.userIdMsg.Success}</CorrectMsg>)
                : (<ErrorMsg>{idState.userIdMsg.FAIL_Message}</ErrorMsg>)
          }
          <PwWrap isValidPw={pwState.isValidPw}>
            <label htmlFor='pw'>비밀번호</label>
            <SPwInput id='pw' type="password" onChange={handleInputChange('pw')} onBlur={checkValidation('pw')} autoComplete='new-password' required/>
          </PwWrap>
          {
            pwState.pwRequired && !pwState.pw ? (
              <ErrorMsg>필수 정보입니다.</ErrorMsg>
            ) :
              !pwState.isValidPw && pwState.pw && (
                <ErrorMsg>8자이상의 영문 대 소문자, 숫자, 특수문자만 사용 가능합니다.</ErrorMsg>
              )
          }
          <PwWrap isValidPw={pwCheckState.isValidPwCheck}>
            <label htmlFor='pwCheck'>비밀번호 재확인</label>
            <SPwInput id='pwCheck' type="password" onChange={handleInputChange('pwCheck')} onBlur={checkValidation('pwCheck')} autoComplete='new-password' required/>
          </PwWrap>
          {
            pwCheckState.pwCheckRequired && !pwCheckState.pwCheck ? (
              <ErrorMsg>필수 정보입니다.</ErrorMsg>
            ) :
              !pwCheckState.isValidPwCheck && pwCheckState.pwCheck && (
                <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>
              )
          }
          <label htmlFor='name'>이름</label>
          <SInput id='name' type="text" onChange={handleInputChange('userName')} autoComplete='off' onBlur={checkValidation('userName')} required/>
          {
            userNameState.userNameRequired && !userNameState.userName && (
              <ErrorMsg>필수 정보입니다.</ErrorMsg>
            )
          }

          <label htmlFor='phone'>휴대폰번호</label>
          <PhoneNumberWrap>
            <SSelect name="phone" id="start" onChange={onPhoneNumberHandler} onBlur={checkValidation('phoneNumber')} required>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </SSelect>
            <SPhoneInput id='mid' type='tel' autoComplete='off' onChange={onPhoneNumberHandler} onBlur={checkValidation('phoneNumber')} required/>
            <SPhoneInput id='end' type='tel'autoComplete='off' onChange={onPhoneNumberHandler} onBlur={checkValidation('phoneNumber')} required/>
          </PhoneNumberWrap>
          {
            !phoneNumberState.isValidPhoneNumber && phoneNumberState.phoneNumberSplit.mid && phoneNumberState.phoneNumberSplit.end && (
              <ErrorMsg>숫자만 입력 가능합니다.</ErrorMsg>
            )
          }
        </SForm>
      </FormContainer>
      <BottomWrap>
        <AgreeBox>
          <CheckInput type="checkbox" id="agree" checked={checked} onChange={handleCheckboxChange}/>
          <label htmlFor="agree">
            싸커마켓의 <u>이용약관</u> 및 <u>개인정보처리방침</u>에 대한 내용을 확인하였고 동의합니다.
          </label>
        </AgreeBox>
        <Button width='480px' height='60px' disabled={!checked} onClick={handleSignUp}>
          가입하기
        </Button> 
      </BottomWrap>
    </>
  )
}

export default SignUpPage

const SLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
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
  background-color: var(--light-gray);
  border: 1px solid var(--gray);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;

  &:first-child {
    background-color: white;
    border-bottom: none;
  }
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 35px;
  border: 1px solid var(--gray);
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: var(--light-font-color);
`;

const SInput = styled.input`
  height: 54px;
  padding: 16px;
  outline: none;
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 16px;
  margin: 10px 0 15px 0;

  &:focus {
    border: 2px solid var(--point-color);
  }
`;

const IdWrap = styled.div`
  width: 100%;
`;

const SIdInput = styled(SInput)`
  width: 346px;
`;

const SPwInput = styled(SInput)`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #313131;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const PwWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background: url(${checkBox}) center center / contain no-repeat;
    bottom: 27.5px;
    right: 15px;

    ${({ isValidPw }) =>
      isValidPw &&
      ` background-image: url(${fillCheckBox});`
      }
  }
`;

const PhoneNumberWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

const SSelect = styled.select`
  height: 54px;
  margin: 10px 0 15px 0;
  padding: 0 20px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border: 2px solid var(--point-color);
  }
`;

const SPhoneInput = styled(SInput)`
  width: 150px;
`;

const BottomWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
`;

const CorrectMsg = styled.div`
  color: var(--point-color);
  font-weight: 500;
  margin-bottom: 15px;
  padding-left: 3px;
`;

const ErrorMsg = styled(CorrectMsg)`
  color: var(--red);
`;

const AgreeBox = styled.div`
  width: 480px;
  display: flex;
  justify-content: center;
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