import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Renders SearchBar component', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
  });
  it('updates query state when input value changes', () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'new query' } });
    expect(inputElement).toHaveValue('new query');
  });

  it('saves query to local storage on input change', () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'new query' } });
    expect(localStorage.getItem('searchQuery')).toBe('new query');
  });

  it('sets query state to local storage value on mount', () => {
    localStorage.setItem('searchQuery', 'stored query');
    render(<SearchBar />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('stored query');
  });
});
