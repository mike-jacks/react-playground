import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>Hello Gabe!</h1>
        <nav className={styles.nav}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </nav>
      </header>
      <main>
        <section>
          <h2>Items</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
            </div>
          </ul>
        </section>
      </main>
    </>
  );
}
