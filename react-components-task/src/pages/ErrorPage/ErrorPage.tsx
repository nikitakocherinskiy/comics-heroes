import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './ErrorPage.module.css';

type Props = {};

export default function ErrorPage({}: Props) {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.heading}>Sorry, we couldn't find that page</h1>
    </div>
  );
}
