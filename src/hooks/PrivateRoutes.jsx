import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const isLogIn = useSelector(state => state.auth.isLogIn);

  return isLogIn ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoutes