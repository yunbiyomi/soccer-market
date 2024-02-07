import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import useQueryString from '../hooks/useQueryString';
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import ProductDetail from '../components/Product/ProductDetail';

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const productId = useQueryString();
  const [load, setLoad] = useState(false);

  const getProduct = async () => {
    try {
      const response = await axios.get(`/products/${productId}`);
      console.log(response.data);
      setProduct(response.data);
      setLoad(true);
    } catch (error) {
      console.error('상품 디테일 정보 가져오기 실패', error.response.data);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Header />
      {
        load
          ? <ProductDetail product={product} />
          : <p>로딩중</p>
      }
      <Footer />
    </>
  )
}

export default ProductDetailPage