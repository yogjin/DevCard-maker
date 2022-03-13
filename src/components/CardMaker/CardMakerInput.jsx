import React from 'react';
import styles from './CardMakerInput.module.css';

const CardMakerInput = (props) => {
  return (
    <>
      <div className={styles.line}>
        <input className={styles.name} placeholder="name"></input>
        <input className={styles.company} placeholder="company"></input>
        <select className={styles.color}>
          <option value="black">black</option>
          <option value="black">white</option>
        </select>
      </div>
      <div className={styles.line}>
        <input className={styles.title} placeholder="title"></input>
        <input className={styles.email} placeholder="email"></input>
      </div>
      <div className={styles.line}>
        <input className={styles.message} placeholder="message"></input>
        <input className={styles.skills} placeholder="skills"></input>
      </div>
      <div className={styles.line}>
        <div className={styles.image}>image</div>
        <div className={styles.add}>Add</div>
      </div>
    </>
  );
};

export default CardMakerInput;
