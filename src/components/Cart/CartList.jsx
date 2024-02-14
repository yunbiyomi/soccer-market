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
      const productsWithSelection = response.data.results.map(product => ({
        ...product,
        isSelected: false,
      }));
      setCartProducts(productsWithSelection);
    } catch (error) {
      console.error('장바구니 상품 목록 가져오기 실패', error.response.data);
    }
  }

  useEffect(() => {
    getCartItem();
  }, []);

  const toggleProductSelection = (productId) => {
    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.product_id === productId ? { ...product, isSelected: !product.isSelected } : product
      )
    );
  }

  const handleSelectAll = () => {
    const allSelected = cartProducts.every(product => product.isSelected);
    setCartProducts(prevProducts =>
      prevProducts.map(product => ({ ...product, isSelected: !allSelected }))
    );
  }

  return (
    <CartListContainer>
      <CartListBar onSelectAll={handleSelectAll} />
      <CartProductWrap>
        { cartProducts.length === 0
          ? <EmptyCart />
          : (cartProducts.map(product => (
            <CartProduct key={product.product_id} product={product} ichecked={cartProducts.every(product => product.isSelected)} onSelectItem={handleSelectAll} toggleProductSelection={toggleProductSelection}/>
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
