import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
import { vi } from 'vitest';

describe('Pagination', () => {
  const handleNextClick = vi.fn();
  const handlePrevClick = vi.fn();

  it('renders the correct page and total pages', () => {
    const { getByText } = render(
      <Pagination
        page={3}
        totalPages={10}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    );
    expect(getByText('Page 3 of 10')).toBeInTheDocument();
  });

  it('disables Prev button when page is 1', () => {
    const { getByText } = render(
      <Pagination
        page={1}
        totalPages={10}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    );
    const prevButton = getByText('Prev');
    expect(prevButton).toHaveAttribute('disabled');
  });

  it('disables Next button when page is last', () => {
    const { getByText } = render(
      <Pagination
        page={10}
        totalPages={10}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    );
    const nextButton = getByText('Next');
    expect(nextButton).toHaveAttribute('disabled');
  });

  it('calls handleNextClick when Next button is clicked', () => {
    const { getByText } = render(
      <Pagination
        page={5}
        totalPages={10}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    );
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);
    expect(handleNextClick).toHaveBeenCalledTimes(1);
  });

  it('calls handlePrevClick when Prev button is clicked', () => {
    const { getByText } = render(
      <Pagination
        page={5}
        totalPages={10}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    );
    const prevButton = getByText('Prev');
    fireEvent.click(prevButton);
    expect(handlePrevClick).toHaveBeenCalledTimes(1);
  });
});
