import React, { useEffect, useState } from 'react'
import axios from '../../../api/axios'
import styled from 'styled-components'
import useCommaFormat from '../../../hooks/useCommaFormat'
import Counter from '../../common/Counter/Counter'
import Button from '../../common/Button/Button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductDeliverWay from '../ProductDeliverWay'
import Modal from '../../common/Modal/Modal'
import { getCookie, setCookie } from '../../../hooks/Cookies'
import OrderModal from '../../common/Modal/OrderModal'

const ProductDetail = ({ product, isOrderModalOpen, closeOrderModal }) => {
  const memberType = getCookie('memberType');
  const stoke = product.stock;
  const productPrice = useCommaFormat(product.price);
  const [totalNum, setTotalNum] = useState(1);
  const totalFee = useCommaFormat(product.price * totalNum);
  const [existProduct, setExistProduct] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const isLogIn = useSelector(state => state.auth.isLogIn);
  const navigate = useNavigate();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isExistModalOpen, setIsExistModalOpen] = useState(false);

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const openExistModal = () => setIsExistModalOpen(true);
  const closeExistModal = () => setIsExistModalOpen(false);

  // 바로 구매 버튼 누를시
  const handleImmediatelyBuy = () => {
    if(isLogIn) {
      setCookie('orderKind', 'direct_order');
      setCookie('quantity', totalNum);
      setCookie('productId', product.product_id);
      navigate('/order');
    }
    else
      openLoginModal();
  }

  // 로그인 안되어있을 때 로그인으로 이동
  const handleLogin = () => {
    closeLoginModal();
    navigate('/login');
  };
  
  // 이미 존재하는 상품일 때 장바구니로 이동
  const handleCart = () => {
    closeExistModal();
    navigate('/cart');
  }

  // 장바구니에 해당 상품이 있는지 판별 
  const judgeExistProduct = async () => {
    try {
      const response = await axios.get(`cart/`);
      const cartItems = response.data.results;
      setCartItems(cartItems);
      const foundItem = cartItems.find(item => item.product_id === product.product_id);
      setExistProduct(foundItem !== undefined);
    } catch (error) {
      console.error('장바구니 상품 중복 여부 판단 실패', error.response.data);
    }
  }

  // 장바구니 버튼 누를시 상품이 장바구니에 담기는 과정
  const handleProductCart = async () => {
    if(!existProduct) {
      const formData = {
        product_id: product.product_id,
        quantity: totalNum,
        check: true,
      }
      try {
        const response = await axios.post(`cart/`, formData);
        navigate('/cart');
      } catch (error) {
        console.error('상품 장바구니 담기 실패', error.response.data);
      }
    }
    else {
      closeCartModal();
      openExistModal();
    }
  }

  // memberType이 SELLER인 경우 버튼들 disabled
  const handleDisabled = () => {
    if (memberType === 'SELLER') 
      return true;
    
    return false; 
  };

  useEffect(() => {
    if(memberType === 'BUYER')
      judgeExistProduct();
  }, []);
  
  return (
    <ProductInfoWrap>
      <ProductImg 
        src={product.image} 
        alt={product.product_name}
      />
      <ProductRightContainer>
        <ProductStoreName>
          {product.store_name}
        </ProductStoreName>
        <ProductName>
          {product.product_name}
        </ProductName>
        <ProductFee>
          {productPrice} 원
        </ProductFee>
        <SmallDeliverWay>
          <ProductDeliverWay shippingMethod={product.shipping_method} shippingFee={product.shipping_fee} textAlign='end' />
        </SmallDeliverWay>
        <CountWrap>
          <ProductDeliverWay shippingMethod={product.shipping_method} shippingFee={product.shipping_fee} textAlign='end' />
          <SLine />
          {
            stoke
              ? <Counter totalNum={totalNum} setTotalNum={setTotalNum} stoke={stoke}/>
              : <NoStokeMsg>현재 재고가 없습니다</NoStokeMsg>
          }
          <SLine />
        </CountWrap>
        <TotalWrap>
          <TotalContent>
            총 상품 금액
          </TotalContent>
          <TotalCountWrap>
            <TotalContent>
              총 수량 <TotalNumText>{totalNum}</TotalNumText>개
            </TotalContent>
            <TotalSideBar />
            <ProductFee isTotal>
              {totalFee} 원
            </ProductFee>
          </TotalCountWrap>
        </TotalWrap>
        <BtnWrap>
          <SBtn width='416px' onClick={handleImmediatelyBuy} disabled={!stoke || handleDisabled()}>
            바로 구매
          </SBtn>
          <SBtn width='200px' onClick={openCartModal} disabled={!isLogIn || !stoke || handleDisabled()}>
            장바구니
          </SBtn>
        </BtnWrap>
      </ProductRightContainer>
      {
        isCartModalOpen && 
          <Modal 
            closeModal={closeCartModal}
            onClick={handleProductCart}
          >
            장바구니에 상품을 담았습니다.<br/>
            장바구니로 이동하시겠습니까?
          </Modal>
      }
      { 
        isLoginModalOpen && 
          <Modal
            closeModal={closeLoginModal}
            onClick={handleLogin}
          >
            로그인이 필요한 서비스입니다.
            <br />
            로그인 하시겠습니까?
          </Modal>
      }
      { 
        isExistModalOpen && 
          <Modal
            closeModal={closeExistModal}
            onClick={handleCart}
          >
            이미 장바구니에 있는 상품입니다.
            <br />
            장바구니로 이동하시겠습니까?
          </Modal>
      }
      {
        isOrderModalOpen && 
        <OrderModal 
          totalNum={totalNum} 
          setTotalNum={setTotalNum} 
          stoke={stoke}
          totalFee={totalFee}
          isLogIn={isLogIn}
          handleImmediatelyBuy={handleImmediatelyBuy} 
          handleDisabled={handleDisabled()}
          openCartModal={openCartModal}
          closeOrderModal={closeOrderModal}
        />
      }
    </ProductInfoWrap>
  )
}

