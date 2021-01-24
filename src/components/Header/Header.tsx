import React from "react";
import logo from "@assets/images/logo/lemoncode.png";
import styles from "./Header.module.css";

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="lemoncode" />
        <h1>Master Lemoncode - Modulo 3 Bundling</h1>
      </header>
    </>
  );
};

export default Header;
