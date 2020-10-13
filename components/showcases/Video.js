import React, { useState } from 'react';
import styled from 'styled-components';
import Img from "../elements/Img";
import Spinner from '../elements/Spinner';
import Showcase from '../Showcase';
import Mockup from '../Mockup';


const LoadingContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
`

const StyledVideo = styled.video`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: auto;
  font-size: 24px;
  text-align: center;
`

const VideoPlayer = ({
  video,
  poster,
  mockup,
  ...schowcase
}) => {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)

  return(
    <Showcase
      {...schowcase}
      onInView={()=>setInView(true)}
    >
      <Mockup
        {...mockup}
        loaded={loaded}
        ratio={poster.aspectRatio}
      >
        <>
          <Img
          style={{position: "absolute"}}
          onLoad={()=>setLoaded(true)}
          fluid={poster}
          />
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
          <StyledVideo
            playsInline
            reload="auto"
            loop
            muted="muted"
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