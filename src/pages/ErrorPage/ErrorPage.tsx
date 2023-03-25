import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.heading}>Sorry, we couldn&apos;t find that page</h1>
    </div>
  );
}
