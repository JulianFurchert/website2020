import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';

const SnapshotContainer = styled.div`
  position: relative;
  width: 100%;
  line-height: 0;
`

const LottieContainer = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Container = styled.div`
  position: relative;
  width: 100%;
`

const Lottie = ({option, segment, lazyload, onComplete, onLoad, Snapshot}) => {
  const element = useRef();
  const animation = useRef();

  useEffect(()=>{
    if(lazyload){
      animation.current = lottie.loadAnimation({
        container: element.current,
        renderer: 'svg',
        autoplay: false,
        loop: false,
        ...option
      })
      animation.current.setSpeed(1)
      if(segment){
        animation.current.playSegments(segment, true);
      }
      if(onComplete){
        animation.current.addEventListener( "complete", onComplete );
      }
      if(onLoad){
        animation.current.addEventListener( "DOMLoaded", onLoad );
      }
    }

    return () => {
      if(lazyload){
        if(onComplete){
          animation.current.removeEventListener( "complete", onComplete );
        }
        if(onLoad){
          animation.current.removeEventListener( "DOMLoaded", onLoad );
        }
      }
    };

  },[lazyload])

  useEffect(()=>{
    if(lazyload){
      animation.current.playSegments(segment, true);
    }
  },segment)

  return(
    <Container>
      <SnapshotContainer>
        <Snapshot />
      </SnapshotContainer>
      <LottieContainer>
        <div ref={element}/>
      </LottieContainer>
    </Container>
  )
}

Lottie.defaultProps = {
  lazyload: true
};

export default Lottie;