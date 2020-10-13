import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring'
import Img from  '../elements/Img';
import Showcase from '../Showcase';
import Mockup from '../Mockup';

import { Timeline } from '../ProcessBar';

const Gallery = ({
  images,
  mockup,
  ...schowcase
}) => {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false)

  const onRest = useCallback(() => {
    setIndex(state => (state + 1) % images.length)
  }, [])

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translateX(200px)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 1, transform: 'translateX(-50)' },
  })

  return(
    <Showcase
      {...schowcase}
      onInView={()=>setInView(true)}
      footer={
        <Timeline
          duration={4000}
          onRest={onRest}
        />
      }
    >
      <Mockup
        {...mockup}
        ratio={images[0].aspectRatio}
        loaded={loaded}
      >
      { inView && transitions.map(({ item, props, key }) => {
        return (
          <animated.div
            key={key}
            style={{
              ...props,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            <Img
              style={{position: "absolute"}}
              onLoad={()=>setLoaded("loaded")}
              fluid={images[item]}
            />
          </animated.div>
        )
      })}
      </Mockup>
    </Showcase>
  )
}

export default Gallery;