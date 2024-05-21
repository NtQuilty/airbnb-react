import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --gray-color: #f7f7f7;
  --font: 'Poppins', sans-serif;
  --white: #ffffff;
  --text-color: #B8B8B8;
  --black:#1E1E1E;
  --heart: #FF385C;
  --fill-heart: rgba(0, 0, 0, 0.5);

}
body {
  font-family: var(--font);
};
`;

export default GlobalStyle;
