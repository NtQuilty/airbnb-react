import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Banner } from '../Header/Banner';

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && <Banner />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
