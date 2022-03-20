import React from 'react';
import { uploadImage } from '../../services/image_uploader';
import styles from './CardMakerInput.module.css';

const CardMakerInput = ({ card, handleInputChange }) => {
  const { name, company, title, email, message, color, skills, url } = card;

  const handleChange = (e, key) => {
    const changedCard = { ...card, [key]: e.target.value };
    handleInputChange(changedCard);
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    if (e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    const imageUrl = await uploadImage(file);
    const changedCard = { ...card, url: imageUrl };
    handleInputChange(changedCard);
  };

  return (
    <>
      <div className={styles.line}>
        <input
          className={styles.name}
          placeholder="name"
          value={name}
          onChange={(e) => {
            handleChange(e, 'name');
          }}
        ></input>
        <input
          className={styles.company}
          placeholder="company"
          value={company}
          onChange={(e) => {
            handleChange(e, 'company');
          }}
        ></input>
        <select
          className={styles.color}
          onChange={(e) => {
            handleChange(e, 'color');
          }}
          defaultValue={color}
        >
          <option value="black">black</option>
          <option value="white">white</option>
        </select>
      </div>
      <div className={styles.line}>
        <input
          className={styles.title}
          placeholder="title"
          value={title}
          onChange={(e) => {
            handleChange(e, 'title');
          }}
        ></input>
        <input
          className={styles.email}
          placeholder="email"
          value={email}
          onChange={(e) => {
            handleChange(e, 'email');
          }}
        ></input>
      </div>
      <div className={styles.line}>
        <input
          className={styles.message}
          placeholder="message"
          value={message}
          onChange={(e) => {
            handleChange(e, 'message');
          }}
        ></input>
        <input
          className={styles.skills}
          placeholder="skills"
          value={skills}
          onChange={(e) => {
            handleChange(e, 'skills');
          }}
        ></input>
      </div>
      <div className={styles.line}>
        <label for="file" className={styles.fileUploadButton}>
          프로필 업로드
        </label>
        <input
          id="file"
          className={styles.fileUploadInput}
          type="file"
          onChange={handleUploadImage}
        />
      </div>
    </>
  );
};

export default CardMakerInput;
