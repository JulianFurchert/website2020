import React, { useRef, useEffect } from 'react';
import { styled } from '../stitches.config'

const StyledImg = styled('img', {
  position: "relative", 
  width: "100%", 
  height: "auto"
})

type ImgProps = React.HTMLProps<HTMLImageElement> & {
  onLoad: () => void
}

const Img:React.FC<ImgProps> = ({onLoad, ...props}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(()=>{
    const image = imageRef.current
    const handleOnLoad = () => onLoad()
    
    image.addEventListener('load', handleOnLoad)
    if(image.complete) onLoad();
    
    return () => image.removeEventListener('load', handleOnLoad);
  },[])
  
  return(
    <StyledImg {...props} ref={imageRef} />
  )
}

export default Img;