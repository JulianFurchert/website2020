import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import Cursor from "../components/Cursor"
import Box from "../components/Box"

const Animation = () => {
  const [index, setIndex] = useState(0);
  const area = useAnimation();

  useEffect(() => {
    const sequence = async () => {}
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
        }}
      />
    </Box>
  )
}

export default Animation