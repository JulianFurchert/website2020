import { styled } from '../stitches.config'

export const Card = styled('div', {
  textAlign: 'left',
  color: 'inherit',
  textDecoration: 'none',
  border: '1px solid black',
  borderRadius: 0,
  padding: '$6',
  transition: 'color 0.15s ease, border-color 0.15s ease',
  '&:hover': {
    color: '$primary',
    borderColor: '$primary'
  },
  variants: {
    variant: {
      preview: {
        padding: 0
      }
    }
  }
})

export default Card