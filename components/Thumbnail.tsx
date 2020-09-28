import React from 'react';
import { styled } from '../stitches.config'
import { motion, AnimationControls } from "framer-motion"
import { Cursor, CursorVariants } from "./Cursor"

type ThumbnailProps = {
  mouseAnimation: AnimationControls,
  mouseVariant: CursorVariants
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  mouseAnimation,
  mouseVariant,
  children
}) => {
  return (
    <Container>
      {children}
      <motion.div
        animate={mouseAnimation} 
        style={{
          zIndex: 100, 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} 
      >
        <Cursor variant={mouseVariant} />
      </motion.div>
    </Container>
  )
}

export const Container = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  color: 'black',
  height: '100%',
  width: '100%',
  transition: 'color 0.15s ease, border-color 0.15s ease',
  '&:hover': {
    color: '$primary'
  }
})

export default Thumbnail