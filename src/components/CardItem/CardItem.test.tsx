import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';

describe('CardItem', () => {
  it('Renders CardItem', () => {
    const data = {
      id: 1009562,
      name: 'Scarlet Witch',
      description: '',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b.jpg',
    };

    render(
      <MemoryRouter>
        <CardItem
          key={data.id}
          name={data.name}
          description={data.description || 'No description yet'}
          image={data.image + '.jpg'}
        />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Scarlet Witch');

    expect(screen.getByRole('img')).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();

    expect(screen.getByRole('link')).toHaveTextContent('Read more');

    expect(screen.getByText('No description yet')).toBeInTheDocument();
  });
});
