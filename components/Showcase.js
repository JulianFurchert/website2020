import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, width, color, border, borderColor } from 'styled-system';
import { useInView } from 'react-intersection-observer';
import Spinner from './elements/Spinner';

const Container = styled.div`
  display: flex;
  position:relative;
  ${width}
  ${space}
`

const Border = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1px;
  ${border};
  ${borderColor};
`

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 16px;
  overflow:hidden;
  ${space};
  ${color};
`

const Content = styled.div`
  position: relative;
  ${space};
`

const Header = styled.div`
  margin: 0 4px;
`

const Footer = styled.div`
  margin: 0 4px;
`

const Showcase = ({
  children,
  width,
  onInView,
  fullSize,
  footer,
  header,
  bg,
  border,
  borderColor,
}) => {

  const ref = useRef();
  const inView = useInView(ref, {
    rootMargin: "0px 80px 0px 80px",
    triggerOnce: true
  });

  useEffect(()=> onInView,[inView])

  return (
    <Container
      ref={ref}
      width={[1, width]}
      py={"12px"}
      px={[0,"12px"]}
    >
      <Border border={border} borderColor={borderColor}>
        <Background bg={bg} p={fullSize ? "1px" : "16px"}>
          <Spinner />
          <Header>
            { header && header }
          </Header>
          <Content p={fullSize ? 0 : ["24px","48px"]}>
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

Showcase.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  footer: PropTypes.element,
  header: PropTypes.element,
  onInView: PropTypes.func,
  fullSize: PropTypes.bool,
  bg: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
}

Showcase.defaultProps = {
  bg: "surface",
  border: 'none',
  borderColor: 'text',
  fullSize: false,
}

export default Showcase;