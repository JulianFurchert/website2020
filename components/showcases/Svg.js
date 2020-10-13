import React, { useState } from 'react';
import Showcase from '../Showcase';
import Mockup from '../Mockup';

const Svg = ({
  svg,
  mockup,
  ...schowcase
}) =>  {
  const [inView, setInView] = useState(false)

  return (
    <Showcase
      {...schowcase}
      onInView={()=>setInView(true)}
    >
      <Mockup {...mockup} loaded={inView}>
        {inView && svg}
      </Mockup>
    </Showcase>
  )
}

export default Svg;