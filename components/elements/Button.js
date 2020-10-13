import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {space, themeGet} from 'styled-system';
import useShowLink from '../../hooks/useUpdateBreadcrump';


const StyledButton = styled.div`
  display: inline-block;
  font-weight: 400;
  min-width: 200px;
  height: 40px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${themeGet('colors.background')};
  color: ${themeGet('colors.text')};
  border: 1px solid ${themeGet('colors.text')};
  &:hover{
    background-color: ${themeGet('colors.text')};
    color: ${themeGet('colors.background')};
  }
  ${space}
`

const Button = ({title, link, ...rest }) => {
  const internal = /^\/(?!\/)/.test(link);
  const [handleMouseEnter, handleMouseLeave] = useShowLink(link);
  if(internal) return <LocalLink title={title} link={link} {...rest} />

  return (
    <a href={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledButton primary="primary" {...rest}>
        {title}
      </StyledButton>
    </a>
  )
}

const LocalLink = ({title, link, ...rest }) => {
  const [handleMouseEnter, handleMouseLeave] = useShowLink(title);
  return (
    <Link
      to={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledButton primary="primary" {...rest} >
        {title}
      </StyledButton>
    </Link>
  )
}

export default Button;

