// import React from 'react';
// import Link from 'next/link'
// import { DialogOverlayProps, DialogOverlay, DialogContent } from "@reach/dialog";
// import { X, Coffee, Archive, Sun, Book } from 'react-feather';
// import { styled } from '../stitches.config'
// import IconButton from './IconButton';
// import Text from './Text';

// const Menu: React.FC<DialogOverlayProps> = props => {
//   return(
//     <Overlay {...props}>
//       <Dialog aria-label="menu">
//         <Header>
//           <IconButton onClick={props.onDismiss}>
//             <X />
//           </IconButton>
//         </Header>
//         <Content>
//           <MenuList>
//             <MenuItem
//               icon={<Coffee />}
//               label="Overview"
//               href="/"
//             />
//             <MenuItem
//               icon={<Archive />}
//               label="Projects Archiv"
//               href="/projects-archiv"
//             />
//             <MenuItem
//               icon={<Book />}
//               label="Experience"
//               href="/experience"
//             />
//             <MenuItem
//               icon={<Sun />}
//               label="Digital Garden"
//               href="/digital-garden"
//             />
//           </MenuList>
//         </Content>
//       </Dialog>
//     </Overlay>
//   )
// }

// type MenuItemProps = {
//   label: string,
//   icon: any,
//   href: string
// }

// const MenuItem: React.FC<MenuItemProps> = ({icon, label, href}) => {
//   return(
//     <Item>
//       <Link href={href} passHref>
//         <ItemLink>
//           {icon}
//           <Text css={{ marginLeft: '$4' }}>
//             {label}
//           </Text>
//         </ItemLink>
//       </Link>
//     </Item>
//   )
// }

// const Overlay = styled(DialogOverlay, ({
//   zIndex: 1000,
//   background: 'rgba(30, 30, 30, 0.95)',
//   position: 'fixed',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   top: 0,
//   right: 0,
//   bottom: 0,
//   left: 0,
//   overflow: 'auto',
// }))

// const Dialog = styled(DialogContent, ({
//   zIndex: 1000,
//   width: '50vw',
//   background: 'white',
//   outline: 'none',
//   borderRadius: 12,
// }))

// const Header = styled('div', ({
//   paddingY: '$3',
//   paddingX: '$4',
//   display: 'flex',
//   justifyContent: 'flex-end',
//   borderBottom: '1px solid',
//   borderColor: '$gray500'
// }))

// const Content = styled('div', ({
//   padding: '0',
// }))

// const MenuList = styled('ul', ({
//   paddingY: '$2',
// }))

// const Item = styled('li', ({}))

// const ItemLink = styled('a', ({
//   display: 'flex',
//   paddingY: '$3',
//   paddingX: '$6',
//   color: 'inherit',
//   textDecoration: 'inherit'
// }))

// export default Menu

export default null