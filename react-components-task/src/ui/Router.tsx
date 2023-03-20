import AboutPage from '../pages/AboutPage/AboutPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import MainPage from '../pages/MainPage/MainPage';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
