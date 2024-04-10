import { createContext, useState } from 'react';

// Crea un nuevo contexto para el tema
export const ThemeContext = createContext();

// Crea un componente proveedor que maneje el estado del tema
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Puedes cambiar 'light' a tu tema por defecto

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};