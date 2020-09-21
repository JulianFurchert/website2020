import { styled } from '../stitches.config'
import Text from './Text'

const Header = () => {
  return(
    <Container>
      <Text>Julian Furchert</Text>
      <Text>Menu</Text>
    </Container>
  )
}

export default Header

const Container = styled('div', {
  position: 'sticky',
  top: 0,
  backgroundColor: 'rgba(255,255,255,0.8)',
  height: 60,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 200,
  paddingX: '$6',
  backdropFilter: 'saturate(1.8) blur(20px);'
})