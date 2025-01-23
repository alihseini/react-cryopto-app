import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.h1}>
        <h1>Crypto Currency App</h1>
      </header>
      {children}
      <footer className={styles.footer}>Developed By Ali Hosseini</footer>
    </>
  );
}

export default Layout;
