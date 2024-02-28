import React, { useEffect, useRef, useState } from 'react'
import CartIcon from '../../../assets/icon-shopping-cart.svg'
import CartIconColor from '../../../assets/icon-shopping-cart-color.svg'
import UserIcon from '../../../assets/icon-user.svg'
import UserIconColor from '../../../assets/icon-user-color.svg'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeCookie } from '../../../hooks/Cookies'
import { logout } from '../../../features/user/authActions'
import axios from '../../../api/axios'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'

const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogIn = useSelector(state => state.auth.isLogIn);
  const memberType = useSelector(state => state.auth.memberType);
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogOut = async () => {
    try {
      const response = await axios.post(`/accounts/logout/`);
      console.log(response);
      removeCookie('memberType');
      removeCookie('totalShippingFee');
      removeCookie('totalProductFee');
      removeCookie('token', { path: "/"});
      dispatch(logout());
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('로그아웃 오류: ', error.response.data);
    }
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  // 토글 박스 영역 밖 선택시 닫힘
  useEffect(() => {
    const outSideClick = (e) => {
      const { target } = e;

      if(isOpen && 
        dropDownRef.current && 
        !dropDownRef.current.contains(target)
      )
        setIsOpen(false);
    }

    document.addEventListener("mousedown", outSideClick);
  }, [isOpen])

  return (
    <CategoryWrap ref={dropDownRef}>
      { isLogIn ? (
        memberType === 'BUYER' ? (
          <>
            <SCategory 
              to="/cart"
            >
              <CategoryIcon 
                src={CartIcon} 
                alt='Cart'
              />
              <CategoryName>
                장바구니
              </CategoryName>
            </SCategory>
            <SCategoryBtn 
              onClick={toggleDropdown}
            >
              <CategoryUserIcon 
                src={UserIcon} 
                alt='Login' 
              />
              <CategoryName>
                마이페이지
              </CategoryName>
              { isOpen && (
                <DropdownBox>
                  <MenuItem 
                    to={"/mypage"}
                  >
                    마이페이지
                  </MenuItem>
                  <MenuItem 
                    onClick={openModal}
                  >
                    로그아웃
                  </MenuItem>
                </DropdownBox>
              )}
            </SCategoryBtn>
          </>
        ) : (
          <SellerBtnWrap>
            <SCategoryBtn 
              onClick={toggleDropdown}
            >
              <CategoryUserIcon 
                src={UserIcon} 
                alt='Login' 
              />
              <CategoryName>
                마이페이지
              </CategoryName>
              { isOpen && (
                <DropdownBox>
                  <MenuItem 
                    to={"/mypage"}
                  >
                    마이페이지
                  </MenuItem>
                  <MenuItem 
                    onClick={openModal}
                  >
                    로그아웃
                  </MenuItem>
                </DropdownBox>
              )}
            </SCategoryBtn>
            <Button 
              width='160px' 
              height='54px' 
              margin='0 0 0 30px' 
              onClick={() => navigate('/sellercenter')}
            >
              판매자 센터
            </Button>
          </SellerBtnWrap>
        )
      ) : (
        <SCategory 
          to="/login"
        >
          <CategoryUserIcon 
            src={UserIcon} 
            alt='Login' 
          />
          <CategoryName>
            로그인
          </CategoryName>
        </SCategory>
      )
      }
      {
        isModalOpen && 
          <Modal 
            closeModal={closeModal}
            onClick={handleLogOut}
          >
            정말로 로그아웃 하시겠습니까?
          </Modal>
      }
    </CategoryWrap>
  )
}

export default Category

const CategoryWrap = styled.nav`
  display: flex;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-right: 30px;
  }
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
  width: 80px;
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

const SellerBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;