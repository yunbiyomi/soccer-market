import React from 'react'
import styled from 'styled-components';
import Button from '../common/Button/Button'
import PlusIcon from '../../assets/icon-plus.svg'

const DashBoardHeader = () => {
  return (
    <SDashBoardHeader>
      <TitleWrap>
        <STitle>
          대시보드
        </STitle>
        <StoreName>
          Tottenham
        </StoreName>
      </TitleWrap>
      <SButton>
        <SPlusIcon 
          src={PlusIcon}
          alt='Plus Icon'
        />
        상품업로드 
      </SButton>
    </SDashBoardHeader>
  )
}

export default DashBoardHeader

const SDashBoardHeader = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const STitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
`;

const StoreName = styled.p`
  margin-left: 16px;
  font-size: 36px;
  color: var(--point-color);
`;

const SPlusIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  margin-right: 10 px;
`;

const SButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 54px;
  font-weight: 500;
  margin: 0;

  &:hover {
    background-color: var(--disabled-gray);
    border: none;
    color: white;
  }
`;