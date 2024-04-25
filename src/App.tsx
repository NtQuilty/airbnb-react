import styled from 'styled-components';
import Header from './components/Header/Header';

import GlobalStyle from './GlobalStyle';
import 'reset-css';

const AppWrapper = styled.div``;

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
    </AppWrapper>
  );
}

export default App;
