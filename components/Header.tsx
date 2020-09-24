import React from 'react'
import { useOverlayTriggerState } from "@react-stately/overlays";
import { styled } from '../stitches.config'
import Text from './Text'
import Menu from './MenuDialog'
import TextButton from './TextButton'

const Header: React.FC = () => {
  let state = useOverlayTriggerState({});

  return(
    <React.Fragment>
      <Container>
        <Text>
          Julian Furchert
        </Text>
        <TextButton onPress={state.open}>
          Menu
        </TextButton>
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