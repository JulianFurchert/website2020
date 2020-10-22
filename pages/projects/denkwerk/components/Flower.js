import React from 'react';
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components';
import flowerParts from './flowerParts';

const Form = styled.div`
  width: 100%;
  height: auto;
`

const Svg = styled.svg`
  width: 100%;
  background-color: white;
  .cls-2 {
    fill: #c40055;
  }
  .cls-3 {
    fill: #008599;
  }
  .cls-4 {
    fill: #002b52;
  }
  .cls-5 {
    fill: #fff;
  }
  .group {
    opacity: 0;
  }
`


const Flower = () => {
  const [{ animation }] = useSpring(() => ({
    from: { animation: 0 },
    config: { duration: 6000 },
    to: async next => {
      while (1) {
        await next({ animation: 12 })
        await next({ animation: 0 })
      }
    },
  }))

  return(
    <Form>
      <Svg viewBox="0 0 1000 1000">
        <g id="Group_16" data-name="Group 16" transform="translate(-1067.2 0.05)">
          {flowerParts.map((props, index) => (
            <animated.g
              style={{opacity: animation.interpolate({range: [index, index+1], output: [0, 1]}) }}
              key={props.key}
            >
              {props.pathElements}
            </animated.g>
          ))}
        </g>
      </Svg>
    </Form>
  )
}

export default Flower;