// app/context/ThemeProvider.tsx
'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { lightTheme, darkTheme } from '../theme/theme.css'

interface ThemeContextProps {
  theme: string;
  toggleTheme: (subItemName: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: darkTheme,
    toggleTheme: ()=> {}
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(darkTheme);

  // Persist theme using localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = (subItemName: string) => {
    if(subItemName === 'Light'){
      setTheme(lightTheme)
    }
    if(subItemName === 'Dark'){
      setTheme(darkTheme)
    }
    else{
      return
    }
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
