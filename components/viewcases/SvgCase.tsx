import React from 'react';
import { Showcase, ShowcaseProps } from '../Showcase';

type SvgCaseProps = ShowcaseProps & {
  svg: React.ReactNode
}

export const SvgCase: React.FC<SvgCaseProps> = ({ svg, ...viewcase }) =>  {
  return (
    <Showcase {...viewcase}>
      {svg}
    </Showcase>
  )
}