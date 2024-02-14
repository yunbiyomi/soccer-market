import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import styled from 'styled-components';
import TotalFeeBox from '../Product/Detail/TotalFeeBox';
import CartProduct from './CartProduct';
import CartListBar from './CartListBar';
import EmptyCart from './EmptyCart';

const CartList = () => {
  const [cartProducts, setCartProducts] = useState([]);

  // 사용자의 장바구니에 있는 상품들 가져오기
  const getCartItem = async () => {
    try {
      const response = await axios.get(`cart/`);
      setCartProducts(response.data.results);
    } catch (error) {
      console.error('장바구니 상품 목록 가져오기 실패', error.response.data);
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
            <CartProduct key={product.product_id} product={product} />
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
`;

const CartProductWrap = styled.ul`
  width: 100%;
  margin: 35px 0 70px 0;
`;
