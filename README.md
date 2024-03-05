# Soccer Market⚽🛒
🌐 [Soccer Market 바로가기](https://soccer-market.vercel.app/)<br/>

**👩‍💻 테스트 계정**
```
[BUYER]
ID : soccerbuyer
PW : soccer123!
```
```
[SELLER]
ID : tottenham
PW : tottenham123!
```

![mokupImage](https://github.com/yunbiyomi/soccer-market/assets/83996384/d63b7c0b-cf24-4151-b069-d848d3e71bb8)


<br/>

🎨 [디자인 Figma 바로가기](https://www.figma.com/file/Qkr2ZnpQKO0SVQAUmtccLm/Soccer-Market?type=design&node-id=0%3A1&mode=design&t=OLZtnrP6dqOTj18B-1)<br/>


`개발 기간 : 2023.01 ~ 2023.02`<br/>
<br/>

<details>
<summary> 🔗 목차 </summary>
 
<div markdown="1">
 
1. [프로젝트 소개](#info)
2. [기능](#function)
3. [기술 및 개발환경](#stack)
4. [폴더 구조](#folder)
   
</div>

</details>

## <span id="info">📌 프로젝트 소개</span>
### React를 기반으로 구축된 SPA로, REST API를 활용하여 상품에 대한 CRUD를 구현였습니다.

<br/>

### 🔷 특징
1. **구매자와 판매자 구분** : `판매자`는 상품을 등록하고 관리 뿐만 아니라 판매까지 진행할 수 있으며, `구매자`는 등록된 상품을 구매할 수 있습니다. 각 회원 유형에 따라 다른 UI와 기능들이 제공됩니다.

2. **상품 등록 및 관리** : 판매자는 판매자 센터를 통해 상품을 손쉽게 등록하고, 필요 시 수정 및 삭제할 수 있습니다.

3. **상품 전체보기** : 메인 페이지에서 쇼핑몰에 등록된 모든 상품을 한 눈에 볼 수 있으며, 페이지네이션 기능을 통해 페이지 별로 상품을 살펴볼 수 있습니다.

4. **상품 상세보기** : 각 상품의 상세 정보를 자세히 확인할 수 있습니다. 구매자는 원하는 수량만큼 상품을 장바구니에 담거나 바로 구매할 수 있습니다.

5. **상품 검색** : 쇼핑몰에 등록된 모든 상품을 검색할 수 있습니다. 검색 결과에서 원하는 상품을 선택하면 해당 상품의 상세 페이지로 즉시 이동할 수 있습니다.

6. **장바구니** : 장바구니에 추가된 상품을 손쉽게 관리할 수 있습니다. 상품을 삭제하거나 수량을 변경할 수 있으며, 선택된 상품을 주문하거나 개별로 주문할 수 있습니다.

7. **상품 구매** : 원하는 상품을 간편하게 구매할 수 있습니다. 카카오 API를 활용하여 우편 번호 조회 기능을 제공해 사용자는 주소를 손쉽게 작성할 수 있습니다.

8. **반응형 디자인** : PC뿐만 아니라 테블릿과 모바일에서도 최적화된 사용자 경험을 제공하기 위해 반응형 디자인을 구현하였습니다.

<br/>

## <span id="function">📌 기능</span>

### 🔷 공통 기능
- 로그인 / 회원가입
- 상품 목록 보기
- 상품 상세 보기
- 상품 구매

### 🔷 구매자 기능
- 장바구니
- 상품 주문/결제하기

### 🔷 판매자 기능
 - 상품 등록하기
 - 상품 관리하기(수정 및 삭제)

<br/><br/>

## <span id="stack">⚙️ 기술 및 개발환경</span>
### FrontEnd
![FrontEnd](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white) ![redux](https://img.shields.io/badge/redux-764ABC?style=flat-square&logo=styled-components&logoColor=white) ![StyledComponents](https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=styled-components&logoColor=white)

### BackEnd
![BackEnd](https://img.shields.io/badge/kakaoAPI-FFCD00?style=flat-square&logo=styled-components&logoColor=white) 및 제공된 API

### Environment
![Environment](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=styled-components&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=styled-components&logoColor=white) ![VisualStudioCode](https://img.shields.io/badge/VisualStudioCode-007ACC?style=flat-square&logo=styled-components&logoColor=white)


### Design
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>

### Deploy
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Figma&logoColor=white"/>

<br/><br/>

## <span id="folder">📁 폴더 구조</span>
```
📦src
 ┣ 📂api
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂Banner
 ┃ ┣ 📂Cart
 ┃ ┣ 📂common
 ┃ ┣ 📂Edit
 ┃ ┣ 📂Order
 ┃ ┣ 📂Product
 ┃ ┣ 📂SellerCenter
 ┃ ┗ 📂Upload
 ┣ 📂features
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂store
 ┣ 📂styles
 ┣ 📜App.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜index.js
```
