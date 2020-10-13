import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Caption } from './elements/Text';

const None = styled.div`
  max-width: 100%;
  overflow: hidden;
  ${color}
`

const Simple = styled.div`
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  ${color}
`

const Default = styled.div`
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.16);
  overflow: hidden;
  ${color}
`

const WindowContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.16);
  overflow: hidden;
  padding: 0;
  ${color}
`

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${color}
`

const Controls = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{position:'absolute', left: '12px'}} width="54" height="14" viewBox="0 0 54 14">
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle>
      <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle>
      <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle>
    </g>
  </svg>
)

const Window = ({title, bg, color, children}) => {
  return (
    <WindowContainer bg={bg}>
      <Header>
        <Controls/>
        {title && <Caption color={color}>{title}</Caption>}
      </Header>
      {children}
    </WindowContainer>
  )
}

const Template = ({template, title, bg, color, children}) => {
  if(template === "window"){
    return (
      <Window title={title} bg={bg} color={color}>
        {children}
      </Window>
    )
  }
  if(template === "simple"){
    return (
      <Simple bg={bg}>
        {children}
      </Simple>
    )
  }
  if(template === "default"){
    return (
      <Default bg={bg}>
        {children}
      </Default>
    )
  }
  return (
    <None bg={bg}>
      {children}
    </None>
  )
}

export default Template;