import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Tema/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Tema/Themes";
import "./styles.css";
import Routes from "./router";
import Switch from "react-switch";

const useStateWithLocalStorage = (localStorageKey) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem(localStorageKey) || "light"
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, theme);
  }, [theme]);

  return [theme, setTheme];
};

export default function App() {
  const [theme, setTheme] = useStateWithLocalStorage("@Theme");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.clear();
    localStorage.setItem("@Theme", theme);
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
