import React from 'react'
import { styled } from '../stitches.config'

type TagProps = {
  onDelete: () => void,
  name: string,
  css?: CssProps,
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({name, onDelete, ...props}, ref) => {
    return(
      <Container ref={ref} {...props} >
        {name}
        <IconButton onClick={onDelete}>
          &#10005;
        </IconButton>
      </Container>
    )
  }
);

export default Tag

type CssProps = React.ComponentProps<typeof Container>['css']

const Container = styled('div', {
  display: 'flex',
  paddingX: '$2',
  alignItems: 'center',
  marginLeft: '$2',
  borderRadius: 4,
  flexGrow: 0,
  outline: 'none',
  border: '1px solid',
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  color: '$text',
})

const IconButton = styled('div', {
  cursor: 'pointer',
  marginLeft: '$1',
})