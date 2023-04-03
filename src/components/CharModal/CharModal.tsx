import styles from './CharModal.module.css';
import { useQuery } from 'react-query';
import { fetchCharById } from '../../service/CharService';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useEffect, useState } from 'react';
import { ICharData } from '../../service/serviceTypes';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function CharModal({ id, visible, setVisible }: Props) {
  const [charData, setCharData] = useState<ICharData>();
  const rootClasses = [styles.popup];
  if (visible) {
    rootClasses.push(styles.popupActive);
  }
  const { data, isLoading } = useQuery(['character', id], () => fetchCharById(id), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    enabled: visible,
  });

  useEffect(() => {
    setCharData(data?.data.results[0]);
  }, [data?.data.results]);

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && charData && (
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.title}>{charData.name}</h2>
          <img
            src={`${charData.thumbnail.path}.${charData.thumbnail.extension}`}
            alt="Marvel Character"
            className={styles.image}
          />
          <p className={styles.description}>{charData.description || 'No description yet'}</p>
          <button className={styles.button}>
            <Link
              to={charData.urls[charData.urls.length - 1].url}
              relative="path"
              className={styles.link}
            >
              Check Out Comics Here!
            </Link>
          </button>
          <div className={styles.closeWrapper}>
            <div className={styles.close} onClick={() => setVisible(false)}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharModal;
