import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import useQueryString from '../../hooks/useQueryString'
import axios from '../../api/axios'
import Modal from '../common/Modal/Modal';
import EditSkeleton from '../common/Loader/EditSkeleton';

const EditProductEditor = () => {
  const productId = useQueryString();
  const [product, setProduct] = useState({});

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();

  const parcelChange = () => setProduct({...product, shipping_method: 'PARCEL'});
  const deliveryChange = () => setProduct({...product, shipping_method: 'DELIVERY'});
  const openUploadModal = () => setIsUploadModalOpen(true);
  const closeUploadModal = () => setIsUploadModalOpen(false);

  // 현재 페이지에 알맞는 상품 정보 가져오기
  const getProduct = async () => {
    try {
      const response = await axios.get(`/products/${productId}`);
      setProduct(response.data);
      setIsLoad(true);
    } catch (error) {
      console.error('상품 수정하기 디테일 가져오기 실패', error.response.data);
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  useEffect(() => {
    console.log(product);
  }, [product])

  const handleInputChange = (id) => (e) => {
    const value = e.currentTarget.value;
    switch(id) {
      case 'product_name':
        setProduct({...product, product_name: value});
        break;
      case 'price':
        setProduct({...product, price: value});
        break;
      case 'shipping_fee':
        setProduct({...product, shipping_fee: value});
        break;
      case 'stock':
        setProduct({...product, stock: value});
        break;
      case 'product_info':
        setProduct({...product, product_info: value});
        break;
      default:
        break;
    }
  }

  // 상품 수정하기
  const postOrder = async () => {
    try {
      const formData = {
        product_name: product.product_name,
        price: product.price,
        shipping_method: product.shipping_method, 
        shipping_fee: product.shippingFee,
        stock: product.stock,
        product_info: product.product_info
      };
      const response = await axios.put(`products/${productId}/`, formData);
      console.log(response);
      navigate('/sellercenter');
    } catch (error) {
      console.error('상품 등록 실패: ', error);
    }
  };

  return (
    <>
      {
        isLoad ? (
          <EditorContainer>
            <ProductInfoWrap>
              <ProductInfoLeftBox>
                <InfoTitle>상품 이미지</InfoTitle>
                <ProductImgBox htmlFor='product-image'>
                  <PreviewImage src={product.image} alt='Uploaded Product' />
                </ProductImgBox>  
              </ProductInfoLeftBox>
              <ProductInfoRightBox>
                <InfoTitle htmlFor='product-name'>상품명</InfoTitle>
                <ProductNameInput id='product-name' type='text' value={product.product_name} onChange={handleInputChange('product_name')} required/>
                <InfoTitle htmlFor='product-price'>판매가</InfoTitle>
                <SInputWrap>
                  <SInput id='product-price' type='text' value={product.price} onChange={handleInputChange('price')} required />
                  <SUnitBox>원</SUnitBox>
                </SInputWrap>
                <InfoTitle>배송방법</InfoTitle>
                <BtnWrap>
                  <SButton onClick={parcelChange}>택배, 소포, 등기</SButton>
                  <SButton onClick={deliveryChange}>직접배송(화물배달)</SButton>
                </BtnWrap>
                <InfoTitle htmlFor='product-shipping-fee'>기본 배송비</InfoTitle>
                <SInputWrap>
                  <SInput id='product-shipping-fee' type='text' value={product.shipping_fee} onChange={handleInputChange('shipping_fee')} required />
                  <SUnitBox>원</SUnitBox>
                </SInputWrap>
                <InfoTitle htmlFor='product-stoke'>재고</InfoTitle>
                <SInputWrap>
                  <SInput id='product-stoke' type='text' value={product.stock} onChange={handleInputChange('stock')} required />
                  <SUnitBox>개</SUnitBox>
                </SInputWrap>
              </ProductInfoRightBox>
            </ProductInfoWrap>
            <EditorBox>
              <InfoTitle htmlFor='product-detail'>상품 상세 정보</InfoTitle>
              <DetailInput id='product-detail' type='text' value={product.product_info} onChange={handleInputChange('product_info')} required/>
            </EditorBox>
            <BtnWrap className='bottom'>
              <SButton className='white' onClick={() => navigate('/sellercenter')}>취소</SButton>
              <SButton onClick={openUploadModal}>수정하기</SButton>
            </BtnWrap>
            {
              isUploadModalOpen && 
              <Modal 
                closeModal={closeUploadModal}
                onClick={postOrder}
              >
                상품을 수정 하시겠습니까?
              </Modal>
            }
          </EditorContainer>
        ) : <EditSkeleton />
      }
    </>
  )
}

export default EditProductEditor

const EditorContainer = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 1024px;
  }

  @media (max-width: 768px) {
    width: 768px;
  }
`;

const ProductInfoWrap = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    margin-left: 30px;
    flex-direction: column;
  }
`;

const ProductInfoLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  @media (max-width: 1024px) {
    margin-top: 30px;
    flex-direction: column;
  }
`;

const InfoTitle = styled.label`
  margin-bottom: 10px;
  color: var(--light-font);

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const ProductImgBox = styled.label`
  width: 430px;
  height: 430px;
  position: relative;
  background-color: var(--gray);
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 768px) {
    width: 708px;
    height: 708px;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductInfoRightBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin-top: 30px;
  }
`;

const ProductNameInput = styled.input`
  width: 530px;
  height: 50px;
  margin-bottom: 16px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

const SInputWrap = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  margin-bottom: 16px;
`;

const SInput = styled(ProductNameInput)`
  width: 150px;
  border-radius: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const SUnitBox = styled.div`
  width: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: var(--gray);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const BtnWrap = styled.div`
  display: flex;

  &.bottom {
    justify-content: end;
    margin: 30px 0 100px 0;

    @media (max-width: 1024px) {
    margin-right: 20px;
  }
  }
`;

const SButton = styled(Button)`
  width: 200px;
  height: 50px;
  margin: 0 10px 16px 0;
  font-size: 16px;
  font-weight: 400;

  &.white {
    width: 150px;
    background-color: white;
    color: var(--gray);
    border: 1px solid var(--gray);

    &:hover {
      color: var(--point-color);
      border: 1px solid var(--point-color)
    }
  }
`;

const EditorBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }
`;

const DetailInput = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 20px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  resize: none;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;