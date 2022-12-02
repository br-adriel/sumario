import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Outfit', sans-serif;
    background: #fdfeff;
  }

  #__next {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main {
    width: 100%;
  }

  p {
    margin-bottom: 0;
  }
`;

export default GlobalStyle;
