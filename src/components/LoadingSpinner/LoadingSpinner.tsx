import styles from './LoadingSpinner.module.css';

function LoadingSpinner() {
  return (
    <div className={styles.loading} data-testid="loading-spinner">
      <div className={`${styles.spinner} ${styles.color}`}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
