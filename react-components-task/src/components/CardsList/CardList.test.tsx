import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CardsList from './CardsList';

describe('CardsList', () => {
  it('Renders CardsList', () => {
    render(
      <MemoryRouter>
        <CardsList />
      </MemoryRouter>
    );
    let cards = screen.getAllByRole('img');
    expect(cards.length).toBe(8);
  });
});
