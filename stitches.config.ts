import { createStyled } from '@stitches/react'

const baseColors = {
  blue: '#007aff',
  green: '#34c759',
  indigo: '#5856d6',
  orange: '#ff9501',
  pink: '#ff2d55',
  purple: '#af52de',
}

const theme = {
  colors: {
    $hiContrast: 'hsl(206,10%,5%)',
    $loContrast: 'white',

    $gray100: 'hsl(206,22%,99%)',
    $gray200: 'hsl(206,12%,97%)',
    $gray300: 'hsl(206,11%,92%)',
    $gray400: 'hsl(206,10%,84%)',
    $gray500: 'hsl(206,10%,76%)',
    $gray600: 'hsl(206,10%,44%)',

    $purple100: 'hsl(252,100%,99%)',
    $purple200: 'hsl(252,100%,98%)',
    $purple300: 'hsl(252,100%,94%)',
    $purple400: 'hsl(252,75%,84%)',
    $purple500: 'hsl(252,78%,60%)',
    $purple600: 'hsl(252,80%,53%)',

    $primary: baseColors.indigo,
  },
  space: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
  },
  sizes: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
  },
  fontSizes: {
    $1: '12px',
    $2: '13px',
    $3: '15px',
    $4: '17px',
    $5: '19px',
    $6: '21px',
    $7: '45px',
  },
  fonts: {
    $body: '"Inter",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    $monospace: '"SFMono-Regular","Consolas","Liberation Mono","Menlo",monospace',
  },
  fontWeights: {
    $body: '400',
    $heading: '600',
  },
}

export const { styled, css } = createStyled({
  tokens: theme,
  utils: {
    marginX: (config) => (
      value: keyof typeof theme['space'] | (string & {})
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (config) => (
      value: keyof typeof theme['space'] | (string & {})
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (config) => (
      value: keyof typeof theme['space'] | (string & {})
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (config) => (
      value: keyof typeof theme['space'] | (string & {})
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  breakpoints: {
    bp1: (rule) => `@media (min-width: 520px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 900px) { ${rule} }`,
  },
})