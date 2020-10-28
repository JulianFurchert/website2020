import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Thumbnail, circleIndex, outsidePosition, Svg } from "../components"
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
  // const [index, setIndex] = useState(0);
  // const [imageIndex, setImageIndex] = useState(0);
  // const [cursor, setCursor] = useState<CursorVariants>('grab');
  // const mouse = useAnimation();

  // useEffect(() => {
  //   const sequence = async () => {
  //     mouse.set(outsidePosition())
  //     await mouse.start({
  //       top: '50%',
  //       left: '60%',
  //       transition: {
  //         delay: 2,
  //         duration: 1,
  //       }
  //     })
  //     setCursor('grabbing')
  //     await mouse.start({
  //       top: '50%',
  //       left: '25%',
  //       transition: {
  //         duration: 1,
  //       }
  //     })
  //     setCursor('grab')
  //     setImageIndex(circleIndex)
  //     await mouse.start({
  //       top: '70%',
  //       left: '-50%',
  //       transition: {
  //         duration: 1,
  //       }
  //     })
  //     setIndex(circleIndex)
  //   }
  //   sequence()
  // }, [index])

  return(
    <Thumbnail
      // mouseAnimation={mouse}
      // mouseVariant={cursor}
      name="Repro Front - Typeface"
      url='/projects/reprofont'
      {...props}
    >
      <Svg width="100%" viewBox="0 0 800 600" css={{backgroundColor: '$text'}}>
        <rect id="phone" stroke="white" width="268" height="540" rx="30" transform="translate(266 30)"/>
        <path id="display" fill="#fff" fill-rule="evenodd" transform="translate(255 888.521)" d="M48.354-842.036q21.453-.483,28.626-.484c10.029,0-1.988,17.786,19.288,17.739s88.554,0,98.6,0c19.528,0,8.1-17.739,17.9-17.739q7.045,0,28.879.488A19.853,19.853,0,0,1,261-822.133v465.709a19.851,19.851,0,0,1-19.8,19.9H48.8a19.851,19.851,0,0,1-19.8-19.9V-822.138A19.854,19.854,0,0,1,48.354-842.036Z" />
        <path id="bg" fill="#f2f2f2" stroke="none" d="M8,0H192a8,8,0,0,1,8,8V442a8,8,0,0,1-8,8H8a8,8,0,0,1-8-8V8A8,8,0,0,1,8,0Z" transform="translate(300 78)"/>
        <g id="Font" transform="translate(321 203)">
          <path id="Pfad_156" data-name="Pfad 156" d="M91.166,131.05v-91.9H66.638v91.9Zm0-98.229V6.33H66.638V32.821ZM121.338,137.38V39.151H96.81V137.38H60.56V39.151H36.25V137.38H6.077v59.079H30.606V163.637h96.81v32.822h24.528V137.38Zm36.249,65.643H121.338V170.2H36.25v32.821H0V131.05H30.389V32.821H60.777V0h36.25V32.821h30.389V131.05H157.8v71.972Z"/>
        </g>
      </Svg>
    </Thumbnail>
  )
}

export default ThumbnailAnimation

const Images = ({ index }: { index: number }) => {
  if(index === 0){
    return(
      <svg style={{ width: '100%' }} viewBox="0 0 640 420">
        <g>
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