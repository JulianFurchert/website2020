import React, { useEffect } from 'react';
import { motion, useMotionValue, animate } from "framer-motion"
import { Thumbnail, Svg } from "../components"
import { CssProps } from "../components/Thumbnail"
import { svgPathProperties } from "svg-path-properties";

const animationPath = new svgPathProperties("M -100, 100 L 0,100 C 350,100 300,300 640,300 L 740,300");
const animationPathLength = animationPath.getTotalLength();

const Animation: React.FC<CssProps> = props => {
  const time = useMotionValue(0)
  const x = useMotionValue(-100)
  const y = useMotionValue(100)

  useEffect(() => {
    function updatePostion() {
      let pos = animationPath.getPointAtLength(time.get())
      x.set(pos.x)
      y.set(pos.y)
    }

    const unsubscribeTime = time.onChange(updatePostion);
    animate(time, animationPathLength, { duration: 2, repeatDelay: 1, repeat: Infinity, })
    return () => unsubscribeTime()
  }, [])

  return(
    <Thumbnail {...props}>
      <Svg viewBox="0 0 640 420" width="100%" css={{ backgroundColor: '$surface' }}>
        <motion.circle cx={x} cy={y} r="50" stroke="none" fill="currentColor" />
        <path d="M 0,150 C 350,150 300,350 640,350 L 640,420 L 0,420 Z" stroke="none" fill="currentColor" ></path>
      </Svg>
    </Thumbnail>
  )
}

export default Animation