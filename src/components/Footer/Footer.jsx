import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
  return (
    <span
      className={styles.copytight}
    >{`© 2022 yogjin <youngjin988@gmail.com>`}</span>
  );
};

export default Footer;
