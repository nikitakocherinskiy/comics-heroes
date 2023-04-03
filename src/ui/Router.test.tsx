import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import MainPage from '../pages/MainPage/MainPage';

describe('Router', () => {
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/wrongPath']}>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent("Sorry, we couldn't find that page");
  });

  it('Renders AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <AboutPage />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About us');
  });
});
