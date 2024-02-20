import React from 'react'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import TopButton from '../components/common/Button/TopButton'
import Order from '../components/Order/Order'

const OrderPage = () => {
  return (
    <>
      <Header />
      <Order />
      <Footer />
      <TopButton />
    </>
  )
}

export default OrderPage