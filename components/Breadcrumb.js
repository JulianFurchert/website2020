import React from 'react';
import styled from 'styled-components';
import { Caption } from './elements/Text';
import { Arrow } from './elements/Icons';
import Link from './elements/Link';


const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`

const Breadcrumb = ({navigation}) => {
  const {currentPage, nextPage} = navigation;
  return (
      <Container>
        <Link caption to="/">
          Julian Furchert
        </Link>
        {(nextPage || currentPage) && (
          <Arrow width={12} mx="8px" right/>
        )}
        { nextPage ? (
          <Caption color="link">{nextPage}</Caption>
        ):(
          <Caption color="link">{currentPage}</Caption>
        )}
      </Container>
  )
}

export default Breadcrumb
