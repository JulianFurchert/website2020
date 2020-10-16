import React, { useEffect, useState } from 'react';
import { styled } from '../../stitches.config'
import Viewcase, { ViewcaseProps } from '../Viewcase';

type ImageProps = ViewcaseProps & {
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
    <Viewcase 
      {...viewcase}
      isShown={isShown} 
      onInView={handleOnInView} 
    >
      <StyledImage src={image} />
    </Viewcase>
  )
}

const StyledImage = styled('img', {
  position: "relative",
  width: "100%", 
  height: "auto"
})
