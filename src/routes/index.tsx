import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyle';
import Main from '../pages/main';
export const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Main />} path="/" />
      </Routes>
    </BrowserRouter>
  )
};