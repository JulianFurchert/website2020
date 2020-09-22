import { styled } from '../stitches.config'

const BaseButton = styled('button', {
  border: 'none',
  margin: 0,
  padding: 0,
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',
  color: '$hiContrast',
  font: 'inherit',
  lineHeight: 'normal',
  '&:hover': {
    color: '$primary',
  }
})

export default BaseButton