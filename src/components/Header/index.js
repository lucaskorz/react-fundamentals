import React from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { Container } from "./styles";

export default function Header() {
    return (
      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button onClick={handleToggleTheme} type="button">
              {theme === "dark" ? "🌚" : "🌞"}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
}
