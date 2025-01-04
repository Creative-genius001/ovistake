import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme/theme.css';
import { radius, size } from './theme/size';
import { mediaQueries } from './theme/breakpoints';


globalStyle('body', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  width: '100%',
  // overflowX: 'hidden',
  fontFamily: 'Inter',
});

export const backgroundDiv = style({
  background: vars.colors.background,
  padding: '0',
  margin: '0',
  position: 'relative',
  minHeight: '100vh',
  maxWidth: '100%',
})

export const mdText = style({
    color: vars.colors.text,
    fontSize: size.textSM,
    fontWeight: '500'
})

export const transparentDiv = style({
  borderRadius: radius.sm,
  background: vars.colors.transparentBg02,
  color: 'white',
  transition: 'all 0.3s ease-in-out',

  selectors: {
    '&:hover': {
      background: vars.colors.transparentBg02Hover,
    },
  },
  

})

export const heading01 = style({
  fontWeight: '700',
  fontSize: size.text3XL,
  color: vars.colors.text,
  marginBottom: '0',
  textAlign: 'center',
  
  [mediaQueries.mobile]: {
    fontSize: size.text2XL,
    marginBottom: '20px',
    lineHeight: '40px',

  }
})

export const ETHLogoStyle = style({
  width: '1.5rem',
  height: '1.5rem',
  marginRight: '0.5rem',

  [mediaQueries.mobile]: {
    width: '1.2rem',
    height: '1.2rem',
  }
})

export const LogoStyle = style({
  width: '40px',
  height: '40px'
})