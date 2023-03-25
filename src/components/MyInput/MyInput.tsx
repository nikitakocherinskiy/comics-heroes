import styles from './MyInput.module.css';

type Props = {
  type: string;
  accept: string;
};

function MyInput({ type, accept }: Props) {
  return <input type={type} accept={accept} className={styles.input} />;
}

export default MyInput;
