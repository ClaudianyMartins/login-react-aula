import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Tema/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Tema/Themes";
import "./styles.css";
import Routes from "./router";

export default function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <button className="btn" onClick={themeToggler}>
            Alterar tema
          </button>
          <Routes />
        </div>
      </>
    </ThemeProvider>
  );
}
