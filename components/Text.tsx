import { styled } from '../stitches.config'

const Text = styled('p', {
  fontFamily: '$body',
  color: 'inherit',
  lineHeight: 1.5,
  maxWidth: 900,
  variants: {
    variant: {
      headline: {
        fontWeight: '$heading',
        fontSize: '$7',
        marginBottom: 20
      },
      headline2: {
        fontWeight: '$heading',
        fontSize: '$6',
        marginBottom: 20
      },
      bodyLarge: {
        fontSize: '$6',
        fontWeight: '$body',
      },
      body: {
        fontSize: '$3',
        fontWeight: '$body'
      },
      body2: {
        fontSize: '$2',
        fontWeight: '$body'
      },
      caption: {
        fontSize: '$1',
        fontWeight: '$body'
      },
    },
  },
})

export default Text