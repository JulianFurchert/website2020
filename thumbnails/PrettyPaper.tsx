import React, { useEffect, useState } from 'react';
import { useAnimation } from "framer-motion"
import { Thumbnail, Svg } from "../components"
import { CssProps } from "../components/Thumbnail"

const Animation: React.FC<CssProps> = props => {
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
      mouseVariant="pointer"
      {...props}
    >
      <Svg viewBox="0 0 640 420" width="100%">
        <path></path>
      </Svg>
    </Thumbnail>
  )
}

export default Animation