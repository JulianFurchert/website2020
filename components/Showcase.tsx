import React, {useEffect} from 'react';
import { styled } from '../stitches.config'
import { useInView } from 'react-intersection-observer';
import Spinner from './Spinner';

const Container = styled('div', {
  display: "flex", 
  position: "relative"
})

const Border = styled('div', {
  position: "relative",
  width: "100%",
  height: "100%",
  padding: "1px"
})

const Background = styled('div', {
  position: "relative",
  width: "100%",
  height: "100%",
  padding: "16px",
  overflow: "hidden"
})

const Content = styled('div', {
  position: "relative",
  padding: '48px',
  variants: {
    size: {
      fullSize: {
        padding: 0
      }
    }
  }
})

const Header = styled('div', {
  margin: "0 4px" 
})

const Footer = styled('div', {
  margin: "0 4px" 
})

type ShowcaseProps = {
  width: string | number
  footer?: React.ReactElement,
  header?: React.ReactElement,
  onInView?: ()=>void,
  fullSize?: boolean,
  bg?: string
  border?: string,
  borderColor?: string,
}

const Showcase: React.FC<ShowcaseProps> = ({
  children,
  width,
  onInView,
  fullSize = false,
  footer,
  header,
  bg = 'surface',
  border = 'none',
  borderColor = 'text',
}) => {

  const [ref, inView] = useInView({
    rootMargin: "0px 80px 0px 80px",
    triggerOnce: true
  });

  useEffect(()=> {
    console.log('onInView')
    onInView && onInView()
  },[])

  return (
    <Container
      ref={ref}
      css={{
        paddingY: '12px',
        paddingX: '12px',
      }}
    >
      <Border css={{border, borderColor}}>
        <Background 
          css={{
            backgroundColor: bg,
            padding: fullSize ? "1px" : "16px"
          }}  
        >
          <Spinner />
          <Header>
            { header && header }
          </Header>
          <Content size={fullSize ? 'fullSize' : null}>
            { children }
          </Content>
          <Footer>
            { footer && footer }
          </Footer>
        </Background>
      </Border>
    </Container>
  )
}

export default Showcase;