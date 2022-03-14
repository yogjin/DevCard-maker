import React from 'react';
import styles from './Card.module.css';

const Card = ({ card }) => {
  const { name, company, title, email, message } = card;
  return (
    <>
      <div className={styles.image}>
        <img alt="profile"></img>
      </div>
      <div className={styles.data}>
        <span>{name}</span>
        <span>{company}</span>
        <div className={styles.divider}></div>
        <span>{title}</span>
        <span>{email}</span>
        <span>{message}</span>
        <div className={styles.skills}>skill img</div>
      </div>
    </>
  );
};

export default Card;
