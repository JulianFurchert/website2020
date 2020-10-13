import React from 'react';
import styled from 'styled-components';
import {size, space, themeGet} from 'styled-system';

const Svg = styled.svg`
  transform: ${props => props.left ? 'rotate(180deg)' : 'rotate(0)'};
  ${size}
  ${space}
  & path {
    fill: ${themeGet('colors.text')};
  }
`

export const Arrow = props => (
  <Svg viewBox="0 0 24 24" {...props} >
    <path d="M22.1 12l-6.5 9h-3.5l5.5-7.5H1.9v-3h15.7L12.1 3h3.5l6.5 9z" />
  </Svg>
)