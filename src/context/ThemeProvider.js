import React, { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleMode: () => {},
});

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDark = () => {
    setIsDarkMode(true);
  };
  const toggleLight = () => {
    setIsDarkMode(false);
  };
  const value = useMemo(
    () => ({ isDarkMode, toggleDark, toggleLight }),
    [isDarkMode, toggleDark, toggleLight]
  );
  // value prop이 매번 렌더링될 때마다 -> 새로운 객체 생성됨 => memoize(캐시) 해줘야 함

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
