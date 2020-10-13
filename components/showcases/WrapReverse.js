import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
`

const WrapReverse = ({children}) => (
  <Container>{children}</Container>
)

export default WrapReverse;