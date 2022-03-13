import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from './App.module.css';
import CardMaker from './components/CardMaker/CardMaker';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { auth, useAuth } from './services/auth.js';

function App() {
  const { user, setUser, login, logout } = useAuth();
  const navigate = useNavigate();

  // authContext한테 setUser 넘겨받아서 auth.js에 있는 state인 user에 setUser
  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      // 새로고침시 로그아웃되는데...
      if (result) {
        setUser(result.user);
        navigate('/cardMaker');
      }
    });
  }, []);
  return (
    <>
      <div className={styles['app-container']}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.login}>
          <Routes>
            <Route path={'/'} element={<Login />} />
            <Route path={'/cardMaker'} element={<CardMaker />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
