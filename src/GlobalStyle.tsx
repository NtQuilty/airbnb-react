import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font: 'Poppins', sans-serif;
    --white: #ffffff;
    --black: #000000;
    --light-gray: #B8B8B8;
    --dark-gray: #3E3E3E;
    --pink: #FF385C;
    --dark-pink: #d22b49;
    --background: #f7f7f7;
    --button-hover-fill: #717171;

  }
  body {
    font-family: var(--font);
  };
`;

export default GlobalStyle;
