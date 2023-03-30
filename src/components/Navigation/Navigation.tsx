import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <div className={styles.container}>
      <Link to="/" relative="path" className={styles.link}>
        Main Page
      </Link>
      <Link to="/about" relative="path" className={styles.link}>
        About us
      </Link>
      <Link to="/forms" relative="path" className={styles.link}>
        Forms
      </Link>
    </div>
  );
}

export default Navigation;
