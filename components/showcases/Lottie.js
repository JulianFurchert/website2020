import React, { useState, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';
import Showcase from '../Showcase';
import Mockup from '../Mockup';


const LottieContainer = styled.div`
  position:relative;
  width: 100%;
  height: auto;
`

const LottieFile = ({
  data,
  mockup,
  ...schowcase
}) =>  {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const lottieRef = useRef();

  useLayoutEffect(()=>{
    if(inView){
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        animationData: data,
      })
      animation.addEventListener( "DOMLoaded", ()=>setLoaded(true) );
      return ()=>{
        animation.removeEventListener( "DOMLoaded", ()=>setLoaded(true) );
      }
    }
  },[inView])

  return (
    <Showcase
      {...schowcase}
      onInView={()=>setInView(true)}
    >
      <Mockup {...mockup} loaded={loaded}>
        <LottieContainer ref={lottieRef}/>
      </Mockup>
    </Showcase>
  )
}

export default LottieFile;

