import React from 'react';
import { styled } from '../stitches.config'
import { Showcase, ShowcaseProps } from './Showcase';

type CaseVideoProps = ShowcaseProps & {
  videoId: string
}

export const CaseVideo: React.FC<CaseVideoProps> = ({ videoId, ...viewcase }) =>  {
  const url = `http://res.cloudinary.com/julianfurchert/video/upload/v1/portfolio/${videoId}`

  return (
    <Showcase {...viewcase}>
      <StyledVideo
        playsInline
        loop
        autoPlay
      >
        <source src={url} type="video/mp4" />
      </StyledVideo>
    </Showcase>
  )
}

const StyledVideo = styled('video', {
  position: "relative",
  width: "100%", 
  height: "auto"
})
