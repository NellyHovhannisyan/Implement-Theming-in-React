import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  bgColors: {
    lightTheme: "#fff",
    darkTheme: "#000",
  },
  textColors: {
    lightColor: "#000",
    darkColor: "#fff",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
