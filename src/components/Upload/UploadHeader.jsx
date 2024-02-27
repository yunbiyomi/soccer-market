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
`;

const STitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
`;