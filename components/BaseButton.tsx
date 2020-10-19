import React from 'react'
import { useButton } from '@react-aria/button';
import { AriaButtonProps } from '@react-types/button';
import { styled } from '../stitches.config'

type BaseButtonProps = AriaButtonProps & {
  css?: CssProps
}

export const BaseButton: React.FC<BaseButtonProps> = ({css, ...props}) => {
  let ref = React.useRef<HTMLButtonElement>(null);
  let {buttonProps} = useButton(props, ref);

  return (
    <StyledButton ref={ref} {...buttonProps} css={css} >
      {props.children}
    </StyledButton>
  );
}

type CssProps = React.ComponentProps<typeof StyledButton>['css']

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