import { the } from '@chakra-ui/theme';

const breakpoints = ['30em', '48em', '62em', '80em'];
// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const customtheme = {
  ...theme,
  breakpoints,
  fonts: {
    ...theme.fonts,
    // heading: '"SourceSansBlack" ,sans-serif',
    // bold: '"SourceSansBold" ,sans-serif',
    // medium: '"SourceSansSemiBold" ,sans-serif',
    // light: '"SourceSansSemiLight", san-serif',
    // body: '"SourceSans", sans-serif',
  },
  fontSizes: {
    ...theme.fontSizes,
    xx: '.55rem',
    tiny: '.68rem',
    '7xl': '5rem',
    '8xl': '6rem',
  },
  space: {
    ...theme.space,
    14: '3.5rem',
    60: '15rem',
    70: '18rem',
    80: '20rem',
    85: '23rem',
    87: '24rem',
    90: '25rem',
    108: '27rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    125: '45rem',
    127: '48rem',
    130: '55rem',
    135: '60rem',
    140: '70rem',
    145: '76rem',
  },
};
