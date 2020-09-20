import { styled } from '../stitches.config'

const Card = styled('div', {
  textAlign: 'left',
  padding: 2,
  color: 'inherit',
  textDecoration: 'none',
  border: '1px solid black',
  borderRadius: 0,
  transition: 'color 0.15s ease, border-color 0.15s ease',
  '&:hover': {
    color: 'primary',
    borderColor: 'primary'
  }
})

export default Card