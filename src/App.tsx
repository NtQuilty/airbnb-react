import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import 'reset-css';
import { CategoryFilters } from './components/CategoryFilters/CategoryFilters';

const AppWrapper = styled.div``;

export const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <CategoryFilters />
    </AppWrapper>
  );
};
