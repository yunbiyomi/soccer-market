import React from 'react'
import styled from 'styled-components';

const WarningBox = () => {
  return (
    <SWarningBox>
      <WarningTitle>
        * 상품 등록 주의사항
      </WarningTitle>
      <WarningContentBox>
        <WarningContent>
        - 상품의 크기, 색상, 재질 등 상세한 스펙을 명시하여 고객이 실제 상품을 확인할 수 있도록 합니다.
        </WarningContent>
        <WarningContent>
        - 배송 및 배송비에 대한 정보를 명확히 표기하여 고객이 주문 전에 비용을 예상할 수 있도록 합니다.
        </WarningContent>
        <WarningContent>
        - 실제 재고량과 일치하는 수량으로 재고를 등록해주세요. 고객에게 신속한 배송을 제공하기 위해 정확한 재고 정보가 중요합니다.
        </WarningContent>
      </WarningContentBox>
    </SWarningBox>
  )
}

export default WarningBox

const SWarningBox = styled.div`
  width: 250px;
  margin-right: 80px;

  @media (max-width: 1024px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }
`;

const WarningTitle = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  color: var(--point-color);
`;

const WarningContentBox = styled.div`
  padding: 20px;
  background-color: var(--light-point-color);
  border-radius: 5px;
  line-height: 1.7;
`;

const WarningContent = styled.p`
  font-size: 14px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;