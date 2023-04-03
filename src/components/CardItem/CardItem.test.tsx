import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CardItem from './CardItem';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const testProps = {
  id: 123,
  name: 'Spider-Man',
  image: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
  description: 'Friendly neighborhood Spider-Man...',
};

describe('CardItem', () => {
  it('renders the component with props', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CardItem {...testProps} />
      </QueryClientProvider>
    );
    const headerElement = screen.getByText(testProps.name);
    expect(headerElement).toBeInTheDocument();
  });

  it('opens modal on button click', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CardItem {...testProps} />
      </QueryClientProvider>
    );
    const buttonElement = screen.getByText('Read more');
    fireEvent.click(buttonElement);
    const modalElement = screen.getByRole('heading');
    expect(modalElement).toBeInTheDocument();
  });
});
