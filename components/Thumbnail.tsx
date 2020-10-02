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
          transform: 'translate(-50%, -50%)'
        }}
        transition={{ duration: 1 }}
      >
        <Cursor variant={mouseVariant} />
      </motion.div>
    </Container>
  )
}

export default Thumbnail

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

export const circleIndex = (i: number) => i < 2 ? i + 1 : 0

export const outsidePosition = () => {
  const num = Math.ceil(Math.random() * 4)
  if(num === 1){
    return {
      top: '-120%',
      left: position(),
    }
  }
  if(num === 2){
    return {
      top: position(),
      left: '120%',
    }
  }
  if(num === 3){
    return {
      top: '120%',
      left: position(),
    }
  }
  if(num === 4){
    return {
      top: position(),
      left: '-120%',
    }
  }
}

const position = () => `${Math.ceil(Math.random() * 100)}%`