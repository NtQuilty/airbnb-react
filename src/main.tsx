import 'reset-css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage.tsx';
import { DetailPage } from './components/DetailPage/DetailPage.tsx';
import { GlobalStyle } from './GlobalStyle.tsx';
import { Layout } from './components/Layout/Layout.tsx';

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
    <RouterProvider router={router} />
  </React.StrictMode>,
);
