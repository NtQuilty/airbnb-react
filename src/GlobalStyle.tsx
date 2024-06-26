import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --font: 'Poppins', sans-serif;
    --white: #ffffff;
    --black: #000000;
    --gray: #f7f7f7;
    --light-gray: #B8B8B8;
    --dark-gray: #3E3E3E;
    --pink: #FF385C;
    --dark-pink: #d22b49;
    --button-hover-fill: #717171;
    --box-shadow: #22222240
  }
  body {
    font-family: var(--font);
  };
`;
