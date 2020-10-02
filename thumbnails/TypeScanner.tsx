import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import { Thumbnail, circleIndex, outsidePosition } from "../components"

const Animation: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [gridIndex, setGridIndex] = useState(0);
  const mouse = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await mouse.start({ 
        top: '50%',
        left: '50%',
      })
      setGridIndex((i: number) =>  i < 2 ? i + 1 : 0)
      await mouse.start({
        ...outsidePosition(),
        transition: {
          delay: 2,
          duration: 1,
        }
      })
      setIndex(circleIndex)
    }
    sequence()
  }, [index])

  return(
    <Thumbnail
      mouseAnimation={mouse}
      mouseVariant={index > 1 ? 'zoom-out' : 'zoom-in'}
    >
      <svg viewBox="0 0 640 420" width="100%">
        {gridIndex === 0 && <GridGroup1 />}
        {gridIndex === 1 && <GridGroup2 />}
        {gridIndex === 2 && <GridGroup3 />}
        <g
          fill="rgba(0,0,0,0)" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="18.815"
          stroke="currentColor"
        >
          <motion.path 
            d={path[gridIndex]}
            // animate={{d: path[gridIndex]}}
            transform="translate(180 70)"  
          />
          <motion.path 
            d={path2[gridIndex]} 
            // animate={{d: path2[gridIndex]}}
            transform="translate(320.05 270)"
          />
        </g>
      </svg>
    </Thumbnail>
  )
}

export default Animation

const path = [
  'M0,280H40V160H80V80h40V0h40V80h40v80h40V280h40',
  'M35,280h0V140.5l69.75-.5.319-68.5h.181V0H175l.25,71h0l.5,68.5,68.75.75L245,280h0',
  'M70,280h0V140.5l-.124-.064L70,71.75V71l.75-71h139.5V71h0l.25,68.5-.25.75.5,139.75h0'
]

const path2 = [
  'M0,0-99.25,0H99.25',
  'M-104,10l208.25.5',
  'M-68-60H68.25'
]

const GridGroup1 = props => (
  <g strokeWidth="1" stroke="currentColor" fill="none" {...props}>
    <line id="Linie_23" data-name="Linie 23" x2="640" transform="translate(0 29)" />
    <line id="Linie_24" data-name="Linie 24" x2="640" transform="translate(0 69)" />
    <line id="Linie_25" data-name="Linie 25" x2="640" transform="translate(0 109)" />
    <line id="Linie_26" data-name="Linie 26" x2="640" transform="translate(0 149)" />
    <line id="Linie_27" data-name="Linie 27" x2="640" transform="translate(0 189)" />
    <line id="Linie_28" data-name="Linie 28" x2="640" transform="translate(0 229)"  />
    <line id="Linie_30" data-name="Linie 30" x2="640" transform="translate(0 309)"  />
    <line id="Linie_31" data-name="Linie 31" x2="640" transform="translate(0 349)"  />
    <line id="Linie_32" data-name="Linie 32" x2="640" transform="translate(0 389)"  />
    <line id="Linie_29" data-name="Linie 29" x2="640" transform="translate(0 269)"  />
    <line id="Linie_34" data-name="Linie 34" y2="420" transform="translate(19)"  />
    <line id="Linie_35" data-name="Linie 35" y2="420" transform="translate(59)"  />
    <line id="Linie_36" data-name="Linie 36" y2="420" transform="translate(99)"  />
    <line id="Linie_37" data-name="Linie 37" y2="420" transform="translate(139)"  />
    <line id="Linie_38" data-name="Linie 38" y2="420" transform="translate(179)"  />
    <line id="Linie_39" data-name="Linie 39" y2="420" transform="translate(219)"  />
    <line id="Linie_40" data-name="Linie 40" y2="420" transform="translate(259)"  />
    <line id="Linie_41" data-name="Linie 41" y2="420" transform="translate(299)"  />
    <line id="Linie_42" data-name="Linie 42" y2="420" transform="translate(339)"  />
    <line id="Linie_43" data-name="Linie 43" y2="420" transform="translate(379)"  />
    <line id="Linie_44" data-name="Linie 44" y2="420" transform="translate(419)"  />
    <line id="Linie_45" data-name="Linie 45" y2="420" transform="translate(459)"  />
    <line id="Linie_46" data-name="Linie 46" y2="420" transform="translate(499)"  />
    <line id="Linie_47" data-name="Linie 47" y2="420" transform="translate(539)"  />
    <line id="Linie_48" data-name="Linie 48" y2="420" transform="translate(579)"  />
    <line id="Linie_49" data-name="Linie 49" y2="420" transform="translate(619)"  />
  </g>
)

const GridGroup2 = props => (
  <g strokeWidth="1" stroke="currentColor" fill="none" {...props} >
    <line id="Linie_2" data-name="Linie 2" x2="640" transform="translate(0 69)"  />
    <line id="Linie_3" data-name="Linie 3" x2="640" transform="translate(0 139)"  />
    <line id="Linie_4" data-name="Linie 4" x2="640" transform="translate(0 209)"  />
    <line id="Linie_5" data-name="Linie 5" x2="640" transform="translate(0 209)"  />
    <line id="Linie_6" data-name="Linie 6" x2="640" transform="translate(0 279)"  />
    <line id="Linie_7" data-name="Linie 7" x2="640" transform="translate(0 349)"  />
    <line id="Linie_8" data-name="Linie 8" y2="420" transform="translate(77)"  />
    <line id="Linie_9" data-name="Linie 9" y2="420" transform="translate(147)"  />
    <line id="Linie_10" data-name="Linie 10" y2="420" transform="translate(217)"  />
    <line id="Linie_11" data-name="Linie 11" y2="420" transform="translate(287)"  />
    <line id="Linie_12" data-name="Linie 12" y2="420" transform="translate(357)"  />
    <line id="Linie_13" data-name="Linie 13" y2="420" transform="translate(427)"  />
    <line id="Linie_14" data-name="Linie 14" y2="420" transform="translate(497)"  />
    <line id="Linie_15" data-name="Linie 15" y2="420" transform="translate(567)"  />
  </g>
)

const GridGroup3 = props => (
  <g strokeWidth="1" stroke="currentColor" fill="none" {...props} >
    <rect width="640" height="420" fill="#fff"/>
    <line id="Linie_16" data-name="Linie 16" x2="640" transform="translate(0 67)"  />
    <line id="Linie_17" data-name="Linie 17" x2="640" transform="translate(0 209)"  />
    <line id="Linie_18" data-name="Linie 18" x2="640" transform="translate(0 351)"  />
    <line id="Linie_19" data-name="Linie 19" y2="420" transform="translate(105)"  />
    <line id="Linie_20" data-name="Linie 20" y2="420" transform="translate(247)"  />
    <line id="Linie_21" data-name="Linie 21" y2="420" transform="translate(389)"  />
    <line id="Linie_22" data-name="Linie 22" y2="420" transform="translate(531)"  />
  </g>
)