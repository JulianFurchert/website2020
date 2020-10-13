import React, { useState } from 'react'
import styled from 'styled-components'
import { fontSize } from 'styled-system';
import Showcase from '../Showcase';
import Mockup from '../Mockup';

const StyledCode = styled.div`
  font-family: 'Space Mono', monospace;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  line-height: 1.6;
  padding: 16px 24px;
  ${fontSize};
`

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
        <StyledCode fontSize={fontSize}>
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