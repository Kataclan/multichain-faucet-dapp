import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;
