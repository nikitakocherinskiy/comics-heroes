import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import MainPage from '../pages/MainPage';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

type Props = {};

function Router({}: Props) {
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
