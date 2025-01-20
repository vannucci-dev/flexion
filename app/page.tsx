"use client";

import { useUserData } from "./hooks/useUser";
import styles from "./page.module.css";

export default function Home() {
  const { data: user } = useUserData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1
          className={styles.welcomeHeading}
        >{`Welcome to Flexion, ${user?.name}`}</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
