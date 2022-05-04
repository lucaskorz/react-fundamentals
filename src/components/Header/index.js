import React from "react";
import { useHistory } from 'react-router-dom'

import { ThemeContext } from "../../contexts/ThemeContext";

import { Container } from "./styles";

export default function Header() {
    const history = useHistory();

    function handleNavigate() {
      history.push('/posts')
    }

    return (
      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button onClick={handleNavigate} style={{ color: '#fff' }}>Navegar</button>
            <button onClick={handleToggleTheme} type="button">
              {theme === "dark" ? "🌚" : "🌞"}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
}
