import Navigation from '../../components/Navigation/Navigation';
import Form from '../../components/Form/Form';
import styles from './FormPage.module.css';
import { useState } from 'react';
import { IFormData } from '../../components/Form/FormTypes';
import CardsListForm from '../../components/CardsListForm/CardsListForm';

// type Props = {};

function FormsPage() {
  const [cardList, setCardList] = useState<IFormData[]>([]);

  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.header}>Add card</h1>
      <Form setCardList={setCardList} />
      <CardsListForm cardList={cardList} />
    </div>
  );
}

export default FormsPage;
