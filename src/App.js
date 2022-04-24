import React, { Component } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import useLocalState from "./styles/themes/themeLocalStorage";
import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";

import themes from "./styles/themes";

export default function App() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
}
