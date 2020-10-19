import { createStyled } from '@stitches/react'

const baseColors = {
  $blue: '#007aff',
  $green: '#34c759',
  $indigo: '#5856d6',
  $orange: '#ff9501',
  $pink: '#ff2d55',
  $purple: '#af52de',
  $white: "#FFFFFF",
  $black: "#000000",
  $gray: '#eeeeee',
  $darkGray: '#262626',
}

const theme = {
  colors: {
    ...baseColors,
    $primary: baseColors.$blue,
    $text: baseColors.$black,
    $background: baseColors.$white,
    $surface: baseColors.$gray,
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
    $7: '43px',
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

export const darkThemeClass = css.theme({
  ...baseColors, 
  $primary: baseColors.$blue, 
  $text: baseColors.$white, 
  $background: baseColors.$black, 
  $surface: baseColors.$darkGray
}).toString()


css.global({
  body: { 
    backgroundColor: '$background',
    color: '$text'
  },
});