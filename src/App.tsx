import styled from 'styled-components';
import Header from './components/Header/Header';
import GlobalStyle from './GlobalStyle';
import 'reset-css';
import { CategoryFilters } from './components/CategoryFilters/VacationFilterCarousel';
import { ICON_SET } from './config';

const AppWrapper = styled.div``;

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <CategoryFilters slides={ICON_SET} />
    </AppWrapper>
  );
}

export default App;
