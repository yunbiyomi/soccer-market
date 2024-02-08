import React from 'react'
import styled from 'styled-components'
import Logo from '../../../components/common/Logo/Logo'
import SearchIcon from '../../../assets/icon-search.svg'
import Category from './Category'

const Header = () => {
  return (
    <MainContainer>
      <SHeader>
        <LeftWrap>
          <Logo width='160px' />
          <InputWrap> 
            <SSearchInput placeholder='상품을 검색해보세요!' />
            <SearchButton>
              <SSearchIcon src={SearchIcon} alt="Search" />
            </SearchButton>
          </InputWrap>
        </LeftWrap>
        <Category />
      </SHeader>
    </MainContainer>
  )
}

export default Header

const MainContainer = styled.header`
  width: 100%;
  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.05);
`;

const SHeader = styled.div`
  height: 100px;
  width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftWrap = styled.div`
  display: flex;
  align-items: center;
`;

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
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px; 
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const SSearchIcon = styled.img`
  width: 25px; 
  height: 25px;
  object-fit: cover;
`;

