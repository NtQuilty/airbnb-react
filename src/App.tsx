import HeaderComponents from './components/Header/Header';
import HeaderIconsCarousel from './components/HeaderIconsCarousel/HeaderIconsCarousel';
import { ICON_SET } from './components/HeaderIconsCarousel/HeaderIconsGallery';
import GlobalStyle from './GlobalStyle';
import 'reset-css';
import styled from 'styled-components';
import { HotelList } from './components/MainContent/HotelsList';
import { MAIN_CONTENT_DATA } from './config';

const AppContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <HeaderComponents />
      <HeaderIconsCarousel slides={ICON_SET} />
      <HotelList hotels={MAIN_CONTENT_DATA} />
    </AppContainer>
  );
}

export default App;
