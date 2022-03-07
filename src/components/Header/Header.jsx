import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  return <span className={styles.title}>{`< CreateDevCard />`}</span>;
};

export default Header;
