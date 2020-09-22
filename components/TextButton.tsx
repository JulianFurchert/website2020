import { styled } from '../stitches.config'
import BaseButton from './BaseButton'

const TextButton = styled(BaseButton, {
  fontFamily: '$body',
  fontSize: '$3',
  lineHeight: 1.5,
  paddingX: '$1'
})

export default TextButton