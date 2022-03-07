import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <div className={styles['app-container']}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.login}>
          <Login />
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
