import React from 'react'
import logo from '../assets/soccerMarketLogo.png'
import styled from 'styled-components'
import Button from '../components/common/Button/Button'

const SignUpPage = () => {
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
            <SIdInput id='id' type="text" />
            <Button width='120px' height='54px' fontSize='16px' fontWeight='regular' margin='0 0 0 12px'>
              중복확인
            </Button>
          </IdWrap>
          
          <label htmlFor='pw'>비밀번호</label>
          <SInput id='pw' type="password" />

          <label htmlFor='pwCheck'>비밀번호 재확인</label>
          <SInput id='pwCheck' type="password" />

          <label htmlFor='name'>이름</label>
          <SInput id='name' type="text" />

          <label htmlFor='phone'>휴대폰번호</label>
          <PhoneNumberWrap>
            <SSelect name="phone" id="phone-start">
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </SSelect>
            <SPhoneInput id='phone-mid' type='tel'/>
            <SPhoneInput id='phone-end' type='tel'/>
          </PhoneNumberWrap>
        </SForm>
      </FormContainer>
      <BottomWrap>
        <div>
          <input type="checkbox" id="agree"/>
          <label 
            htmlFor="agree"
            style={{marginLeft: '5px'}}
          >
            싸커마켓의 <u>이용약관</u> 및 <u>개인정보처리방침</u>에 대한 내용을 확인하였고 동의합니다.
          </label>
        </div>
        <Button width='480px' height='60px' disabled>
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
  margin: 10px 0 20px 0;

  &:focus {
    border: 2px solid var(--point-color);
  }
`;

const IdWrap = styled.div`
`;

const SIdInput = styled(SInput)`
  width: 346px;
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
  margin: 10px 0 20px 0;
  padding: 0 20px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 16px;
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