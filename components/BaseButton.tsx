import React from 'react'
import { useButton } from '@react-aria/button';
import { AriaButtonProps } from '@react-types/button';
import { styled } from '../stitches.config'

export const BaseButton: React.FC<AriaButtonProps> = (props) => {
  let ref = React.useRef<HTMLButtonElement>(null);
  let {buttonProps} = useButton(props, ref);

  return (
    <StyledButton ref={ref} {...buttonProps}>
      {props.children}
    </StyledButton>
  );
}

 const StyledButton = styled('button', {
  border: 'none',
  margin: 0,
  padding: 0,
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',
  color: '$hiContrast',
  font: 'inherit',
  lineHeight: 'normal',
  '&:hover': {
    color: '$primary',
  }
})

export default BaseButton