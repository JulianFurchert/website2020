import React from 'react';
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get'

const Form = styled.div`
  width: 100%;
  height: auto;
`

const Svg = styled.svg`
  width: 100%;
  && path {
    opacity: 0;
    fill: none;
    stroke: ${themeGet("colors.text")};
    stroke-width: 2px;
  }
`

const innerPath= "M162.313,0A162.313,162.313,0,1,1,0,162.313,162.313,162.313,0,0,1,162.313,0Z";
const outerPath= "M225.9,0c124.76,0,225.9,101.138,225.9,225.9S350.659,451.8,225.9,451.8,0,350.659,0,225.9,101.138,0,225.9,0Z";

const paths = [
  { key: 'inner_1', d: innerPath, transform:"translate(409.908 212.271)" },
  { key: 'inner_2', d: innerPath, transform:"translate(479.99 335.813)" },
  { key: 'inner_3', d: innerPath, transform:"translate(409.908 459.964)" },
  { key: 'inner_4', d: innerPath, transform:"translate(268.224 459.964)" },
  { key: 'inner_5', d: innerPath, transform:"translate(195.384 333.292)" },
  { key: 'outer_6', d: outerPath, transform:"translate(159.727 104.324)" },
  { key: 'outer_1', d: outerPath, transform:"translate(393.014 104.324)" },
  { key: 'outer_2', d: outerPath, transform:"translate(479.99 272.228)" },
  { key: 'outer_3', d: outerPath, transform:"translate(393.014 443.879)" },
  { key: 'outer_4', d: outerPath, transform:"translate(159.727 443.879)" },
  { key: 'outer_5', d: outerPath, transform:"translate(68.213 272.228)" }
]


const FlowerSkizze = () => {
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
      <Svg viewBox="0 0 1000 1000" >
        <g id="Group_1" stroke="currentColor" strokeWidth="4px" data-name="Group 1" transform="translate(0.787 0.676)">
          {paths.map((props, index) => (
            <animated.path
              style={{opacity: animation.interpolate({range: [index, index+1], output: [0, 1]}) }}
              {...props}
            />
          ))}
        </g>
      </Svg>
    </Form>
  )
}

export default FlowerSkizze;