import Navigation from '../../components/Navigation/Navigation';
import Form from '../../components/Form/Form';
import styles from './FormPage.module.css';

// type Props = {};

function FormsPage() {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.header}>Add card</h1>
      <Form />
    </div>
  );
}

export default FormsPage;
