import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from './App.module.css';
import CardMaker from './components/CardMaker/CardMaker';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { useAuth } from './services/auth.js';

function App() {
  const { user, setUser, login, logout } = useAuth();
  const containerStyle = user ? styles.cardMaker : styles.login;

  return (
    <>
      <div className={`${styles['app-container']} ${containerStyle}`}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.login}>
          <Routes>
            {user ? (
              <Route path={'/cardMaker'} element={<CardMaker />} />
            ) : (
              <Route path={'/'} element={<Login />} />
            )}
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
