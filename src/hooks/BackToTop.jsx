import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BackToTop = (props) => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {props.children}
    </>
  )
}

export default BackToTop