import { useEffect } from 'react';
import { useState } from 'react';

const useCommaFormat = (number) => {
  const [formatNumber, setFormatNumber] = useState('');
  
  useEffect(() => {
    const formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setFormatNumber(formatted);
  }, [number])
  
  return formatNumber;
}

export default useCommaFormat