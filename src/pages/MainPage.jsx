import React from 'react'
import Header from '../components/common/Header/Header'
import ProductContainer from '../components/Product/ProductContainer'
import Footer from '../components/common/Footer/Footer'
import Banner from '../components/Banner/Banner'
import TopButton from '../components/common/Button/TopButton'
import InputBox from '../components/common/Header/InputBox'
import styled from 'styled-components'

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <InputDisplay>
        <InputBox />
      </InputDisplay>
      <ProductContainer />
      <Footer />
      <TopButton />
    </>
  )
}

export default MainPage

const InputDisplay = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;