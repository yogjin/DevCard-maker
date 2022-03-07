import React from 'react';
import styles from './Login.module.css';
import signInWithRedirectGoogle from '../../services/auth/methods';

const Login = (props) => {
  return (
    <div className={styles['auth-container']}>
      <span className={styles.text}>Login with</span>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.google}`}
          onClick={signInWithRedirectGoogle}
        >
          <img src="./image/google.png" alt="image-google" />
        </button>
        <button className={`${styles.button} ${styles.github}`}>
          <img src="./image/github.png" alt="image-github" />
        </button>
      </div>
    </div>
  );
};

export default Login;
