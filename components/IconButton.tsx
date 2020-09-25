import { styled } from '../stitches.config'
import BaseButton from './BaseButton'

export const IconButton = styled(BaseButton, {
  '& svg': {
    display: 'block',
    color: '$gray600'
  }
})

export default IconButton