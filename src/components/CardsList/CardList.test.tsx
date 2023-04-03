import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';
import { vi } from 'vitest';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

describe('CardsList component', () => {
  const searchData = 'Iron Man';

  it('should render loading spinner when data is loading', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <CardsList searchData={searchData} />
      </QueryClientProvider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render cards list when data is loaded', async () => {
    const mockData = {
      data: {
        total: 100,
        results: [
          {
            id: 1,
            name: 'Iron Man',
            description: 'Genius, billionaire, playboy, philanthropist.',
            thumbnail: {
              path: 'http://example.com/images/iron-man',
              extension: 'jpg',
            },
          },
          {
            id: 2,
            name: 'Captain America',
            description: 'The First Avenger.',
            thumbnail: {
              path: 'http://example.com/images/captain-america',
              extension: 'jpg',
            },
          },
        ],
      },
    };
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockData),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    render(
      <QueryClientProvider client={queryClient}>
        <CardsList searchData={searchData} />
      </QueryClientProvider>
    );
    const ironManCard = await screen.findByText('Iron Man');
    const tonyStark = screen.getByText('Iron Man/Tony Stark (MAA)');
    expect(ironManCard).toBeInTheDocument();
    expect(tonyStark).toBeInTheDocument();
  });

  it('should render filtered cards list when search query is provided', async () => {
    const mockFilteredData = {
      data: {
        total: 1,
        results: [
          {
            id: 1,
            name: 'Iron Man',
            description: 'Genius, billionaire, playboy, philanthropist.',
            thumbnail: {
              path: 'http://example.com/images/iron-man',
              extension: 'jpg',
            },
          },
        ],
      },
    };
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockFilteredData),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    render(
      <QueryClientProvider client={queryClient}>
        <CardsList searchData={searchData} />
      </QueryClientProvider>
    );
    const ironManCard = await screen.findByText('Iron Man');
    expect(ironManCard).toBeInTheDocument();
    expect(screen.queryByText('Captain America')).not.toBeInTheDocument();
  });

  it('should change page when pagination button is clicked', async () => {
    const mockData = {
      data: {
        total: 10,
        results: [
          {
            id: 1,
            name: 'Iron Man',
            description: 'Genius, billionaire, playboy, philanthropist.',
            thumbnail: {
              path: 'http://example.com/images/iron-man',
              extension: 'jpg',
            },
          },
        ],
      },
    };
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockData),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    render(
      <QueryClientProvider client={queryClient}>
        <CardsList searchData={searchData} />
      </QueryClientProvider>
    );
    const nextPageButton = screen.getByText('Next');
    nextPageButton.click();
    const ironManCard = await screen.findByText('Iron Man');
    expect(ironManCard).toBeInTheDocument();
    expect(nextPageButton).toHaveAttribute('disabled');
  });
});
