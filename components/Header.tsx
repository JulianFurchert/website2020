import React from 'react'
import { styled } from '../stitches.config'
import Text from './Text'
import Menu from './Menu'
import TextButton from './TextButton'

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const open = () => setShowMenu(true);
  const close = () => setShowMenu(false);

  return(
    <React.Fragment>
      <Container>
        <Text>
          Julian Furchert
        </Text>
        <TextButton onClick={open}>
          Menu
        </TextButton>
      </Container>
      <Menu 
        isOpen={showMenu} 
        onDismiss={close}  
      />
    </React.Fragment>
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