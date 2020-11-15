import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";

interface NavbarProps {
  themeMode: string;
  changeThemeMode: Function;
}

const Navbar: React.FC<NavbarProps> = ({
  themeMode,
  changeThemeMode,
}): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <FontAwesomeIcon
        size="2x"
        icon={["fas", "sun"]}
        className={`${themeMode === "light" && "active"}`}
      />
      <label className={styles.switch}>
        <input
          name="theme"
          type="checkbox"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const mode = themeMode === "light" ? "dark" : "light";
            changeThemeMode(mode);
          }}
          value="themeMode"
        />
        <span className={styles.slider} />
      </label>
      <FontAwesomeIcon
        size="2x"
        icon={["fas", "moon"]}
        className={`${themeMode === "dark" && "active"}`}
      />{" "}
    </nav>
  );
};

Navbar.defaultProps = {
  themeMode: "light",
};

export default Navbar;
