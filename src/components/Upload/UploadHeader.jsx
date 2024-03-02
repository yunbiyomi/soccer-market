import React from 'react'
import styled from 'styled-components'

const UploadHeader = () => {
  return (
    <SUploadHeader>
      <STitle>
        상품 등록
      </STitle>
    </SUploadHeader>
  )
}

export default UploadHeader

const SUploadHeader = styled.header`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 964px;
  }

  @media (max-width: 768px) {
    width: 708px;
  }
`;

const STitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;