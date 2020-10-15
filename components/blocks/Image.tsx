import React, { useState } from 'react';
import Img from  '../Img';
import Showcase from '../Showcase';
import Mockup from '../Mockup';

const Image = ({
  image,
  mockup,
  ...schowcase
}) =>  {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)

  return (
    <Showcase
    {...schowcase}
    onInView={()=>setInView(true)}
    >
      <Mockup
        {...mockup}
        ratio={image.aspectRatio}
        loaded={loaded}
      >
       { inView && (
          <Img
            style={{position: "absolute"}}
            onLoad={()=>setLoaded(true)}
            fluid={image}
          />
       )}
      </Mockup>
    </Showcase>
  )
}

export default Image;