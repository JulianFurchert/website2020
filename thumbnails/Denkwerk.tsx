import React, { useEffect, useState } from 'react';
import { useAnimation } from "framer-motion"
import { Thumbnail, circleIndex, outsidePosition } from "../components"

const ThumbnailAnimation: React.FC = () => {
  const [index, setIndex] = useState(0);
  const mouse = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await mouse.start({
        top: '50%',
        left: '50%',
      })
      await mouse.start({
        ...outsidePosition(),
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      setIndex(circleIndex)
    }
    sequence()
  }, [index])

  return(
    <Thumbnail
      mouseAnimation={mouse}
      mouseVariant="pointer"
    >
    </Thumbnail>
  )
}

export default ThumbnailAnimation