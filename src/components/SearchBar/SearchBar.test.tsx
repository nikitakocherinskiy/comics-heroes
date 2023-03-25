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
});
