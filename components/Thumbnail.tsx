import { styled } from '../stitches.config'

const Thumbnail = styled('div', {
  position: 'relative',
  width: 640, 
  height: 420, 
  overflow: 'hidden',
  color: 'black',
  transition: 'color 0.15s ease, border-color 0.15s ease',
  '&:hover': {
    color: 'primary'
  }
})

export default Thumbnail