import * as React from "react";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav>
      <i className="fas fa-2x fa-sun" />
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
      <i className="fas fa-2x fa-moon" />
    </nav>
  );
};

export default Navbar;
