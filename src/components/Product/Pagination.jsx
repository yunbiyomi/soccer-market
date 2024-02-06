import React from 'react'
import styled from 'styled-components';

const Pagination = ({ currentPage, pageCount, handlePreviousPage, handleNextPage, handlePageClick }) => {
  return (
    <PaginationContainer>
      <PaginationBtn onClick={handlePreviousPage} isLeft/>
      {
        Array.from({ length: pageCount }, (_, index) => (
          <PageNumberWrap key={index+1} isCurrentPage={currentPage === index+1}>
            <PageNumber onClick={() => handlePageClick(index + 1)} isCurrentPage={currentPage === index+1}>{index+1}</PageNumber>
          </PageNumberWrap>
        ))
      }
      <PaginationBtn onClick={handleNextPage} isRight/>
    </PaginationContainer>
  )
}

export default Pagination

const PaginationContainer = styled.ul`
  margin: 20px 0 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationBtn = styled.button`
  position: relative;
  margin: 0 30px;
  background-color: transparent;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(${({ isLeft, isRight }) => (isLeft ? '-135deg' : (isRight ? '45deg' : '225deg'))});
    width: 10px; 
    height: 10px; 
    border-top: 3px solid #000;
    border-right: 3px solid #000; 
  }

  &:hover {
    scale: 1.3;
  }
`;


const PageNumberWrap = styled.li`
  width: 40px;
  height: 40px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: ${({ isCurrentPage }) => isCurrentPage ? 'var(--point-color)' : 'transparent'};
`;

const PageNumber = styled.span`
  display: flex;
  justify-content: center;
  line-height: 2.3;
  font-size: 18px;
  font-weight: bold;
  color: ${({ isCurrentPage }) => isCurrentPage ? 'white' : 'black'};
  cursor: pointer;
`;