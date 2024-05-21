import HeaderComponents from './components/Header/Header';
import GlobalStyle from './GlobalStyle';
import 'reset-css';
import styled from 'styled-components';
import { MainContent } from './components/MainContent/MainContent';
import { CategoryFilters } from './components/CategoryFilters/CategoryFilters';
import { Footer } from './components/Footer/Footer';

const AppContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <HeaderComponents />
      <CategoryFilters />
      <MainContent />
      <Footer />
    </AppContainer>
  );
}

export default App;
