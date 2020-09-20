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
  backgroundColor: 'white',
  height: 75,
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'space-between',
  zIndex: 200,
  paddingX: '$6'
})