import React from 'react';
import { styled } from '../stitches.config'
import { Menu, Item } from './Menu';
import { ModalDialog } from './Dialog';
import { X } from 'react-feather';
import { OverlayContainer } from "@react-aria/overlays";
import IconButton from './IconButton';

const MenuDialog: React.FC<{onClose: () => void}> = ({ onClose }) => {
  return(
    <OverlayContainer>
      <ModalDialog
        isOpen
        onClose={onClose}
        isDismissable
      >
        <Header>
          <IconButton onPress={onClose}>
          <X />
        </IconButton>
        </Header>
        <Content>
          <Menu
            defaultSelectedKeys={["two"]}
            onAction={() => onClose()}
            aria-label="Actions"
            autoFocus="first"
          >
            <Item key="one">One</Item>
            <Item key="two">Two</Item>
            <Item key="three">Three</Item>
          </Menu>
        </Content>
      </ModalDialog>
    </OverlayContainer>
  )
}

const Header = styled('div', ({
  paddingY: '$3',
  paddingX: '$4',
  display: 'flex',
  justifyContent: 'flex-end',
  borderBottom: '1px solid',
  borderColor: '$gray500'
}))

const Content = styled('div', ({
  padding: '0',
}))

export default MenuDialog