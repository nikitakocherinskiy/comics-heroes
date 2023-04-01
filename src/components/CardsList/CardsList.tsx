// import data from '../../data/data';
import CardItem from '../CardItem/CardItem';
import styles from './CardsList.module.css';
import fetchChars from '../../service/CharService';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { LIMIT, OFFSET } from '../../service/serviceVariables';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function CardsList() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [charsOffset, setCharsOffset] = useState(OFFSET);
  const { data, isLoading } = useQuery(
    ['chars', LIMIT, charsOffset],
    () => fetchChars(LIMIT, charsOffset, page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data?.data.total) {
      setTotalPages(Math.ceil(data?.data.total / LIMIT));
      console.log(page, totalPages);
    }
  }, [data?.data.total, page, totalPages]);

  const handlePrevClick = () => {
    setCharsOffset((page - 1) * LIMIT);

    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCharsOffset((page - 1) * LIMIT);

    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      {isLoading && (
        <div className={styles.spinnerWrapper}>
          <h1 className={styles['spinner-header']}>Loading...</h1>
          <LoadingSpinner />
        </div>
      )}
      <div className={styles.container}>
        {!isLoading &&
          data?.data.results.map((el) => {
            return (
              <CardItem
                key={el.id}
                name={el.name}
                description={el.description || 'No description yet'}
                image={el.thumbnail.path + '.jpg'}
              />
            );
          })}
        <div className={styles.paginationWrapper}>
          <div>
            <button
              className={styles.paginationButton}
              disabled={page === 1}
              onClick={handlePrevClick}
            >
              Prev
            </button>
            <span>{`Page ${page} of ${totalPages}`}</span>
            <button
              className={styles.paginationButton}
              disabled={page === totalPages}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsList;
