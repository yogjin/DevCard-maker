import React from 'react';
import { useAuth } from '../../services/auth';
import styles from './CardMaker.module.css';
const CardMaker = (props) => {
  const { user, setUser, login, logout } = useAuth();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.maker}>
          <span>Card Maker</span>
          <div className={styles.input}></div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.preview}>
          <span>Preview</span>
          <div className={styles.card}></div>
        </div>
      </div>
    </>
  );
};

export default CardMaker;
