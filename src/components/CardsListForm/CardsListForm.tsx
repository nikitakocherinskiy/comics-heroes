import { IFormData } from '../Form/FormTypes';
import CardForm from '../CardForm/CardForm';
import styles from './CardsListForm.module.css';

type Props = {
  cardList: IFormData[];
};

function CardsListForm({ cardList }: Props) {
  return (
    <div className={styles.cardsContainer}>
      {cardList.map((data, index) => (
        <CardForm key={index} data={data} />
      ))}
    </div>
  );
}

export default CardsListForm;
