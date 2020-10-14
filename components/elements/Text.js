import React from 'react';
import styled from 'styled-components';
import { space, fontSize, themeGet, color, style} from 'styled-system';

const columnCount = style({
  prop: 'columnCount',
  cssProperty: 'columnCount'
})

const StyledText = styled.p`
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;
  hyphens: auto;
  color: colors.text;
  line-height: 1.4;
  /* max-width: 1280px */
  ${columnCount}
  ${space}
  ${color}
  ${fontSize}
`

export const Caption = props =>(
  <StyledText {...props} fontSize={[0]}  />
);

export const Text = props => (
  <StyledText {...props} fontSize={[2,3]} />
);