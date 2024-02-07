import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import MainPage from './pages/MainPage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCookie } from './hooks/Cookies';
import { login } from './store/authActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie('token');
    if(token)
      dispatch(login(token));
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/detail' element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}
export default App;
