import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import MainPage from './pages/MainPage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCookie } from './hooks/Cookies';
import CartPage from './pages/CartPage';
import { login } from './features/user/authActions';
import { declare } from './features/price/totalPriceActions';

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
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/detail' element={<ProductDetailPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  );
}
export default App;
