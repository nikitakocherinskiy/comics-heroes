// import data from '../../data/data';
import CardItem from '../CardItem/CardItem';
import styles from './CardsList.module.css';
import { fetchChars, fetchCharsWithQuery } from '../../service/CharService';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { LIMIT, OFFSET } from '../../service/serviceVariables';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Pagination from '../Pagination/Pagination';

type Props = {
  searchData: string;
};

function CardsList({ searchData }: Props) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [charsOffset, setCharsOffset] = useState(OFFSET);

  const { data, isLoading } = useQuery(
    ['chars', LIMIT, charsOffset],
    () => fetchChars(LIMIT, charsOffset, page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      enabled: !!searchData,
    }
  );

  const { data: dataWithQuery, isLoading: isQueryLoading } = useQuery(
    ['filteredChars', searchData, LIMIT, page],
    () => fetchCharsWithQuery(searchData, LIMIT, page),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data?.data.total) {
      setTotalPages(Math.ceil(data?.data.total / LIMIT));
    }
  }, [data?.data.total, page, totalPages]);

  useEffect(() => {
    if (dataWithQuery?.data.total) {
      setTotalPages(Math.ceil(dataWithQuery?.data.total / LIMIT));
    }
  }, [dataWithQuery?.data.total, page, totalPages]);

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
      {(isLoading || isQueryLoading) && (
        <div className={styles.spinnerWrapper}>
          <h1 className={styles['spinner-header']}>Loading...</h1>
          <LoadingSpinner />
        </div>
      )}
      <div className={styles.container}>
        {!isLoading && !dataWithQuery && !isQueryLoading
          ? data?.data.results.map((el) => {
              return (
                <CardItem
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  description={el.description || 'No description yet'}
                  image={`${el.thumbnail.path}.${el.thumbnail.extension}`}
                />
              );
            })
          : dataWithQuery?.data.results.map((elSearch) => {
              return (
                <CardItem
                  key={elSearch.id}
                  id={elSearch.id}
                  name={elSearch.name}
                  description={elSearch.description || 'No description yet'}
                  image={`${elSearch.thumbnail.path}.${elSearch.thumbnail.extension}`}
                />
              );
            })}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    </div>
  );
}

export default CardsList;
