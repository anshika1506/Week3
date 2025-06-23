import { useTheme } from '../context/ThemeContext';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>My Admin Dashboard</h1>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
}