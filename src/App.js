import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}
export default App;
