import { keyframes, style } from '@vanilla-extract/css';
import { colors } from '../../theme';
import { radius, size } from '../../theme/size';
import { vars } from '../../theme/theme.css';

export const navBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: "space-between", 
  background: 'transparent',
  padding: '0 8rem',
  width: '100vw',
  height: '70px',
  zIndex: '1',
  position: 'relative'
});

export const link = style({
    color: vars.colors.text,
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

export const iconsStyleSM = style({
    color: vars.colors.icon,
    fontSize: '1.1rem'
})


// const shake = keyframes({
//   '0%': { transform: 'translateX(0)' },
//   '25%': { transform: 'translateX(-2px)' },
//   '50%': { transform: 'translateX(2px)' },
//   '75%': { transform: 'translateX(-2px)' },
//   '100%': { transform: 'translateX(0)' },
// });


export const gradientBtnStyle = style({
    color: 'white',
    fontWeight: '500',
    fontSize: size.textSM,
    backgroundImage: colors.buttonGradient,
    borderRadius: radius.sm,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    border: 'none',
    outline: 'none',

    selectors: {
    '&:hover': {
      transform: 'scale(1.01)',
      backgroundImage: 'linear-gradient(329deg, rgba(70,252,159,1) 5%, rgba(65,252,204,1) 100%)',
    },
}
    // '&:active': {
    //   animation: `${shake} 0.2s linear`,
    // },
    // },
})

export const transparentBtnStyle = style({
    color: 'white',
    fontWeight: '500',
    fontSize: size.textSM,
    background: colors.backgroundTransparent,
    borderRadius: radius.sm,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background 1s ease',
})

export const toggleParent = style({
    background: vars.colors.transparentBackground,
    borderRadius: radius.lg,
    width: '280px',
    height: '50px',
    padding: '4px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'start'

})

export const gradientToggleBar = style({
    height: '80%',
    width: '45%',
    borderRadius: radius.lg,
    background: colors.buttonGradient,
    position: 'absolute',
    zIndex: '0'
})

export const toggleSpan = style({
    color: vars.colors.text,
    fontWeight: '500',
    fontSize: size.textMD,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: '1',
    cursor: 'pointer',
})

export const FooterDividerStyle = style({
    width: '90%',
    height: '1px',
    background: vars.colors.transparentBg03, 
    margin: '16px 0',
    opacity: '0.8' 
})

export const FooterSection = style({
    padding: '2rem 8rem',
    width: '100%',
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: vars.colors.text
})

export const subLinkDividerStyle = style({
    width: '100%',
    height: '1px',
    background: colors.backgroundTransparent, 
    margin: '8px 0 0 0',
    opacity: '0.8' 
})


export const settingsDropDown = style({
    color: vars.colors.text,
    borderRadius: radius.sm,
    position: 'absolute',
    background: vars.colors.transparentBg03,
    width: '180px',
    right: '8rem',
    top: '6rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.3rem 0'
})

export const connectedButtonTabStyle = style({
    color: 'white',
    borderRadius: radius.sm,
    position: 'absolute',
    background: colors.backgroundGray,
    width: '250px',
    right: '-1.7rem',
    top: '4rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem'
})


export const disconnectBtn = style({
    width: '100%',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.buttonGrey50,
    borderRadius: radius.sm,
    fontSize: size.textSM,
    transition: 'background-color 0.3s ease-in-out',

    ':hover': {
        backgroundColor: '#203531'
    }
})
