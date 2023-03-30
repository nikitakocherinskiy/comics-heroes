import data from '../../data/data';
import CardItem from '../CardItem/CardItem';
import styles from './CardsList.module.css';

function CardsList() {
  return (
    <div className={styles.container}>
      {data.data.results.map((el) => {
        return (
          <CardItem
            key={el.id}
            name={el.name}
            description={el.description || 'No description yet'}
            image={el.thumbnail.path + '.jpg'}
          />
        );
      })}
    </div>
  );
}

export default CardsList;
