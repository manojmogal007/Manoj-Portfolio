import React, { createContext, useState, useContext } from "react";

// Define available themes
const themes = {
  light: { backgroundColor: "#ffffff", textColor: "#000000" },
  dark: { backgroundColor: "#333333", textColor: "#ffffff" },
  blue: { backgroundColor: "#007bff", textColor: "#ffffff" },
  green: { backgroundColor: "#28a745", textColor: "#ffffff" },
  red: { backgroundColor: "#dc3545", textColor: "#ffffff" },
  yellow: { backgroundColor: "#ffc107", textColor: "#000000" },
  purple: { backgroundColor: "#6f42c1", textColor: "#ffffff" },
  pink: { backgroundColor: "#e83e8c", textColor: "#ffffff" },
  orange: { backgroundColor: "#fd7e14", textColor: "#ffffff" },
  teal: { backgroundColor: "#20c997", textColor: "#ffffff" },
};

// Create a Theme Context
const ThemeContext = createContext();   

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Theme Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); 

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ themeName: theme, changeTheme, theme: themes[theme] }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
