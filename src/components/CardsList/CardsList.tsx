// import data from '../../data/data';
import CardItem from '../CardItem/CardItem';
import styles from './CardsList.module.css';
import fetchChars from '../../service/CharService';
import { useQuery } from 'react-query';
import { useEffect, useRef, useState } from 'react';
import { LIMIT, VALUE_TO_ADD } from '../../service/serviceVariables';

function CardsList() {
  const [charsLimit, setCharsLimit] = useState(LIMIT);
  // const [charsOffset, setCharsOffset] = useState(OFFSET);
  const { data, isLoading, isError } = useQuery(
    ['chars', charsLimit],
    () => fetchChars(charsLimit),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
  const lastElement = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCharsLimit((prev) => prev + VALUE_TO_ADD);
        // setCharsOffset((prev) => prev + VALUE_TO_ADD);
      }
    });
    observer.current.observe(lastElement.current!);
  }, [isLoading]);

  return (
    <div className={styles.container}>
      {data?.data.results.map((el) => {
        return (
          <CardItem
            key={el.id}
            name={el.name}
            description={el.description || 'No description yet'}
            image={el.thumbnail.path + '.jpg'}
          />
        );
      })}
      <div ref={lastElement} />
    </div>
  );
}

export default CardsList;
