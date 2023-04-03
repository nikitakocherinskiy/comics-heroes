import { rest } from 'msw';
import { setupServer } from 'msw/node';
import axios from 'axios';
import { fetchChars, fetchCharsWithQuery, fetchCharById } from './CharService';

const server = setupServer(
  rest.get('https://gateway.marvel.com:443/v1/public/characters', (req, res, ctx) => {
    const query = req.url.searchParams.get('nameStartsWith');
    const limit = parseInt(req.url.searchParams.get('limit') || '');
    const offset = parseInt(req.url.searchParams.get('offset') || '');

    const page = offset / limit + 1;
    const data = {
      data: {
        results: [
          {
            id: 1,
            name: 'Spider-Man',
            thumbnail: {
              path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
              extension: 'jpg',
            },
          },
          {
            id: 2,
            name: 'Iron Man',
            thumbnail: {
              path: 'https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
              extension: 'jpg',
            },
          },
        ],
        total: 2,
      },
    };
    if (!query || query === '') {
      return res(ctx.json(data));
    }
    if (query === 'Spider-Man') {
      return res(ctx.json(data));
    }
  }),

  rest.get('https://gateway.marvel.com:443/v1/public/characters/:id', (req, res, ctx) => {
    const id = 1;
    const data = {
      data: {
        results: [
          {
            id: id,
            name: 'Spider-Man',
            thumbnail: {
              path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
              extension: 'jpg',
            },
          },
        ],
      },
    };
    return res(ctx.json(data));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('API Tests', () => {
  test('fetchChars should return the correct data', async () => {
    const data = await fetchChars(20, 0, 1);
    expect(data.data.results.length).toBe(20);
    expect(data.data.results[0].id).toBe(1011334);
    expect(data.data.results[0].name).toBe('3-D Man');
    expect(data.data.results[0].thumbnail.path).toBe(
      'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784'
    );
  });

  test('fetchCharsWithQuery should return the correct data for a valid query', async () => {
    const data = await fetchCharsWithQuery('Spider-Man', 20, 1);
    expect(data.data.results.length).toBe(13);
    expect(data.data.results[0].id).toBe(1011054);
    expect(data.data.results[0].name).toBe('Spider-Man (1602)');
    expect(data.data.results[0].thumbnail.path).toBe(
      'http://i.annihil.us/u/prod/marvel/i/mg/e/03/5317713c9e746'
    );
  });
});
