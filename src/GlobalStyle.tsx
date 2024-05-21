import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --font: 'Poppins', sans-serif;
    --white: #ffffff;
    --black: #000000;
    --light-gray: #B8B8B8;
    --dark-gray: #3E3E3E;
    --pink: #FF385C;
    --dark-pink: #d22b49;
    --gray: #f7f7f7;
    --button-hover-fill: #717171;
    --fill-heart: rgba(0, 0, 0, 0.5);
  }
  body {
    font-family: var(--font);
  };
`;
