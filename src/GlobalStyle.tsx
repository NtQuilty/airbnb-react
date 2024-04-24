import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --gray-color: #f7f7f7;
  --font: 'Poppins', sans-serif;
  --white-color: #ffffff;
  --text-color: #B8B8B8;
}
body {
  max-width: 1440px;
  margin: 0 auto;
};
`;

export default GlobalStyle;
