import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100dvh;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
