import styles from './CardItem.module.css';
import CharModal from '../CharModal/CharModal';
import { useState } from 'react';

type Props = {
  id: number;
  name: string;
  image: string;
  description: string;
};

function CardItem({ name, image, description, id }: Props) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setIsVisibleModal(true);
  };

  return (
    <div className={styles.container}>
      <div>
        <img src={image} className={styles.image} alt={name} />
        <div>
          <h1 className={styles.header}>{name}</h1>
          <p>{description.slice(0, 100) + '...'}</p>
          <button className={styles.button}>
            <a className={styles.link} onClick={handleClick}>
              Read more
            </a>
          </button>
        </div>
      </div>
      <CharModal visible={isVisibleModal} id={id} setVisible={setIsVisibleModal} />
    </div>
  );
}

export default CardItem;
