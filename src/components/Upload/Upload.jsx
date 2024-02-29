import React from 'react'
import styled from 'styled-components'
import UploadHeader from './UploadHeader'
import WarningBox from './WarningBox'
import UploadProductEditor from './UploadProductEditor'

const Upload = () => {
  return (
    <UploadContainer>
      <UploadHeader />
      <UploadContentWrap>
        <WarningBox />
        <UploadProductEditor />
      </UploadContentWrap>
    </UploadContainer>
  )
}

export default Upload

const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UploadContentWrap = styled.div`
  width: 1280px;
  display: flex;

  @media (max-width: 1024px) {
    width: 1024px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 768px;
  }
`;