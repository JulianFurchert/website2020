import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { themeGet } from 'styled-system'
import { Caption } from './elements/Text'

const Bar = styled.div`
  position: relative;
  z-index: 50;
  height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
`

const Container = styled.div`
  position: relative;
  z-index: 50;
  height: 32px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin: 0 24px;
`

const Progressbar = styled.div`
  position: relative;
  margin: 0 8px;
  width: 100px;
  height: 100%;
  height: 2px;
  flex-grow: 1;
  background-color: ${themeGet('colors.background')};
`

const Filler = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${themeGet('colors.text')};
`

const StepContainer = styled.div`
  z-index: 100;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => `${props.width}%`};
`

const AnimatedFiller = animated(Filler);
const AnimatedStepContainer = animated(StepContainer);


export const Timeline = ({duration, onRest, caption, bg}) => {
  const [reset, setReset] = useState(false)
  const props = useSpring({
    from: { width: '0%'},
    width: '100%',
    config: { duration },
    reset: reset,
    onRest: ()=>{
      onRest()
      setReset(true)
    },
    onStart: ()=> setReset(false)
  })

  return (
    <Bar>
      {caption && <Caption>{caption}</Caption>}
      <Container>
        <Progressbar>
          <AnimatedFiller style={props}/>
        </Progressbar>
      </Container>
    </Bar>
  )
}


export const Stepbar = ({index, steps, caption}) => {

  const props = useSpring({
    left: `${index/steps*100}%`
  })

  const stepBars = useMemo(()=>{
    let bars = [];
    for(var i = 0; i < steps; i++){ bars.push(i) }
    return bars
  },[steps])

  return (
    <Bar>
      {caption && <Caption>{caption}</Caption>}
      <Container>
        {stepBars.map( item => (
          <Progressbar key={item} />
        ))}
        <AnimatedStepContainer width={100/steps} style={props}>
          <Progressbar>
            <AnimatedFiller />
          </Progressbar>
        </AnimatedStepContainer>
      </Container>
    </Bar>
  )
}


export const Slider = ({percent, width, caption}) => {
  return (
    <Bar>
    {caption && <Caption>{caption}</Caption>}
    <Container>
      <Progressbar>
        <AnimatedFiller
          style={{
            width: `${width}%`,
            left: percent.interpolate({
              range: [0,100],
              output: [0,100-width]
            }).interpolate( p => `${p}%`),
          }}
        />
      </Progressbar>
    </Container>
    </Bar>
  )
}
