import React, { useEffect } from 'react';
import { useAuth } from '../../services/auth';
import styles from './Login.module.css';

const Login = (props) => {
  const auth = useAuth();

  const handleLogin = (method) => {
    auth.login(method);
  };
  return (
    <div className={styles['auth-container']}>
      <span className={styles.text}>Login with</span>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.google}`}
          onClick={() => handleLogin('google')}
        >
          <img src="./image/google.png" alt="image-google" />
        </button>
        <button
          className={`${styles.button} ${styles.github}`}
          onClick={() => handleLogin('github')}
        >
          <img src="./image/github.png" alt="image-github" />
        </button>
      </div>
    </div>
  );
};

export default Login;
