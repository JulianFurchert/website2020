import React, { useState, useEffect } from 'react';
import { styled } from '../stitches.config'
import { Showcase, ShowcaseProps } from './Showcase';

type CaseImageProps = ShowcaseProps & {
  publicId: string
}

export const CaseImage: React.FC<CaseImageProps> = ({ publicId, ...viewcase }) =>  {
  const isMounted = React.useRef(true);
  const [isShown, setIsShown] = useState(false);

  const url = `http://res.cloudinary.com/julianfurchert/image/upload/v1/portfolio/${publicId}`

  const handleOnInView = () => {
    let img = new Image();
    img.src= url;
    img.onload = () => {
      if(isMounted.current){
        setIsShown(true);
      }
    }
  }

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Showcase 
      {...viewcase}
      isShown={isShown} 
      onInView={handleOnInView} 
    >
      <StyledImage src={url} />
    </Showcase>
  )
}

const StyledImage = styled('img', {
  position: "relative",
  width: "100%", 
  height: "auto"
})
