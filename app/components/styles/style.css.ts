import { style } from '@vanilla-extract/css';
import { colors } from '../../theme';
import { radius, size } from '../../theme/size';
import { vars } from '../../theme/theme.css';

export const navBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: "space-between", 
  background: 'transparent',
  position: 'absolute',
  left: '0',
  top: '0',
  padding: '0 8rem',
  width: '100vw',
  height: '70px'
});

export const link = style({
    color: colors.textPrimary,
    fontSize: size.textSM,
    marginRight: '3rem',
    fontWeight: '500'
})

export const linkDiv = style({
    display: 'flex',
    marginRight: '2rem',
    cursor: 'pointer'
})

export const iconsStyle = style({
    color: vars.colors.icon,
    fontSize: '1.4rem'
})

export const gradientBtnStyle = style({
    color: 'white',
    fontWeight: '500',
    fontSize: size.textSM,
    background: colors.buttonGradient,
    borderRadius: radius.sm,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
})