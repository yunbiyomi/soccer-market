import React from 'react'
import styled from 'styled-components';
import SearchIcon from '../../../assets/icon-search.svg'

const InputBox = () => {
  return (
    <InputWrap> 
      <SSearchInput placeholder='상품을 검색해보세요!' />
      <SearchButton>
        <SSearchIcon src={SearchIcon} alt="Search" />
      </SearchButton>
    </InputWrap>
  )
}

export default InputBox

const InputWrap = styled.div`
  position: relative;
  display: inline-block;  
`;

const SSearchInput = styled.input`
  width: 400px;
  height: 45px;
  margin-left: 35px;
  padding: 0 20px;
  border-radius: 30px;
  border: 2.6px solid var(--point-color);
  font-size: 15px;

  @media (max-width: 1024px) {
    width: 984px;
    height: 55px;
    margin: 30px 20px 0 20px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 728px;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px; 
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    top: 58px;
    right: 30px;
  }
`;

const SSearchIcon = styled.img`
  width: 25px; 
  height: 25px;
  object-fit: cover;
`;
