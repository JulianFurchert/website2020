import React from 'react'
import { useOverlayTriggerState } from "@react-stately/overlays";
import { styled } from '../stitches.config'
import Text from '../components/Text'
import Menu from './MenuDialog'
import { TextButton, Container } from '../components'
import { ThemeToggle } from '../components/ThemeToggle'
import Flex from '../components/Flex'

type HeaderProps = {
  toggleTheme: () => void
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  let state = useOverlayTriggerState({});

  return(
    <React.Fragment>
      <StyledHeader>
        <Container>
          <Flex 
            css={{
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 60
            }}
            >
            <Text>
              Julian Furchert
            </Text>
            <Flex css={{justifyContent: 'center'}}>
              <TextButton onPress={state.open}>
                Menu
              </TextButton>
              <ThemeToggle toggleTheme={toggleTheme} /> 
            </Flex>
          </Flex>
        </Container>
      </StyledHeader>
      {state.isOpen && (
        <Menu onClose={state.close} />
      )}
    </React.Fragment>
  )
}

export default Header

const StyledHeader = styled('div', {
  position: 'sticky',
  top: 0,
  zIndex: 200,
  '&:after': {
    content: '""',
    backgroundColor: '$background',
    opacity: 0.8,
    backdropFilter: 'saturate(1.8) blur(20px)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: -1,
  }
})