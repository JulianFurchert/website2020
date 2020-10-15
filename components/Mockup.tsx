import React from 'react';
import styled from 'styled-components';
import { width } from 'styled-system';
import { useSpring, animated } from 'react-spring';
import Template from './Template';

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  ${width}
`
const AnimatedContainer = animated(Container)

const PaddingRatio = styled.div`
  position: relative;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    padding-bottom: ${({ratio}) => 100 / ratio}%;
  }
`

const Content = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

type MockupProps = {
  width: string | number,
  ratio: number,
  bg?: string,
  color?: string,
  template?: 'none' | 'simple' | 'window' | 'default',
  title?: string,
  loaded?: boolean,
}

const Mockup:React.FC<MockupProps> = ({ 
  width, 
  ratio, 
  children, 
  loaded = true, 
  bg = 'surface', 
  color, 
  template = 'none', 
  title 
}) => {
  const transition = useSpring({
    transform: `translateY(${ loaded  ? "0%" : "120%"})`,
    config: { mass: 1, tension: 300, friction: 80 }
  })

  return (
    <AnimatedContainer width={width} style={transition}>
      <Template template={template} title={title} bg={bg} color={color}>
        <PaddingRatio ratio={ratio}>
          <Content>
            {children}
          </Content>
        </PaddingRatio>
      </Template>
    </AnimatedContainer>
  )
}

export default Mockup;