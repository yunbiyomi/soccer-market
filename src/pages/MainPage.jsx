import React from 'react'
import Header from '../components/common/Header/Header'
import ProductContainer from '../components/Product/ProductContainer'
import Footer from '../components/common/Footer/Footer'
import Banner from '../components/Banner/Banner'

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductContainer />
      <Footer />
    </>
  )
}

export default MainPage