export default ProductDetail

const ProductInfoWrap = styled.div`
  width: 1280px;
  margin: 80px 0 180px 0;
  display: flex;

  @media (max-width: 1024px) {
    width: 1024px;
    flex-direction: column;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 768px;
  }

  @media (max-width: 480px) {
    width: 480px;
  }
`;

const ProductImg = styled.img`
  width: 600px;
  height: 600px;
  margin-right: 50px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 1024px;
    height: 1024px;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 768px;
    height: 768px;
  }

  @media (max-width: 480px) {
    width: 480px;
    height: 480px;
  }
`;

const ProductRightContainer = styled.div`
  @media (max-width: 1024px) {
    margin: 30px 0 50px 30px;
  }
`;

const ProductStoreName = styled.p`
  font-size: 18px;
  color: var(--light-font);
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    font-size: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ProductName = styled.p`
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const ProductFee = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: ${({ isTotal }) => (isTotal ? '0' : '100px')};
  color: ${({ isTotal }) => (isTotal ? 'var(--point-color)' : 'black')};

  @media (max-width: 1024px) {
    font-size: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const SmallDeliverWay = styled.div`
  display: none;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

const CountWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SLine = styled.div`
  width: 630px;
  height: 2px;
  background-color: var(--gray);
  margin: 10px 0;

  @media (max-width: 1024px) {
    width: 1024px;
  }

  @media (max-width: 768px) {
    width: 768px;
  }

  @media (max-width: 480px) {
    width: 480px;
  }
`;

const NoStokeMsg = styled.p`
  margin: 40px 0;
  font-size: 25px;
  text-align: center;
  color: var(--gray);
`;

const TotalWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const TotalContent = styled.p`
  font-size: 18px;
`;

const TotalNumText = styled.span`
  color: var(--point-color);
  font-weight: bold;
`;

const TotalCountWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TotalSideBar = styled.div`
  width: 1.5px;
  height: 20px;
  background-color: var(--gray);
  margin: 0 15px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SBtn = styled(Button)`
  width: ${props => props.width || '100%'}; 
  height: 60px;
  margin: 0;
`;