import React from 'react'
import styled from 'styled-components';
import InstagramIcon from '../../../assets/icon-insta.svg'
import FacebookIcon from '../../../assets/icon-fb.svg'
import YoutubeIcon from '../../../assets/icon-yt.svg'

const Footer = () => {
  return (
    <SFooter>
      <FooterWrap>
        <IconWrap>
          <Icon src={InstagramIcon} alt='instagram'/>
          <Icon src={FacebookIcon} alt='facebook'/>
          <Icon src={YoutubeIcon} alt='youtube'/>
        </IconWrap>
        <SLine />
        <FooterContent>
          <StoreName>(주)싸커마켓</StoreName>
          경기도 성남시 분당구 볼정로 6 싸커마켓<br/>
          사업자 번호 : 101-8956-4561 | 의류 판매업<br/>
          대표 : 송윤비
        </FooterContent>
      </FooterWrap>
    </SFooter>
  )
} 

export default Footer

const SFooter = styled.div`
  width: 100%;
  height: 300px;
  background-color: var(--light-gray);
`;

const FooterWrap = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const IconWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 60px;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 15px;
  cursor: pointer;
`;

const SLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 30px 0;
  background-color: var(--gray);
`;

const FooterContent = styled.div`
  width: 100%;
  font-size: 14px;
  color: var(--light-font);
  line-height: 1.7;
`;

const StoreName = styled.p`
  font-weight: bold;
`;