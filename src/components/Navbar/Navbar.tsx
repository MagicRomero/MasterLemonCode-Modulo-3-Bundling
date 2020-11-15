import * as React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC<{ mode: string }> = ({ mode }): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <i className={`fas fa-2x fa-sun ${mode === "light" && "active"}`} />
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider} />
      </label>
      <i className={`fas fa-2x fa-moon ${mode === "dark" && "active"}`} />
    </nav>
  );
};

Navbar.defaultProps = {
  mode: "light",
};

export default Navbar;
