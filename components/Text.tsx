import { styled } from '../stitches.config'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
  maxWidth: 900,
  variants: {
    variant: {
      'headline': {
        fontSize: '$7',
        fontWeight: 600
      },
      'headline2': {
        fontSize: '$6',
        fontWeight: 600
      },
      'bodyLarge': {
        fontSize: '$6',
        fontWeight: 400
      },
      'body': {
        fontSize: '$3',
        fontWeight: 400
      },
      'body2': {
        fontSize: '$2',
        fontWeight: 400
      },
      'caption': {
        fontSize: '$1',
        fontWeight: 400
      },
    },
  },
})

export default Text