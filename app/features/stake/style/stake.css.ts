import { style } from '@vanilla-extract/css';
import { colors } from '../../../theme';
import { radius, size } from '../../../theme/size';
import { vars } from '../../../theme/theme.css';

export const stakeTopDiv = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center', 
  flexDirection: 'column',
  background: vars.colors.transparentBackground,
  borderRadius: radius.sm,
  width: '49%',
  height: '90px',
  padding: '0 16px',
  color: vars.colors.text
});

export const stakeButtomDiv = style({
  background: vars.colors.transparentBackground,
  borderRadius: radius.sm,
  padding: '16px 20px',
  marginTop: '.8rem',
  color: vars.colors.text
})

export const stakeInputContainer = style({
  padding: '16px',
  borderRadius: radius.sm,
  border: '1px solid rgba(197, 255, 231, 0.2)'
})

export const stakeInput = style({
  outline: 'none',
  width: '80%',
  height: '50px',
  background: 'transparent',
  fontSize: size.text2XL,
  fontWeight: '500'
})