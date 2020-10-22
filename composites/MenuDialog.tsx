import React from 'react';
import Link from 'next/link'
import { styled } from '../stitches.config'
import { useRouter } from 'next/router'
import { Menu, Item } from '../components/Menu';
import { ModalDialog } from '../components/Dialog';
import { X, Coffee, Archive, Book, Sun, User } from 'react-feather';
import { OverlayContainer } from "@react-aria/overlays";
import IconButton from '../components/IconButton';
import Text from '../components/Text';

export const MenuDialog: React.FC<{onClose: () => void}> = ({ onClose }) => {
  const router = useRouter()
  const { pathname } = router;

  const handleOnAction= (to: React.ReactText) => {
    router.push(to.toString())
    onClose();
  }

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
            selectedKeys={[pathname]}
            onAction={handleOnAction}
            aria-label="Actions"
            autoFocus="first"
          >
            <Item textValue='Overview' key="/" >
              <MenuItem
                icon={<Coffee />}
                label="Home"
                href="/"
              />
            </Item>
            <Item textValue='Projects Archiv' key="/about-me" >
              <MenuItem
                icon={<User />}
                label="About Me"
                href="/about-me"
              />
            </Item>
            <Item textValue='Projects Archiv' key="/projects-archiv" >
              <MenuItem
                icon={<Archive />}
                label="Projects Archiv"
                href="/projects-archiv"
              />
            </Item>
            <Item textValue='Experience' key="/experience">
              <MenuItem
                icon={<Book />}
                label="Experience"
                href="/experience"
              />
            </Item>
            <Item textValue='Digital Garden' key="/digital-garden">
              <MenuItem
                icon={<Sun />}
                label="Digital Garden"
                href="/digital-garden"
              />
            </Item>
          </Menu>
        </Content>
      </ModalDialog>
    </OverlayContainer>
  )
}

const MenuItem: React.FC<{icon: React.ReactNode, label: string, href: string}> = props => {
  return(
    <Link href={props.href} passHref>
      <ItemLink>
        {props.icon}
        <Text css={{ marginLeft: '$4' }}>
          {props.label}
        </Text>
      </ItemLink>
    </Link>
  )
}

const ItemLink = styled('a', ({
  display: 'flex',
  paddingY: '$3',
  paddingX: '$6',
  color: 'inherit',
  textDecoration: 'inherit'
}))

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