import { IFormData } from '../Form/FormTypes';
import styles from './CardForm.module.css';

type Props = {
  data: IFormData;
};

function CardForm2({ data }: Props) {
  return (
    <div className={styles.container}>
      <p>Name: {data.name}</p>
      <p>Surname: {data.surname}</p>
      <p>Birthday: {data.birthday}</p>
      <p>Country: {data.country}</p>
      <p>State: {data.state}</p>
      <p>Gender: {data.gender}</p>
      <p>Extra presents: {data.present ? 'Yes' : 'No'}</p>
      <p className={styles.imageWrapper}>
        Profile picture:{' '}
        {data.profilePic ? (
          <img className={styles.image} src={URL.createObjectURL(data.profilePic)} />
        ) : (
          'No picture'
        )}
      </p>
    </div>
  );
}

export default CardForm2;
