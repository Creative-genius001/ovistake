import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme/theme.css';
import { colors } from './theme/colors';
import { radius, size } from './theme/size';


globalStyle('body', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  width: '100vw',
  overflowX: 'hidden',
  fontFamily: 'Inter'
});

export const backgroundDiv = style({
  background: vars.colors.background,
  padding: '0',
  margin: '0',
  position: 'relative',
  minHeight: '100vh',
  width: '100vw',
})

export const mdText = style({
    color: colors.textPrimary,
    fontSize: size.textSM,
    fontWeight: '500'
})

export const transparentDiv = style({
  borderRadius: radius.sm,
  background: colors.backgroundTransparent,
  color: 'white',

})

export const heading01 = style({
  fontWeight: '700',
  fontSize: '3.5rem',
  color: vars.colors.text,
  marginBottom: '0'
})

export const ETHLogoStyle = style({
  width: '1.5rem',
  height: '1.5rem',
  marginRight: '0.5rem'
})