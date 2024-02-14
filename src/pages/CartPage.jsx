import React from 'react'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import TopButton from '../components/common/Button/TopButton'
import CartContainer from '../components/Cart/CartContainer'

const CartPage = () => {
  return (
    <>
      <Header />
      <CartContainer />
      <Footer />
      <TopButton />
    </>
  )
}

export default CartPage