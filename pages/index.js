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
      </div>
      <div className={styles.container}>
        <h1>Hello dear 💘💘💘💘</h1>
      </div>
    </Fragment>
  );
}
