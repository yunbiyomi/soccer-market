import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import styled from 'styled-components'
import Button from '../components/common/Button/Button'
import CartProduct from '../components/Cart/CartProduct'
import CartListBar from '../components/Cart/CartListBar'
import { useSelector } from 'react-redux'
import TotalFeeBox from '../components/Product/Detail/TotalFeeBox'
import TopButton from '../components/common/Button/TopButton'

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const totalProductFee = useSelector(state => state.price.totalProductFee);
  const totalShippingFee = useSelector(state => state.price.totalShippingFee);

  // 사용자의 장바구니에 있는 상품들 가져오기
  const getCartItem = async () => {
    try {
      const response = await axios.get(`cart/`);
      console.log(response.data);
      setCartProducts(response.data.results);
    } catch (error) {
      console.error('장바구니 상품 목록 가져오기 실패', error.response.data);
    }
  }

  useEffect(() => {
    getCartItem();
  }, []);

  return (
    <>
      <Header />
      <CartContainer>
        <CartTitle>장바구니</CartTitle>
        <CartListContainer>
          <CartListBar />
          <CartProductWrap>
            {cartProducts.map(product => (
              <CartProduct key={product.product_id} product={product} />
            ))}
            {console.log('totalProductFee', totalProductFee)}
            {console.log('totalShippingFee', totalShippingFee)}
          </CartProductWrap>
          <TotalFeeBox />
        </CartListContainer>
        <Button width='220px' height='68px' margin='40px 0 160px 0'>주문하기</Button>
      </CartContainer>
      <Footer />
      <TopButton />
    </>
  )
}

export default CartPage

const CartContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CartTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 50px 0;
`;

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
