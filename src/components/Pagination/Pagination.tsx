import styles from './Pagination.module.css';

type Props = {
  page: number;
  totalPages: number;
  handleNextClick: React.MouseEventHandler<HTMLButtonElement>;
  handlePrevClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Pagination = ({ page, totalPages, handleNextClick, handlePrevClick }: Props) => {
  return (
    <div className={styles.paginationWrapper}>
      <div>
        <button className={styles.paginationButton} disabled={page === 1} onClick={handlePrevClick}>
          Prev
        </button>
        <span>{`Page ${page} of ${totalPages}`}</span>
        <button
          className={styles.paginationButton}
          disabled={page === totalPages}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
