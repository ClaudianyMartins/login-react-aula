import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Tema/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Tema/Themes";
import "./styles.css";
import Routes from "./router";
import Switch from "react-switch";

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

          <div class="switch__container">
            <input
              id="switch-shadow"
              class="switch switch--shadow"
              type="checkbox"
              onChange={themeToggler}
            />
            <label for="switch-shadow"></label>
          </div>
          <Switch onChange={themeToggler} />

          <Routes />
        </div>
      </>
    </ThemeProvider>
  );
}
