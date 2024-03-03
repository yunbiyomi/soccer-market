import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Button from '../common/Button/Button'
import PlusIcon from '../../assets/icon-plus.svg'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom';

const DashBoardHeader = () => {
  const navigate = useNavigate();
  const [sellerName, setSellerName] = useState('');
  const [isLoad, setIsLoad] = useState(false);

  // 판매자 상품 가져오기
  const getSellerProduct = async () => {
    try {
      const response = await axios.get(`seller/`);
      setSellerName(response.data.results[0].store_name);
      setIsLoad(true);
    } catch (error) {
      console.error('판매자 상품 가져오기 실패: ', error);
    }
  }

  useEffect(()=> {
    getSellerProduct();
  }, [])

  return (
    <SDashBoardHeader>
      <TitleWrap>
        <STitle>
          대시보드
        </STitle>
        <StoreName>
        {isLoad && sellerName}
        </StoreName>
      </TitleWrap>
      <SButton
        onClick={() => navigate('/upload')}
      >
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

const SDashBoardHeader = styled.header`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 924px;
  }

  @media (max-width: 768px) {
    width: 708px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const STitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;

const StoreName = styled.p`
  margin-left: 16px;
  font-size: 36px;
  color: var(--point-color);
  font-weight: bold;
`;

const SPlusIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  margin-right: 7px;
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