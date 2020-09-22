import { styled } from '../stitches.config'
import BaseButton from './BaseButton'

const IconButton = styled(BaseButton, {
  '& svg': {
    display: 'block',
    color: '$gray600'
  }
})

export default IconButton