import { createTheme, createThemeContract } from '@vanilla-extract/css';
import { colors } from './colors';

// Define theme variables
export const vars = createThemeContract({
  colors: {
    background: '',
    text: '',
    icon: '',
    transparentBackground: '',
    transparentBg02: '',
    transparentBg02Hover: '',
    transparentBg03: ''
  },
});

// Create light and dark themes
export const lightTheme = createTheme(vars, {
  colors: {
    background: '#F2F2FE',
    text: '#111111',
    icon: 'black',
    transparentBackground: 'white',
    transparentBg02: colors.backgroundTransparentGreen,
    transparentBg02Hover: colors.backgroundTransparentGreenHover,
    transparentBg03: 'white'
  },
});

export const darkTheme = createTheme(vars, {
  colors: {
    background: colors.backgroundGradient ,
    text: '#ffffff',
    icon: '#ffffff',
    transparentBackground: colors.backgroundTransparent,
    transparentBg02: colors.backgroundTransparent,
    transparentBg02Hover: colors.backgroundTransparentHover,
    transparentBg03: colors.backgroundGray
  },
});
