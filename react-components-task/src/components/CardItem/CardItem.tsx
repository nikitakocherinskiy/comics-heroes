import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardItem.module.css';

type Props = {
  name: string;
  image: string;
  description: string;
  key: number;
};

function CardItem({ name, image, description }: Props) {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <div>
        <h1 className={styles.header}>{name}</h1>
        <p>{description}</p>
        <button className={styles.button}>
          <Link to="http://marvel.com" relative="path" className={styles.link}>
            Read more
          </Link>
        </button>
      </div>
    </div>
  );
}

export default CardItem;
