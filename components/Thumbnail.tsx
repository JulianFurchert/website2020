import React from 'react';
import { styled } from '../stitches.config'
import { motion, AnimationControls } from "framer-motion"
import { Cursor, CursorVariants } from "./Cursor"

type ThumbnailProps = {
  mouseAnimation: AnimationControls,
  mouseVariant: CursorVariants,
  withoutMouse?: boolean,
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  mouseAnimation,
  mouseVariant,
  withoutMouse,
  children
}) => {
  return (
    <Container whileHover="hover">
      {children}
      {!withoutMouse && (
        <motion.div
          transition={{ duration: 1 }}
          animate={mouseAnimation} 
          style={{
            top: '-200%',
            left: '-200%',
            zIndex: 100, 
            position: 'absolute',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Cursor variant={mouseVariant} />
        </motion.div>
      )}
    </Container>
  )
}

export default Thumbnail

export const Container = styled(motion.div, {
  position: 'relative',
  overflow: 'hidden',
  color: 'black',
  height: '100%',
  width: '100%',
  transition: 'color 0.15s ease, border-color 0.15s ease',
})

export const circleIndex = (i: number) => i < 2 ? i + 1 : 0

export const outsidePosition = () => {
  const num = Math.ceil(Math.random() * 4)
  if(num === 1){
    return {
      top: '-20%',
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
      left: '-20%',
    }
  }
}

const position = () => `${Math.ceil(Math.random() * 100)}%`