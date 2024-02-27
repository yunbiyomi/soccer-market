import React from 'react'
import styled from 'styled-components';
import ErrorImg from '../assets/icon-404.svg';
import Button from '../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <ContentWrap>
        <SErrorImg 
          src={ErrorImg} 
          alt='Error Image'
        />
        <SContent>
          <STitle>페이지를 찾을 수 없습니다.</STitle>
          <SExplanation>
            페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.
            <br />
            웹 주소가 올바른지 확인해 주세요.
          </SExplanation>
          <ButtonWrap>
            <Button
              width='200px'
              height='60px'
              margin='0'
              onClick={() => navigate('/')}
            >메인으로</Button>
            <Button
              width='200px'
              height='60px'
              margin='0'
              bgColor='white'
              color='gray'
              border='1px solid var(--gray)'
              onClick={() => navigate(-1)}
            >이전 페이지</Button>
          </ButtonWrap>
        </SContent>
      </ContentWrap>
    </NotFoundContainer>
  )
}

export default NotFoundPage

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SErrorImg = styled.img`
  width: 276px;
  height: 236px;
  object-fit: cover;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const SContent = styled.div`
  width: 414px;
  margin-left: 50px;
`;

const STitle = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

const SExplanation = styled.p`
  margin: 20px 0 40px 0;
  color: var(--light-font);
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;