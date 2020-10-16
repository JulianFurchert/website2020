import React, { useEffect, useState } from 'react';
import { styled } from '../../stitches.config'
import { Showcase, ShowcaseProps } from '../Showcase';

type ImageProps = ShowcaseProps & {
  image: string
}

export const ImageCase: React.FC<ImageProps> = ({ image, ...viewcase }) =>  {
  const [isShown, setIsShown] = useState(false);
 
  const handleOnInView = () => {
    let img = new Image();
    img.src= image;
    img.onload = () => setIsShown(true);
  }

  return (
    <Showcase 
      {...viewcase}
      isShown={isShown} 
      onInView={handleOnInView} 
    >
      <StyledImage src={image} />
    </Showcase>
  )
}

const StyledImage = styled('img', {
  position: "relative",
  width: "100%", 
  height: "auto"
})
