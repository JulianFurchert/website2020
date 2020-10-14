import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { space, fontSize, themeGet } from 'styled-system';

const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: inherit;
  color: colors.text;
  ${space}
  ${fontSize}
`

const CustomLink = ({caption, ...props}) => (
  caption ?
  <StyledLink {...props} fontSize={[0]}  /> :
  <StyledLink {...props} fontSize={[2,3]} />
);

export default CustomLink
