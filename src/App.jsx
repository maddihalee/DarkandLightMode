import Header from "./Header";
import React, { useState } from "react";
import Button from "./Button";

const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme]= useState("light")

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light" );
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`container ${theme}-theme`}>
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
