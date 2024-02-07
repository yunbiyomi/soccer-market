import React from 'react'
import styled from 'styled-components'

const DetailInfoBar = () => {
  return (
    <DetailInfoWrap>
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
    </DetailInfoWrap>
  )
}

export default DetailInfoBar

const DetailInfoWrap = styled.div`
  display: flex;
`;

const InfoWrap = styled.div`
  margin-bottom: 360px;
  cursor: pointer;
`;

const Infocontent = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ active }) => active ? 'var(--point-color)' : 'var(--gray)'};
  text-align: center;
`;

const InfoBar = styled.div`
  width: 320px;
  height: 4px;
  background-color: ${({ active }) => active ? 'var(--point-color)' : 'var(--gray)'};
`;