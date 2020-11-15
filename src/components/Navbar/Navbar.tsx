import * as React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <i className="fas fa-2x fa-sun" />
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider} />
      </label>
      <i className="fas fa-2x fa-moon" />
    </nav>
  );
};

export default Navbar;
