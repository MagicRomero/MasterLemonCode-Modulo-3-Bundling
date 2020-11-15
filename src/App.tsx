import { hot } from "react-hot-loader/root";
import * as React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = (): JSX.Element => {
  const [themeMode, setMode] = useState<string>("light");

  return (
    <>
      <Navbar themeMode={themeMode} changeThemeMode={setMode} />
    </>
  );
};

export default hot(App);
