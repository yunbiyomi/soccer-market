import styled from 'styled-components';
import axios from '../../api/axios'
import React, { useEffect, useState } from 'react'
import Product from './Product';
import Pagination from './Pagination';
import usePageNavigation from '../../hooks/usePageNavigation';
import Loader from '../common/Loader/Loader';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  // 페이지네이션 hook return 값
  const {
    currentPage,
    pageCount,
    handlePreviousPage,
    handleNextPage,
    handlePageClick,
  } = usePageNavigation(totalCount);

  // 페이지별 상품들 가져오기
  const getProducts = async () => {
    try {
      const response = await axios.get(`products/?page=${currentPage}`);
      setTotalCount(response.data.count);
      setProducts(response.data.results);
      setLoad(true);
    } catch (error) {
      console.error('상품 가져오기 실패', error.response.data);
    }
  }

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  return (
    <SProductContainer>
      { load ? (
        <>
          <ProductWrap>
            {products.map(product => (
              <Product key={product.product_id} product={product} />
            ))}
          </ProductWrap>
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handlePageClick={handlePageClick}
          />
        </>
      ): (
        <Loader />
    )
      }
    </SProductContainer>
  )
}

export default ProductContainer

const SProductContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductWrap = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin: 80px 0;

  @media (max-width: 1024px) {
    width: 1024px;
    grid-template-columns: repeat(3, 1fr);
    margin: 50px 0 80px 0;
  }

  @media (max-width: 768px) {
    width: 768px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    width: 480px;
    gap: 10px;
    margin-top: 30px;
  }
`;