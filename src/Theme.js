import React from "react";
import { ThemeProvider } from "styled-components";
import { themeModes } from "./App";

const lightTheme = {
  cardBackground: "#fff",
  textColor: "#000",
};

const darkTheme = {
  cardBackground: "#000",
  textColor: "#fff",
};

const Theme = ({ children, themeMode }) => (
  <ThemeProvider
    theme={themeMode === themeModes.LIGHT ? lightTheme : darkTheme}
  >
    {children}
  </ThemeProvider>
);

export default Theme;
