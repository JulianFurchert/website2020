import React from 'react';
import styled, { keyframes } from 'styled-components';
import { themeGet } from 'styled-system';

const clip = keyframes`
  0% {transform: rotate(0deg) scale(1)}
  50% {transform: rotate(180deg) scale(0.8)}
  100% {transform: rotate(360deg) scale(1)}
`;

const StyledSpinner = styled.div`
  background: transparent !important;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 4px solid;
  border-color: black;
  border-bottom-color: transparent;
  display: inline-block;
  animation: ${clip} 0.75s 0s infinite linear;
  animation-fill-mode: both;
`

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = props => {
  return (
    <Container>
      <StyledSpinner />
    </Container>
  )
}

export default Spinner;