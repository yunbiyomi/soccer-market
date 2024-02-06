import { useEffect, useState } from 'react'


const usePageNavigation = (totalCount) => {
  const[pageCount, setPageCount] = useState(1);
  const[currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    if(currentPage > 1)
      setCurrentPage(currentPage-1);
  }

  const handleNextPage = () => {
    if(currentPage < pageCount)
      setCurrentPage(currentPage+1);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const calculatePageCount = () => {
    const limit = 15;
    const count = Math.ceil(totalCount / limit);
    setPageCount(count);
  }

  useEffect(() => {
    calculatePageCount();
  }, [totalCount])


  return {
    currentPage,
    pageCount,
    handlePreviousPage,
    handleNextPage,
    handlePageClick,
  };
}

export default usePageNavigation