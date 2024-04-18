import HeaderComponents from './components/Header/Header';
import styled from 'styled-components';
import CarouselComponents from './components/Carousel/Carousel';
import { CarouselData } from './components/Carousel/CarouselData';

const AppContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <HeaderComponents />
      <CarouselComponents slides={CarouselData} />
    </AppContainer>
  );
}

export default App;
