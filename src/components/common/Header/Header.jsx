import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../../components/common/Logo/Logo'
import SearchIcon from '../../../assets/icon-search.svg'
import CartIcon from '../../../assets/icon-shopping-cart.svg'
import CartIconColor from '../../../assets/icon-shopping-cart-color.svg'
import UserIcon from '../../../assets/icon-user.svg'
import UserIconColor from '../../../assets/icon-user-color.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeCookie } from '../../../hooks/Cookies'
import { logout } from '../../../store/authActions'

const Header = () => {
  const dispatch = useDispatch();
  const isLogIn = useSelector(state => state.auth.isLogIn);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    dispatch(logout());
    removeCookie('token', { path: "/"});
    alert('로그아웃됩니다.');
    window.location.reload();
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

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
              <SCategoryBtn onClick={toggleDropdown}>
                <CategoryUserIcon src={UserIcon} alt='Login' />
                <CategoryName>마이페이지</CategoryName>
                { isOpen && (
                  <DropdownBox>
                    <MenuItem to={"/mypage"}>마이페이지</MenuItem>
                    <MenuItem onClick={handleLogOut}>로그아웃</MenuItem>
                  </DropdownBox>
                )}
              </SCategoryBtn>
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
  position: relative;
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
  background-color: white;

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

const SCategoryBtn = styled.button`
  margin-left: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;

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

const DropdownBox = styled.div`
  position: absolute;
  width: 120px;
  display: flex;
  flex-direction: column;
  top: 95px;
  border-radius: 10px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, .1),
              1px 0 0 0 rgba(0, 0, 0, .1),
              0 -1px 0 0 rgba(0, 0, 0, .1),
              -1px 0 0 0 rgba(0, 0, 0, .1);
  background-color: white;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: -10px;
    left: 50px;
    background-color: white;
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, .1),
                -1px 0 0 0 rgba(0, 0, 0, .1);
    transform: rotate(45deg);
  }
`;

const MenuItem = styled(Link)`
  margin: 10px 11px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #636363;
  background-color: white;
  cursor: pointer;
  z-index: 999;

  &:hover {
    background-color: var(--point-color);
    color: white;
    border-radius: 5px;
  }

  &:first-child {
    margin-bottom: 0;
  }
`;