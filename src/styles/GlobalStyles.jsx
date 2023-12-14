import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  :root {
    --point-color: #001D82;
    --light-blue: #E7ECFF;
    --green: #006400;
    --red: #EB5757;
    --gray: #C4C4C4;
    --light-gray: #F2F2F2;
    --disabled-gray: #E0E0E0
    --light-font-color: #767676;
  }

  * {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  button {
    background-color: none;
    border: none;
  }

  p {
    margin: 0;
  }

  img {
    margin: 0;
  }

`;

export default GlobalStyles