import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import Cursor from "../components/Cursor"
import Box from "../components/Box"
// import Thumbnail from '../components/Thumbnail'
// import { calculateA } from './framo-glyphs';
// console.log(calculateA(420,620))
// console.log(calculateA(420 * 0.2,620))
// console.log(calculateA(420,620 * 0.1))

const paths = [
  [
    'M108.5 310 L311.5 310',
    'M7 613 L210 7 L210 7 L413 613'
  ],
  [
    'M25 310 L59.5 310',
    'M7 613 L42 7 L42 7 L77 613'
  ],
  [
    'M7 31 L413 31',
    'M7 55 L7 7 L413 7 L413 55 '
  ],
]

const Animation = () => {
  const [index, setIndex] = useState(0);
  const area = useAnimation();
  const mouse = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await area.start({ 
        width: '100%',
        height: '100%',
        transition: { 
          duration: 1,
          delay: 2
        },
      })
      await area.start({ 
        width: '100%',
        height: '20%',
        transition: { 
          duration: 1,
          delay: 2
        },
      })
      await area.start({ 
        width: '100%',
        height: '100%',
        transition: { 
          duration: 1,
          delay: 2
        },
      })
      await area.start({ 
        width: '10%',
        height: '100%',
        transition: { 
          duration: 1,
          delay: 2
        },
      })
      setIndex((i: number) =>  i < 2 ? i + 1 : 0)
    }
    sequence()
  }, [index])

  return (
    <Box
      css={{
        position: 'relative',
        overflow: 'hidden',
        transition: 'color 0.15s ease, border-color 0.15s ease',
        '&:hover': {
          color: '$primary'
        }
      }}
    >
      <motion.div 
        animate={area}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'gray',
          height: '100%',
          width: '10%',
        }}
      />
      <Box
        css={{
          position: 'absolute',
          left: 0,
          top: 0
        }}
      >
        <svg width="640" height="420" viewBox="0 0 640 464" >
          <g strokeWidth={4} stroke="currentColor" fill="none">
            <motion.path 
              d={paths[0][0]}
              animate={{
                d: paths[1][0]
              }}
              transition={{
                duration: 1,
              }}
            />
            <motion.path 
              d={paths[0][1]} 
              animate={{
                d: paths[1][1]
              }} 
              transition={{
                duration: 1,
              }}
            />
          </g>
        </svg>
      </Box>
    </Box>
  )
}

export default Animation