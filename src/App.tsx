import HeaderComponents from './components/Header/Header';
import BunnerComponents from './components/Bunner/Bunner';
import styled from 'styled-components';
import CarouselComponents from './components/Carousel/Carousel';
import { CarouselData } from './components/Carousel/CarouselData';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

function App() {
  return (
    <AppContainer>
      <BunnerComponents />
      <HeaderComponents />
      <CarouselComponents slides={CarouselData} />
    </AppContainer>
  );
}

export default App;
