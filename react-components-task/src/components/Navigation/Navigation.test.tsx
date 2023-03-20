import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('Renders Navigation', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    expect(screen.getByText('Main Page')).toBeInTheDocument();
  });
});
