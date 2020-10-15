import React from 'react';
import { AspectRatio } from './AspectRatio'
import { Template } from './Template'
import { styled } from '../stitches.config'

type ViewcaseProps = {
  ratio?: [number, number],
  scheme?: 'auto' | 'light' | 'dark',
  size?: 's' | undefined,
  template?: 'none' | 'simple' | 'window' | 'default',
}

export const Viewcase: React.FC<ViewcaseProps> = ({ 
  ratio = [1, 1],
  scheme = 'auto',
  template = 'default',
  children
 }) => {
  return(
    <Container>
      <AspectRatio ratio={ratio}>
        <Content scheme={scheme}>
          <Template template={template}>
            {children}
          </Template>
        </Content>
      </AspectRatio>
    </Container>
  )
}

const Container = styled('div', {
  padding: '$2',
  width: '100%'
})

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$2',
  height: '100%',
  width: '100%',
  variants: {
    scheme: {
      auto: {
        backgroundColor: '$gray200'
      },
      light: {
        backgroundColor: '$gray200'
      },
      dark: {
        backgroundColor: '$gray600'
      }
    },
    size: {
      full: {
        padding: 0,
      },
    }
  }
})

export default Viewcase