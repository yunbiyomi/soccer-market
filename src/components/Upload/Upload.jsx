import React from 'react'
import styled from 'styled-components'
import UploadHeader from './UploadHeader'
import WarningBox from './WarningBox'

const Upload = () => {
  return (
    <UploadContainer>
      <UploadHeader />
      <UploadContentWrap>
        <WarningBox />
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
`;