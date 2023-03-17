import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

type Props = {};

function Navigation({}: Props) {
  return (
    <div className={styles.container}>
      <Link to="/about" relative="path" className={styles.link}>
        About us
      </Link>
    </div>
  );
}

export default Navigation;
