import React from 'react'
import { useOverlayTriggerState } from "@react-stately/overlays";
import { styled } from '../stitches.config'
import Text from '../components/Text'
import Menu from './MenuDialog'
import TextButton from '../components/TextButton'
import { ThemeToggle } from '../components/ThemeToggle'
import Flex from '../components/Flex'

type HeaderProps = {
  toggleTheme: () => void
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  let state = useOverlayTriggerState({});

  return(
    <React.Fragment>
      <Container>
        <Text>
          Julian Furchert
        </Text>
        <Flex css={{justifyContent: 'center'}}>
          <TextButton onPress={state.open}>
            Menu
          </TextButton>
          <ThemeToggle toggleTheme={toggleTheme} /> 
        </Flex>
      </Container>
      {state.isOpen && (
        <Menu onClose={state.close} />
      )}
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