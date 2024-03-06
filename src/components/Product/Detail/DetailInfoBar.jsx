import React from 'react'
import styled from 'styled-components'

const DetailInfoBar = ({ content }) => {
  const [title, ...details] = content.split('<br />').filter(line => line.trim() !== '');

  return (
    <DetailInfoWrap>
      <InfoBarWrap>
        <InfoWrap>
          <Infocontent active>상세보기</Infocontent>
          <InfoBar active/>
        </InfoWrap>
        <InfoWrap>
          <Infocontent>리뷰</Infocontent>
          <InfoBar />
        </InfoWrap>
        <InfoWrap>
          <Infocontent>Q&A</Infocontent>
          <InfoBar />
        </InfoWrap>
        <InfoWrap>
          <Infocontent>반품/교환정보</Infocontent>
          <InfoBar />
        </InfoWrap>
      </InfoBarWrap>
      <DetailContentWrap>
        <DetailTitle>{title}</DetailTitle>
        {details.map((detail, index) => (
          <DetailItem key={index}>{detail}</DetailItem>
        ))}
      </DetailContentWrap>
    </DetailInfoWrap>
  )
}

export default DetailInfoBar

const DetailInfoWrap = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 1024px;
  }

  @media (max-width: 768px) {
    width: 768px;
  }
`;

const InfoBarWrap = styled.div`
  display: flex;
`;

const InfoWrap = styled.div`
  cursor: pointer;
`;

const Infocontent = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ active }) => active ? 'var(--point-color)' : 'var(--dark-gray)'};
  text-align: center;
`;

const InfoBar = styled.div`
  width: 320px;
  height: 4px;
  background-color: ${({ active }) => active ? 'var(--point-color)' : 'var(--gray)'};

  @media (max-width: 1024px) {
    width: 256px;
  }
  
  @media (max-width: 768px) {
    width: 192px;
  }
`;

const DetailContentWrap = styled.div`
  margin: 100px 0 200px 0;
`;

const DetailTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const DetailItem = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;