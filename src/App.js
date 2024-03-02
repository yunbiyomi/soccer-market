import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import MainPage from './pages/MainPage'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import BackToTop from './hooks/BackToTop'
import NotFoundPage from './pages/NotFoundPage'
import SellerCenterPage from './pages/SellerCenterPage'
import ProductUploadPage from './pages/ProductUploadPage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCookie } from './hooks/Cookies'
import { login } from './features/user/authActions'
import { declare } from './features/price/totalPriceActions'
import PrivateRoutes from './hooks/PrivateRoutes'
import ProductEditPage from './pages/ProductEditPage'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie('token');
    const memberType = getCookie('memberType');
    const totalProductFee = getCookie('totalProductFee');
    const totalShippingFee = getCookie('totalShippingFee');

    if(token){
      dispatch(login(token, memberType));
      dispatch(declare(totalProductFee, totalShippingFee));
    }

  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <BackToTop>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/detail' element={<ProductDetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/sellercenter' element={<SellerCenterPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/order' element={<OrderPage />} />
            <Route path='/upload' element={<ProductUploadPage />} />
            <Route path='/edit' element={<ProductEditPage />} />
          </Route>
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </BackToTop>
    </>
  );
}
export default App;
