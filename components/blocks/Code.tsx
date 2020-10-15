import React, { useState } from 'react'
import { styled } from '../../stitches.config'
import Showcase from '../Showcase';
import Mockup from '../Mockup';

const StyledCode = styled('div', {
  fontFamily: "'Space Mono', monospace",
  position: "absolute",
  left: "0",
  width: "100%",
  height: "100%",
  color: "white",
  lineHeight: 1.6,
  padding: "16px 24px"
})

const Code = ({
  code,
  fontSize,
  mockup,
  ...schowcase
}) => {
  const [inView, setInView] = useState(false)

  return(
    <Showcase
      {...schowcase}
      onInView={()=>setInView(true)}
    >
      <Mockup {...mockup} loaded={inView}>
        <StyledCode css={{fontSize: fontSize}}>
          { code.map(row => <div>{row}</div>) }
        </StyledCode>
      </Mockup>
      </Showcase>
  )
}

Code.defaultProps = {
  fontSize: 20
}

export default Code;