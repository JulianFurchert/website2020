import React, { useState } from 'react';
import { styled } from '../../stitches.config'
import Img from "../Img";
import Spinner from '../Spinner';
import Showcase from '../Showcase';
import Mockup from '../Mockup';

const LoadingContainer = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
})

const StyledVideo = styled('video', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 'auto',
  fontSize: 24,
  textAlgin: 'center'
})

type VideoPlayerProps = {
  aspectRatio: number,
  poster: string,
  video: string,
  mockup: any
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  video,
  poster,
  mockup,
  aspectRatio,
  ...schowcase
}) => {
  const [loaded, setLoaded] = useState(false)

  return(
    <Showcase {...schowcase}>
      <Mockup
        {...mockup}
        loaded={loaded}
        ratio={aspectRatio}
      >
        <>
          <Img
          style={{position: "absolute"}}
          onLoad={()=>setLoaded(true)}
          src={poster}
          />
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
          <StyledVideo
            playsInline
            // reload="auto"
            loop
            // muted="muted"
            autoPlay
          >
            <source src={video} type="video/mp4" />
          </StyledVideo>
        </>
      </Mockup>
    </Showcase>
  )
}

export default VideoPlayer;