import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/workout" className={styles.navLink}>
          Workouts
        </Link>
        <Link href="/coach" className={styles.navLink}>
          AI Pose Coach
        </Link>
      </nav>
      <button className={styles.loginBtn}>Login</button>
    </header>
  );
};

export default Header;
