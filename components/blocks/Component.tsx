import React, { useState } from 'react';
import { styled } from '../../stitches.config'
import Showcase from '../Showcase';
import Mockup from '../Mockup';

const Container = styled('div', {
  position: "relative", 
  width: "100%", 
  height: "100%" 
})

const ComponentWrapper =  ({
  component,
  mockup,
  ...schowcase
}) => {
  const [inView, setInView] = useState(false);
  return (
    <Showcase
      {...schowcase}
      onInView={()=>setInView(true)}
    >
      <Mockup {...mockup} loaded={inView}>
        <Container>
          {component}
        </Container>
      </Mockup>
    </Showcase>
  )
}

export default ComponentWrapper;