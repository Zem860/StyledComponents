import { createGlobalStyle } from "styled-components";
import PingFang from './fonts/PingFang.ttf';
export const GlobalStyle = createGlobalStyle`
  /* 字體定義 */
  @font-face {
    font-family: 'PingFang';
    src: url(${PingFang}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }


  /* 全域樣式設定 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'PingFang', 'Roboto', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;