import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --gray-color: #f7f7f7;
  --font: 'Poppins', sans-serif;
  --white: #ffffff;
  --text-color: #B8B8B8;
  --black:#1E1E1E;
  --heart: #ff385c;
}
body {
  max-width: 1440px;
  margin: 0 auto;
  font-family: var(--font);
};
`;

export default GlobalStyle;
