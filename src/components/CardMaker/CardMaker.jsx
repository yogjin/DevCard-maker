import React, { useEffect, useState } from 'react';
import { useAuth } from '../../services/auth';
import styles from './CardMaker.module.css';
import CardMakerInput from './CardMakerInput';
import Card from './Card';
import { getCards, pushData } from '../../services/database';

const CardMaker = (props) => {
  const { user, setUser, login, logout } = useAuth();
  const [cards, setCards] = useState([]);

  const handleInputChange = (changedCard) => {
    setCards([changedCard]);
    pushData(user.uid, changedCard);
  };

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
          <span className={styles.title}>Card Maker</span>
          {cards.map((card, index) => (
            <div key={index} className={styles.input}>
              <CardMakerInput
                card={card}
                handleInputChange={handleInputChange}
              />
            </div>
          ))}
        </div>
        <div className={styles.divider}></div>
        <div className={styles.preview}>
          <span className={styles.title}>Preview</span>
          {cards.map((card, index) => (
            <div key={index} className={`${styles.card} ${styles[card.color]}`}>
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardMaker;
