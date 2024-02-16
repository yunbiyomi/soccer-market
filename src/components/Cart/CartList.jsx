import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import styled from 'styled-components';
import TotalFeeBox from '../Product/Detail/TotalFeeBox';
import CartProduct from './CartProduct';
import CartListBar from './CartListBar';
import EmptyCart from './EmptyCart';
import { useDispatch } from 'react-redux';
import { reset } from '../../features/price/totalPriceActions';

const CartList = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const dispatch = useDispatch();
  
  // 사용자의 장바구니에 있는 상품들 가져오기
  const getCartItem = async () => {
    try {
      const response = await axios.get(`cart/`);
      setCartProducts(response.data.results);
    } catch (error) {
      console.error('장바구니 상품 목록 가져오기 실패', error.response.data);
    }
  }

  // 장바구니 상품 전체 삭제
  const deleteAllProduct = async () => {
    try {
      const response = await axios.delete(`cart/`);
      dispatch(reset());
      alert('장바구니의 모든 상품이 삭제되었습니다.');
      window.location.reload();
    } catch (error) {
      console.error('장바구니 상품 전체 삭제 실패', error.response.data);
    }
  }

  useEffect(() => {
    getCartItem();
  }, []);

  return (
    <CartListContainer>
      <CartListBar />
      <CartProductWrap>
        { cartProducts.length === 0
          ? <EmptyCart />
          : (cartProducts.map(product => (
            <>
              <CartProduct key={product.product_id} product={product} />
              <AllDeleteBtn onClick={deleteAllProduct}>전체 삭제</AllDeleteBtn>
            </>
        )))
        }
      </CartProductWrap>
      <TotalFeeBox />
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