import 'reset-css';
import { MainContent } from './components/MainContent/MainContent';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import 'reset-css';
import { CategoryFilters } from './components/CategoryFilters/CategoryFilters';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CategoryFilters />
      <MainContent />
      <Footer />
    </>
  );
};
