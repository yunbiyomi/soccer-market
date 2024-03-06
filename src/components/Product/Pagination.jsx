import React from 'react';
import styled from 'styled-components';

const Pagination = ({ currentPage, pageCount, handlePreviousPage, handleNextPage, handlePageClick }) => {
  const pageSize = 5;
  const currentGroup = Math.ceil(currentPage / pageSize);
  const startPage = (currentGroup - 1) * pageSize + 1;
  const endPage = Math.min(currentGroup * pageSize, pageCount);

  return (
    <PaginationContainer>
      <li>
        <PaginationBtn onClick={handlePreviousPage} isLeft aria-label='prev-page-button'/>
      </li>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const pageNumber = startPage + index;
        return (
        <PageNumberWrap key={pageNumber} isCurrentPage={currentPage === pageNumber}>
          <PageNumber onClick={() => handlePageClick(pageNumber)} isCurrentPage={currentPage === pageNumber}>
            {pageNumber}
          </PageNumber>
        </PageNumberWrap>
        )}
      )}
      <li>
        <PaginationBtn onClick={handleNextPage} isRight aria-label='next-page-button'/>
      </li>
    </PaginationContainer>
  );
};

export default Pagination;

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
    transform: translate(-50%, -80%) rotate(${({ isLeft, isRight }) => (isLeft ? '-135deg' : (isRight ? '45deg' : '225deg'))});
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ isCurrentPage }) => (isCurrentPage ? 'var(--point-color)' : 'transparent')};
  transition: background-color .15s,  color .15s;

  &:hover {
    background-color: var(--gray);
  }
`;

const PageNumber = styled.span`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: ${({ isCurrentPage }) => (isCurrentPage ? 'white' : 'black')};
  cursor: pointer;

  &:hover {
    color: white;
  }
`;