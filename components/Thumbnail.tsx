import React from 'react';
import Link from 'next/link'
import { styled } from '../stitches.config'
import { motion, AnimationControls } from "framer-motion"
import { Cursor, CursorVariants } from "./Cursor"
import { Text } from "./Text"

export type ThumbnailProps = CssProps & {
  mouseAnimation?: AnimationControls,
  mouseVariant?: CursorVariants,
  withoutMouse?: boolean,
  url?: string,
  name?: string,
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  mouseAnimation,
  mouseVariant,
  withoutMouse,
  url = '/',
  css,
  name,
  children
}) => {
  return (
    <Link href={url} passHref>
      <Container 
        css={css}
        whileHover={{ y: -10 }}
      >
        {children}
        {!withoutMouse && mouseAnimation && (
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
        <Text variant="body" css={{marginTop: '$2'}}>
          {name}
        </Text>
      </Container>
    </Link>
  )
}

export default Thumbnail

export type CssProps = { css?: React.ComponentProps<typeof Container>['css']}

export const Container = styled(motion.a, {
  display: 'block',
  position: 'relative',
  overflow: 'hidden',
  color: 'black',
  height: '100%',
  width: '100%',
  cursor: 'pointer'
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