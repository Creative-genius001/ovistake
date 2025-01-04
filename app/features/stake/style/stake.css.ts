import { style } from '@vanilla-extract/css';
import { radius, size } from '../../../theme/size';
import { vars } from '../../../theme/theme.css';
import { mediaQueries } from '../../../theme';


export const stakeMain = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '800px',
  padding: '0',
  margin: '0 auto',
  width: '100%',

  [mediaQueries.mobile]: {
    padding: '0 1.2rem'
  }
  
});

export const stakeSection01 = style({
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '3rem',
  width: '50%',

  [mediaQueries.mobile]: {
    width: '100%'
  }
});

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
  fontWeight: '500',

  [mediaQueries.mobile]: {
    fontSize: size.textXL
  }
})