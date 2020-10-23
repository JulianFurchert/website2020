import React from 'react';
import { Showcase, ShowcaseProps } from './Showcase';

type CaseSvgProps = ShowcaseProps & {
  svg: React.ReactNode
}

export const CaseSvg: React.FC<CaseSvgProps> = ({ svg, ...viewcase }) =>  {
  return (
    <Showcase {...viewcase}>
      {svg}
    </Showcase>
  )
}