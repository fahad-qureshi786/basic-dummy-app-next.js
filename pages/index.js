import { Fragment } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <div>
        <button className={styles.btn}>
          <Link href="/about">About</Link>
        </button>
        <button className={styles.btn}>
          <Link href="/help">Help</Link>
        </button>
        <br />
        <br />
        <Link href="/views/fahad">Fahad point of view about the Next.js</Link>
      </div>
      <div className={styles.container}>
        <h1>Hello dear 💘💘💘💘</h1>
      </div>
    </Fragment>
  );
}
