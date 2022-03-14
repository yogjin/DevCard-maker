import React, { useEffect, useState } from 'react';
import { useAuth } from '../../services/auth';
import styles from './CardMaker.module.css';
import CardMakerInput from './CardMakerInput';
import Card from './Card';
import { getCards, getData } from '../../services/database';

const CardMaker = (props) => {
  const { user, setUser, login, logout } = useAuth();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards(user.uid).then((card) => {
      console.log(card);
      setCards((cards) => [card]);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.maker}>
          <span>Card Maker</span>
          <div className={styles.input}>
            <CardMakerInput />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.preview}>
          <span>Preview</span>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardMaker;
