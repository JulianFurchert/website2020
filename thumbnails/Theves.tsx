import React, { useEffect, useState } from 'react';
import { useAnimation } from "framer-motion"
import { Thumbnail } from "../components"

const Animation: React.FC = () => {
  const [index, setIndex] = useState(0);
  const mouse = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await mouse.start({})
      await mouse.start({})
      setIndex((i: number) =>  i < 2 ? i + 1 : 0)
    }
    sequence()
  }, [index])

  return(
    <Thumbnail
      mouseAnimation={mouse}
      mouseVariant={index > 1 ? 'zoom-out' : 'zoom-in'}
    >
    </Thumbnail>
  )
}

export default Animation