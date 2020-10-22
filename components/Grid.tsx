import { styled } from '../stitches.config'

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  columnGap: '$5',
  rowGap: '$5',
  variants: {
    size: {
      large: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      }
    }
  }
})

export default Grid