import React, { useEffect, useState } from 'react';
import { useAnimation, motion } from "framer-motion"
import { Thumbnail, Svg, circleIndex, outsidePosition } from "../components"

const mousePosition = [
  {
    start: { top: '50%', left: '30%'},
    end: { top: '50%', left: '95%'}
  },
  {
    start: { top: '95%', left: '50%'},
    end: { top: '30%', left: '50%'}
  },
  {
    start: { top: '30%', left: '95%'},
    end: { top: '95%', left: '30%'}
  }
]

const areaPosition = [
  {
    width: 580,
    height: 360, 
  },
  {
    width: 580,
    height: 120, 
  },
  {
    width: 160,
    height: 360, 
  },
]

const ThumbnailAnimation: React.FC = () => {
  const [index, setIndex] = useState(0);
  const mouse = useAnimation();
  const area = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      mouse.set(outsidePosition())
      await mouse.start({
        ...mousePosition[index].start,
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      area.start({
        ...areaPosition[index],
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      await mouse.start({
        ...mousePosition[index].end,
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      await mouse.start({
        ...outsidePosition(),
        transition: {
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
      <Svg viewBox="0 0 640 420" width="100%">
        <motion.rect 
          {...areaPosition[2]}
          animate={area} 
          transform="translate(30 30)"
          fill="currentColor" 
          fillOpacity="0.1"
          stroke="none"
        />
      </Svg>
    </Thumbnail>
  )
}

export default ThumbnailAnimation