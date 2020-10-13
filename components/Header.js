import React from 'react';
import styled from 'styled-components';
import { themeGet, space } from 'styled-system';
import Breadcrumb from './Breadcrumb';
import Settings from './ThemeSettings';

const StyledHeader = styled.div`
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 48px;
  background-color: ${themeGet('colors.background')};
  z-index: 800;
  ${space}
  /* border-bottom: 1px solid ${themeGet('colors.text')}; */
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
`

const Header = ({navigation}) => {
  return (
    <StyledHeader px={[16, 40]}>
      <Content>
        <Breadcrumb navigation={navigation}/>
        <Settings />
      </Content>
    </StyledHeader>
  )
}

export default Header
