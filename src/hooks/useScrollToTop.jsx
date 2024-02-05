import { useEffect } from 'react';
import { useState } from 'react'

const useScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 500)
        setShowBtn(true);
      else
        setShowBtn(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },  [])

  return { showBtn, scrollToTop };
}

export default useScrollToTop