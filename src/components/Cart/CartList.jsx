import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import styled from 'styled-components';
import TotalFeeBox from './TotalFeeBox';
import CartProduct from './CartProduct';
import CartListBar from './CartListBar';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../common/Button/Button';
import { reset } from '../../features/price/totalPriceActions';
import { setCookie } from '../../hooks/Cookies';
import Modal from '../common/Modal/Modal';

const CartList = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const dispatch = useDispatch();
  const totalProductFee = useSelector(state => state.price.totalProductFee);
  const totalShippingFee = useSelector(state => state.price.totalShippingFee); 
  const [isAllCheck, setIsAllCheck] = useState(true);
  const [clickAllCheck, setClickAllCheck] = useState(true);
  const [isDelAllModalOpen, setIsDelAllModalOpen] = useState(false);

  const openDelAllModal = () => setIsDelAllModalOpen(true);
  const closeDelAllModal = () => setIsDelAllModalOpen(false);
  
  // 사용자의 장바구니에 있는 상품들 가져오기
  const getCartItem = async () => {
    try {
      const response = await axios.get(`cart/`);
      const products = response.data.results;
      setCartProducts(products);
    } catch (error) {
      console.error('장바구니 상품 목록 가져오기 실패', error.response.data);
    }
  }

  // 장바구니 상품 전체 삭제
  const deleteAllProduct = async () => {
    try {
      const response = await axios.delete(`cart/`);
      closeDelAllModal();
      dispatch(reset());
      // alert('장바구니의 모든 상품이 삭제되었습니다.');
      window.location.reload();
    } catch (error) {
      console.error('장바구니 상품 전체 삭제 실패', error.response.data);
    }
  }
  
  // 수정된 상품 정보 보내기
  const putProductInfo = async (product, isCheck) => {
    const formData = {
      product_id: product.product_id,
      quantity: product.quantity,
      is_active: isCheck
    };
  
    try {
      const response = await axios.put(`cart/${product.cart_item_id}/`, formData);
      // 상태를 업데이트하기 전에 API 요청이 완료될 때까지 기다립니다.
      await setCartProducts(prevProducts => prevProducts.map(prevProduct => {
        if (prevProduct.product_id === product.product_id) {
          return { ...prevProduct, is_active: isCheck };
        }
        return prevProduct;
      }));
    } catch (error) {
      console.error('장바구니 상품 수정하기 실패', error.response.data);
    }
  }

  useEffect(() => {
    const checkArr = cartProducts.map((product) => product.is_active);
    checkArr.includes(false) ? setIsAllCheck(false) : setIsAllCheck(true);
  }, [cartProducts])

  // 상품 전체 체크 박스
  const handleAllCheck = async () => {
    const newIsAllCheck = !isAllCheck;
    setIsAllCheck(newIsAllCheck);
    setClickAllCheck(newIsAllCheck);

    const updatedProducts = await Promise.all(cartProducts.map(async (product) => {
      const isCheck = newIsAllCheck;
      await putProductInfo(product, isCheck);
      return { ...product, is_active: isCheck };
    }));

    setCartProducts(updatedProducts);
  }

  useEffect(() => {
    getCartItem();
  }, [])

  useEffect(() => {
    setCookie('totalProductFee', `${totalProductFee}`);
    setCookie('totalShippingFee', `${totalShippingFee}`);
  }, [totalProductFee, totalShippingFee]);

  return (
    <CartListContainer>
      <CartListBar
        checked={isAllCheck}
        onChange={handleAllCheck}
      />
      <CartProductWrap>
        { cartProducts.length === 0
          ? <EmptyCart />
          : (cartProducts.map(product => (
            <React.Fragment key={product.product_id}>
              <CartProduct 
                cartProducts={cartProducts}
                product={product}
                putProductInfo={putProductInfo}
              />
              <AllDeleteBtn 
                onClick={openDelAllModal}
              >
                전체 삭제
              </AllDeleteBtn>
              {
                isDelAllModalOpen && 
                  <Modal 
                    closeModal={closeDelAllModal}
                    onClick={deleteAllProduct}
                  >
                    상품 전체를 삭제하시겠습니까?
                  </Modal>
              }
            </React.Fragment>
        )))
        }
      </CartProductWrap>
      {
        cartProducts.length === 0
        ? <></>
        : <>
            <TotalFeeBox />
            <Button
              width='220px' 
              height='68px' 
              margin='40px 0 0 0'
            >
              주문하기
            </Button>
          </>
      }
    </CartListContainer>
  )
}

export default CartList

const CartListContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const CartProductWrap = styled.ul`
  width: 100%;
  margin: 60px 0 70px 0;
`;

const AllDeleteBtn = styled.button`
  position: absolute;
  top: 72px;
  right: 0;
  width: 80px;
  height: 35px;
  background-color: transparent;
  border: 1px solid var(--point-color);
  border-radius: 5px;
  color: var(--point-color);

  &:hover {
    background-color: var(--point-color);
    color: white;
  }
`;