import { createGlobalStyle } from "styled-components";
import PingFang from '../fonts/PingFang.ttf';
export const GlobalStyle = createGlobalStyle`
  /* 字體定義 */
  @font-face {
    font-family: 'PingFang';
    src: url(${PingFang}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  :root{
    --main-green:#3F5D45;
    --second-green:#EAF0ED;
    --shade-yellow:#FFE180;
}

html, body {
    width:100%;
    height:100vh;
    height:100dvh;
    font-family: 'PingFang', 'Roboto', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFFFF;
  }


*,*::before,*::after{
  box-sizing: border-box;
  border:none;
  outline:none;
  padding:0;
  margin:0;
}
  
  


  a {
    text-decoration: none;
    color: inherit;
  }
`;