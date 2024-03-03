import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useCommaFormat from '../../hooks/useCommaFormat';
import Button from '../common/Button/Button';
import axios from '../../api/axios';
import Modal from '../common/Modal/Modal';

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);

  const openDelModal = () => setIsDelModalOpen(true);
  const closeDelModal = () => setIsDelModalOpen(false);
  
  // 상품 삭제하기
  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`products/${productId}`);
      closeDelModal();
      window.location.reload();
    } catch (error) {
      console.error('상품 삭제하기 실패: ', error);
    }
  }

  return (
    <ProductDetailWrap>
      <ProductInfoWrap>
        <ProductImg src={product.image}/>
        <ProdctInfoBox to={`/detail?id=${product.product_id}`}>
          <ProductName>{product.product_name}</ProductName>
          <ProductStoke>재고 : {product.stock}개</ProductStoke>
        </ProdctInfoBox>
      </ProductInfoWrap>
      <ProductContent className='price'>{useCommaFormat(product.price)}원</ProductContent>
      <ProductContent><SButton onClick={() => navigate(`/edit?id=${product.product_id}`)}>수정</SButton></ProductContent>
      <ProductContent><SButton className='delete' onClick={openDelModal}>삭제</SButton></ProductContent>
      {
        isDelModalOpen && 
          <Modal
            closeModal={closeDelModal}
            onClick={() => { deleteProduct(product.product_id); }}
          >
            {product.product_name}을 삭제하시겠습니까?
          </Modal>
      }
    </ProductDetailWrap>
  )
}

export default ProductDetail

const ProductDetailWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 3fr 1fr 1fr;
  background-color: white;
  border-bottom: 1px solid var(--gray);

  @media (max-width: 1024px) {
    grid-template-columns: 3fr 2fr 1fr 1fr;
  }
`;

const ProductInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  margin: 16px 30px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProdctInfoBox = styled(Link)`
  cursor: pointer;
`;

const ProductName = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductStoke = styled.p`
  font-size: 16px;
  color: var(--light-font);
`;

const ProductContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  &.price {
    font-weight: bold;
  }
`;

const SButton = styled(Button)`
  width: 80px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  margin: 0;

  &.delete {
    background-color: white;
    border: 1px solid var(--point-color);
    color: var(--point-color);

    &:hover {
      border: 1px solid var(--gray);
      color: var(--gray);
    }
  }

  @media (max-width: 768px) {
    width: 60px;
  }
`;
