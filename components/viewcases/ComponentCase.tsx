import React from 'react';
import { styled } from '../../stitches.config'
import { Showcase, ShowcaseProps } from '../Showcase';

type ComponentCaseProps = ShowcaseProps & {
  component: React.ReactNode
}

export const ComponentCase: React.FC<ComponentCaseProps> = ({ component, ...viewcase }) =>  {
  console.log(component)
  return (
    <Showcase {...viewcase}>
      {component}
    </Showcase>
  )
}

const Container = styled('div', {
  position: "relative",
  width: "100%", 
  height: "100%"
})
