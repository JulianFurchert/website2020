import { styled } from '../stitches.config'

export const Container = styled('div', {
  paddingX: '$6',
  maxWidth: 1400,
  variants: {
    size: {
      large: {
        maxWidth: 2400,
      }
    }
  }
})

export default Container