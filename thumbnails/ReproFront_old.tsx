import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Thumbnail, circleIndex, outsidePosition } from "../components"
import { CursorVariants } from "../components/Cursor"
import { CssProps } from "../components/Thumbnail"

const transition = {
  x: { type: "spring",  damping: 13 },
}

const variants = {
  enter: {
    x: '100%',
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit:{
    zIndex: 0,
    x: '-100%',
  }
}

const ThumbnailAnimation: React.FC<CssProps> = props => {
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [cursor, setCursor] = useState<CursorVariants>('grab');
  const mouse = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      mouse.set(outsidePosition())
      await mouse.start({
        top: '50%',
        left: '60%',
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      setCursor('grabbing')
      await mouse.start({
        top: '50%',
        left: '25%',
        transition: {
          duration: 1,
        }
      })
      setCursor('grab')
      setImageIndex(circleIndex)
      await mouse.start({
        top: '70%',
        left: '-50%',
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
      mouseVariant={cursor}
      {...props}
    >
      <AnimatePresence initial={false}>
        <motion.div
          style={{
            position: 'absolute',
            width: '100%'
          }}
          key={imageIndex}
          variants={variants}
          initial="enter"
          exit="exit"
          animate="center"
          transition={transition}
        >
          <Images index={imageIndex} />
        </motion.div>
      </AnimatePresence>
    </Thumbnail>
  )
}

export default ThumbnailAnimation

const Images = ({ index }: { index: number }) => {
  if(index === 0){
    return(
      <svg style={{ width: '100%' }} viewBox="0 0 640 420">
        <g>
          <rect width="640" height="420" fill="#fff"/>
          <rect fill="currentColor" fillOpacity="0.1" opacity="" width="580" height="360" transform="translate(30 30)"/>
          <path fill="currentColor" d="M132.658,179.577h33.611V53.649H132.658Zm-8.03,0V98.623H91.314v80.954Zm0-89.95V8.673H91.314V89.627ZM82.985,188.25V98.623H49.673V224.551H174.3v44.975H207.91V188.25ZM8.03,233.226v36.3H41.641v-36.3ZM215.94,278.2H166.268V233.226H49.673V278.2H0V224.551H41.641V89.627H83.282V0h49.673V44.974H174.6v134.6h41.641V278.2Z" transform="translate(211.927 70.9)"/>
        </g>
      </svg>
    )
  }
  if(index === 1){
    return(
      <svg viewBox="0 0 640 420">
        <g>
          <rect width="640" height="420" fill="#fff"/>
          <rect fill="currentColor" fillOpacity="0.1" width="580" height="360" transform="translate(30 30)"/>
          <path fill="currentColor" d="M124.925,179.577V53.649H91.314V179.577Zm0-134.6V8.673H91.314v36.3ZM166.268,188.25V53.649H132.658v134.6H82.985V53.649H49.673v134.6H8.328v80.955H41.939V224.23H174.6v44.975h33.611V188.25ZM215.94,278.2H166.268V233.226H49.673V278.2H0V179.577H41.641V44.974H83.282V0h49.673V44.974H174.6v134.6h41.641V278.2Z" transform="translate(211.927 70.9)"/>
        </g>
      </svg>
    )
  }
  if(index === 2){
    return(
      <svg viewBox="0 0 640 420">
        <g>
          <rect width="640" height="420" fill="#fff"/>
          <rect fill="currentColor" fillOpacity="0.1" width="580" height="360" transform="translate(30 30)"/>
          <path fill="currentColor" d="M166.268,179.577v-36.3H124.627V98.3H91.016v80.954h75.252Zm-41.345-89.95V49.15h8.031V134.6h33.611V8.673H91.611V89.627ZM174.6,143.276V188.25H83.282V98.623H49.673V224.551H174.3v44.975H207.91V143.276ZM8.328,233.226v36.3H41.939v-36.3ZM215.94,278.2H166.268V233.226H49.673V278.2H0V224.551H41.641V89.627H83.282V0H174.6V134.6h41.641V278.2Z" transform="translate(211.927 70.9)"/>
        </g>
      </svg>
    )
  }
  return null
}