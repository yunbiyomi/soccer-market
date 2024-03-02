import React from 'react'
import styled from 'styled-components';
import UploadHeader from '../Upload/UploadHeader'
import WarningBox from '../Upload/WarningBox'
import EditProductEditor from './EditProductEditor';

const Edit = () => {
  return (
    <EditContainer>
      <UploadHeader />
      <EditContentWrap>
        <WarningBox />
        <EditProductEditor />
      </EditContentWrap>
    </EditContainer>
  )
}

export default Edit
const EditContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EditContentWrap = styled.div`
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