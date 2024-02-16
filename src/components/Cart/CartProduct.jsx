import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../../api/axios'
import Counter from '../common/Counter/Counter'
import DeleteIcon from '../../assets/icon-delete.svg'
import Button from '../common/Button/Button'
import CircleCheckBox from '../common/Input/CircleCheckBox'
import CartProductInfo from './CartProductInfo'
import useCommaFormat from '../../hooks/useCommaFormat'
import { useDispatch, useSelector } from 'react-redux'
import { minus } from '../../features/price/totalPriceActions'
import { setCookie } from '../../hooks/Cookies'

const CartProduct = ({ product }) => {
  const productId = product.product_id;
  const [totalNum, setTotalNum] = useState(product.quantity);
  const [cartProduct, setCartProduct] = useState([]);
  const totalFee = useCommaFormat(cartProduct.price * totalNum);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const currentFee = cartProduct.price * totalNum;
  const totalProductFee = useSelector(state => state.price.totalProductFee);
  const totalShippingFee = useSelector(state => state.price.totalShippingFee);

  // 상품 상세 정보 가져오기
  const getCartProducts = async () => {
    try {
      const response = await axios.get(`products/${productId}`);
      setCartProduct(response.data);
      setLoad(true);
    } catch (error) {
      console.error('장바구니 상품 상세 정보 가져오기 실패', error.response.data);
    }
  }

  // 장바구니 상품 삭제
  const deleteProduct = async () => {
    try {
      const response = await axios.delete(`cart/${product.cart_item_id}`);
      dispatch(minus(currentFee, cartProduct.shipping_fee));
      alert('상품이 삭제되었습니다.');
      window.location.reload();
    } catch (error) {
      console.error('장바구니 상품 삭제 실패', error.response.data);
    }
  }

  useEffect(() => {
    setCookie('totalProductFee', `${totalProductFee}`);
    setCookie('totalShippingFee', `${totalShippingFee}`);
  }, [totalProductFee, totalShippingFee]);


  useEffect(() => {
    getCartProducts();
  }, [])

  return (
    <>
    {
      load
        ?(
          <CartProductContainer>
            <CheckBox>
              <CircleCheckBox />
            </CheckBox>
            <CartProductInfo product={cartProduct} />
            <ProductTotalCount>
              <Counter totalNum={totalNum} setTotalNum={setTotalNum} stoke={cartProduct.stock} />
            </ProductTotalCount>
            <ProductTotalMoneyWrap>
              <ProductTotalMoney>{totalFee}원</ProductTotalMoney>
              <Button width='130px' height='40px' margin='0' fontSize='16px' fontWeight='medium'>주문하기</Button>
            </ProductTotalMoneyWrap>
            <ProductDeleteBtn onClick={deleteProduct} />
          </CartProductContainer>
        ) : <p>로딩중</p>
    }
    </>
  )
}

export default CartProduct

const CartProductContainer = styled.li`
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: .25fr 3fr 1fr 1fr;
  margin-bottom: 10px;
  position: relative;
  border: 1px solid var(--gray);
  border-radius: 10px;
`;

const ProductDeleteBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 22px;
  height: 22px;
  background-image: url(${DeleteIcon});
  background-color: transparent;
`;

const CheckBox= styled.div`
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductTotalCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductTotalMoneyWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductTotalMoney = styled.p`
  margin-bottom: 26px;
  font-size: 18px;
  font-weight: bold;
  color: var(--green);
`;