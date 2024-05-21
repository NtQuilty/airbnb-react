import 'reset-css';
import { MainContent } from './components/MainContent/MainContent';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import { CategoryFilters } from './components/CategoryFilters/CategoryFilters';
import { Banner } from './components/Header/Banner';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Header />
      <CategoryFilters />
      <MainContent />
      <Footer />
    </>
  );
};
