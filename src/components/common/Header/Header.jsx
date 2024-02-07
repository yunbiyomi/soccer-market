import React from 'react'
import styled from 'styled-components'
import Logo from '../../../components/common/Logo/Logo'
import SearchIcon from '../../../assets/icon-search.svg'
import CartIcon from '../../../assets/icon-shopping-cart.svg'
import CartIconColor from '../../../assets/icon-shopping-cart-color.svg'
import UserIcon from '../../../assets/icon-user.svg'
import UserIconColor from '../../../assets/icon-user-color.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const isLogIn = useSelector(state => state.auth.isLogIn);

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
        <CategoryWrap>
          {
            isLogIn && (
              <SCategory to="/cart">
                <CategoryIcon src={CartIcon} alt='Cart' />
                <CategoryName>장바구니</CategoryName>
              </SCategory>
            )
          }
          {
            isLogIn ? (
              <SCategory to="/login">
                <CategoryUserIcon src={UserIcon} alt='Login' />
                <CategoryName>마이페이지</CategoryName>
              </SCategory>
            ) : (
              <SCategory to="/login">
                <CategoryUserIcon src={UserIcon} alt='Login' />
                <CategoryName>로그인</CategoryName>
              </SCategory>
            )
          }
        </CategoryWrap>
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

const CategoryWrap = styled.nav`
  display: flex;
  cursor: pointer;
`;

const CategoryIcon = styled.img`
  width: 33px;
  height: 33px;
  margin-bottom: 5px;
`;

const CategoryUserIcon = styled(CategoryIcon)`
`;

const CategoryName = styled.p`
  color: var(--light-font);
  font-size: 14px;
`; 

const SCategory = styled(Link)`
  margin-left: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    ${CategoryIcon} {
      content: url(${CartIconColor});
    }
    ${CategoryUserIcon} {
      content: url(${UserIconColor});
    }
    ${CategoryName} {
      color: var(--point-color);
    }
  }
`; 