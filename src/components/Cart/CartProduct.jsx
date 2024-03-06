import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import axios from '../../api/axios'
import Counter from '../common/Counter/Counter'
import DeleteIcon from '../../assets/icon-delete.svg'
import Button from '../common/Button/Button'
import CircleCheckBox from '../common/Input/CircleCheckBox'
import CartProductInfo from './CartProductInfo'
import useCommaFormat from '../../hooks/useCommaFormat'
import Modal from '../common/Modal/Modal'
import { setCookie } from '../../hooks/Cookies'
import { useNavigate } from 'react-router-dom'

const CartProduct = ({ product, putProductInfo, isAllCheck}) => {
  const productId = product.product_id;
  const [totalNum, setTotalNum] = useState(product.quantity);
  const [cartProduct, setCartProduct] = useState({});
  const totalFee = useCommaFormat(cartProduct.price * totalNum);
  const [load, setLoad] = useState(false);
  const [isCheck, setIsCheck] = useState(product.is_active);
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const navigate = useNavigate();

  const openDelModal = () => setIsDelModalOpen(true);
  const closeDelModal = () => setIsDelModalOpen(false);

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
      closeDelModal();
      window.location.reload();
    } catch (error) {
      console.error('장바구니 상품 삭제 실패', error.response.data);
    }
  }

  // 상품 단일 체크 박스
  const handleSingleCheck = async () => {
    setIsCheck(prevIsCheck => !prevIsCheck);
  };

  // 체크 상태 변경시 수정
  useEffect(() => {
    putProductInfo(product, product.quantity, isCheck);
  }, [isCheck])

  // 수량 변경시 수정
  useEffect(() => {
    putProductInfo(product, totalNum, isCheck);
  }, [totalNum])

  // 장바구니에서 한가지 상품만 주문하기
  const navigateOrderPage = () => {
    setCookie('orderKind', 'cart_one_order');
    setCookie('productId', product.product_id);
    setCookie('quantity', totalNum);
    navigate('/order');
  }

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <>
    {
      load
        ?(
          <CartProductContainer>
            <CheckBox>
              <CircleCheckBox 
                checked={product.is_active} 
                onChange={handleSingleCheck}
              />
            </CheckBox>
            <CartProductInfo 
              product={cartProduct} 
              isCheck={isCheck} 
              quantity={product.quantity}
              totalNum={totalNum}
              isAllCheck={isAllCheck}
            />
            <ProductTotalCount>
              <Counter 
                totalNum={totalNum} 
                setTotalNum={setTotalNum} 
                stoke={cartProduct.stock} 
              />
            </ProductTotalCount>
            <ProductTotalMoneyWrap>
              <ProductTotalMoney>{totalFee}원</ProductTotalMoney>
              <OrderBtn 
                onClick={navigateOrderPage}
                disabled={!isCheck}
                > 
                  주문하기
                </OrderBtn>
            </ProductTotalMoneyWrap>
            <ProductDeleteBtn
              onClick={openDelModal}
              aria-label="삭제 버튼"
            />
            {
              isDelModalOpen && 
                <Modal 
                  closeModal={closeDelModal}
                  onClick={deleteProduct}
                >
                  상품을 삭제하시겠습니까?
                </Modal>
            }
          </CartProductContainer>
        ) : (
          <Skeleton />
        )
    }
    </>
  )
}

export default CartProduct

const Skeleton = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  background: linear-gradient(to right, var(--light-gray), var(--disabled-gray));
  border-radius: 10px;
`;


const CartProductContainer = styled.li`
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: .25fr 3fr 1fr 1fr;
  margin-bottom: 10px;
  position: relative;
  border: 1px solid var(--gray);
  border-radius: 10px;

  @media (max-width: 768px) {
    grid-template-columns: .1fr 3fr 1fr 1.5fr;
  }
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

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const OrderBtn = styled(Button)`
  width: 130px;
  height: 40px;
  margin: 0;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 100px;
    height: 35px;
  }
`;