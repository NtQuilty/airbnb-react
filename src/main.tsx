import 'reset-css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage.tsx';
import { DetailPage } from './components/DetailPage/DetailPage.tsx';
import { GlobalStyle } from './GlobalStyle.tsx';
import { Layout } from './components/Layout/Layout.tsx';
import { YMaps } from '@pbe/react-yandex-maps';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'hotel/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <YMaps
      query={{
        lang: 'en_US',
        ns: 'use-load-option',
        load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
      }}
    >
      <RouterProvider router={router} />
    </YMaps>
  </React.StrictMode>,
);
