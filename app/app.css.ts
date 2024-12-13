import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme/theme.css';
import { colors } from './theme/colors';
import { radius, size } from './theme/size';


globalStyle('body', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
});

export const backgroundDiv = style({
  background: vars.colors.background,
  padding: '0',
  margin: '0',
  position: 'relative',
  height: '100vh',
  width: '100vw'
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