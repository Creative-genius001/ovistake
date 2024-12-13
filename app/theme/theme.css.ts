import { createTheme, createThemeContract } from '@vanilla-extract/css';
import { colors } from './colors';

// Define theme variables
export const vars = createThemeContract({
  colors: {
    background: '',
    text: '',
    icon: ''
  },
});

// Create light and dark themes
export const lightTheme = createTheme(vars, {
  colors: {
    background: '#ffffff',
    text: '#333333',
    icon: 'black'
  },
});

export const darkTheme = createTheme(vars, {
  colors: {
    background: colors.backgroundGradient ,
    text: '#ffffff',
    icon: '#ffffff'
  },
});
