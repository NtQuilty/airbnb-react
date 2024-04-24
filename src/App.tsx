import HeaderComponents from './components/Header/Header';
import CarouselComponents from './components/Carousel/Carousel';
import { CAROUSEL_DATA } from './components/Carousel/CarouselData';
import GlobalStyle from './GlobalStyle';
import 'reset-css';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <HeaderComponents />
      <CarouselComponents slides={CAROUSEL_DATA} />
    </AppContainer>
  );
}

export default App;
