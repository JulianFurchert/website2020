import React, { useContext } from 'react';
import { Context } from 'stores/ThemeStore';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Caption } from './elements/Text';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

const Color = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${themeGet('colors.text')};
  border-radius: 6px;
  margin-left: 4px;
  margin-top: -2px;
`

const ThemeSetting = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor:pointer;
`

const Settings = () => {
  const {toggleMode, mode} = useContext(Context);
  return (
    <Container>
      <ThemeSetting onClick={toggleMode}>
        <Caption>
          { mode === 'light' ? 'dark' : 'light' }
        </Caption>
        <Color />
      </ThemeSetting>
    </Container>
  )
}

export default Settings