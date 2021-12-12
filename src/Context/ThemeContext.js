import React from "react";

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("black");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
