import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.navLink}>
          Home
        </a>
        <a href="#workouts" className={styles.navLink}>
          Workouts
        </a>
        <a href="#community" className={styles.navLink}>
          AI Pose Coach
        </a>
      </nav>
      <button className={styles.loginBtn}>Login</button>
    </header>
  );
};

export default Header;
