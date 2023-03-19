import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './AboutPage.module.css';

type Props = {};

function AboutPage({}: Props) {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.header}>About us</h1>
    </div>
  );
}

export default AboutPage;
