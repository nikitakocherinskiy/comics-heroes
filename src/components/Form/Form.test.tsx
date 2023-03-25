import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Navigation', () => {
  it('Renders Form', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Surname:')).toBeInTheDocument();
    expect(screen.getByLabelText('Birthday:')).toBeInTheDocument();
    expect(screen.getByLabelText('State:')).toBeInTheDocument();
    expect(screen.getByLabelText('Consent:')).toBeInTheDocument();
    expect(screen.getByLabelText('Extra presents:')).toBeInTheDocument();
  });
});
