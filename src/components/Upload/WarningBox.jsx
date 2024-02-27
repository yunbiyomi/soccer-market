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
        - 너무 귀여운 사진은 심장이 아파올 수 있습니다.
        <br /><br />
        - 유소년에게서 천자만홍이 피고 이상이 온갖 들어 약동하다. 이상의 가지에 사랑의 있는가? 주며, 끓는 힘차게 얼음이 얼음 가치를 황금시대의 있음으로써 사라지지 것이다. 이 뜨거운지라, 이상의 속에서 이것은 피가 보배를 황금시대의 싹이 사막이다.
        <br /><br />
        - 자신과 우는 옷을 지혜는 아니다. 더운지라 설레는 기쁘며, 위하여서, 평화스러운 광야에서 그리하였는가? 소담스러운 위하여 인도하겠다는 어디 무엇을 이상을 같지 따뜻한 청춘 칼이다.
        </WarningContent>
      </WarningContentBox>
    </SWarningBox>
  )
}

export default WarningBox

const SWarningBox = styled.div`
  width: 250px;
  margin-right: 80px;
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
`;

const WarningContent = styled.p`
  font-size: 14px;
`;