import React, { useEffect, useState } from 'react';
import { useAuth } from '../../services/auth';
import styles from './CardMaker.module.css';
import CardMakerInput from './CardMakerInput';
import Card from './Card';
import { getCards, pushData } from '../../services/database';
import { useRef } from 'react';
import { useCallback } from 'react';
import * as htmlToImage from 'html-to-image';

const CardMaker = (props) => {
  const { user, setUser, login, logout } = useAuth();
  const [cards, setCards] = useState([]);
  const rContainer = useRef();

  const saveImage = useCallback(() => {
    const node = rContainer.current;
    if (!node) return;

    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.href = dataUrl;
        link.download = `devCard-${user.displayName}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }, []);

  const handleInputChange = (changedCard) => {
    setCards([changedCard]);
    pushData(user.uid, changedCard);
  };

  useEffect(() => {
    getCards(user.uid).then((card) => {
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
            <>
              <div
                ref={rContainer}
                key={index}
                className={`${styles.card} ${styles[card.color]}`}
              >
                <Card card={card} />
              </div>
              <button className={styles.downloadBtn} onClick={saveImage}>
                <i className="fa fa-download"></i>
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardMaker;
