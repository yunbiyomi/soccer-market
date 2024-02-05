import styled from 'styled-components';
import axios from '../../api/axios'
import React, { useEffect, useState } from 'react'
import Product from './Product';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  const getProducts = async () => {
    try {
      const response = await axios.get(`products/`);
      console.log(response.data);
      setProducts(response.data.results);
      setLoad(true);
    } catch (error) {
      console.error('상품 가져오기 실패', error.response.data);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SProductContainer>
      { load ?
        <ProductWrap>
          {products.map(product => (
            <Product key={product.product_id} product={product} />
          ))}
        </ProductWrap>
        : <p>로딩중</p>
      }
    </SProductContainer>
  )
}

export default ProductContainer

const SProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductWrap = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin: 80px 0;
`;