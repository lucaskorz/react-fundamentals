import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Footer({ onToggleTheme, selectedTheme }) {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button onClick={handleToggleTheme} type="button">
        {theme === 'dark' ? '🌚' : '🌞'}
      </button>
    </Container>
    
  );
}