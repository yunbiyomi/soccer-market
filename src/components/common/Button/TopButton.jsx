import React from 'react'
import styled from 'styled-components'
import useScrollToTop from '../../../hooks/useScrollToTop'

const TopButton = () => {
  const { showBtn, scrollToTop } = useScrollToTop();

  return (
    <>
    { showBtn && (
      <TopBtnContainer>
        <STopBtn onClick={scrollToTop}>Top</STopBtn>
      </TopBtnContainer>
    )}
    </>
  )
}

export default TopButton

const TopBtnContainer = styled.div`
  position: fixed;
  right: 2%;
  bottom: 5%;
  z-index: 1;
`;

const STopBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;
  background-color: var(--point-color);
  color: white;

  &:hover {
    background-color: transparent;
    border: 3px solid var(--point-color);
    color: var(--point-color);
  }
`;