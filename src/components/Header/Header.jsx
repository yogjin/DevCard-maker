import React from 'react';
import { useAuth } from '../../services/auth';
import styles from './Header.module.css';

const Header = (props) => {
  const { user, logout } = useAuth();

  return (
    <>
      <span className={styles.title}>{`< CreateDevCard />`}</span>
      {user && (
        <button className={styles.signOut} onClick={logout}>
          <i className="fa fa-sign-out"></i>
        </button>
      )}
    </>
  );
};

export default Header;
