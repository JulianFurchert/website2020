import Snap from 'snapsvg-cjs';
import {scaleLinear } from 'd3-scale';

let strokeWidth = 3;

export const calculateA = (width, height)=> {
  if (typeof window !== "undefined") {
    strokeWidth = calcStrokeWidth(width,height);
    let paths = [ { d:"", strokeWidth }, { d:"", strokeWidth } ];
  
    // Path 1
    const scale = scaleLinear()
      .domain([0, 1])
      .range([0 , 0.5])
      .clamp(true);
  
    let t = scale(ratio(width, height));
  
    paths[0].d = paths[0].d + `M${ pos(0.0, width ) } ${ pos(1.0, height ) } `;
    paths[0].d = paths[0].d + `L${ pos(0.5 - t, width ) } ${ pos(0.0, height ) } `;
    paths[0].d = paths[0].d + `L${ pos(0.5 + t, width ) } ${ pos(0.0, height ) } `;
    paths[0].d = paths[0].d + `L${ pos(1.0, width ) } ${ pos(1.0, height ) } `;
  
    // Path 2
    let guide = `M${ pos(-.2, width) } ${ pos(0.5, height)} `
    guide = guide + `L${ pos(1.2, width) } ${ pos(0.5, height)} `
    let inter = Snap.path.intersection(paths[0].d, guide);
  
    paths[1].d = paths[1].d + `M${ inter[0].x } ${ inter[0].y } `
    paths[1].d = paths[1].d + `L${ inter[1].x } ${ inter[1].y } `
  
    return paths;  
  }

  return null
}


export const calculateF = (width, height)=> {
  strokeWidth = calcStrokeWidth(width,height);
  let paths = [ { d:'', strokeWidth }, { d:'', strokeWidth } ];

  paths[0].d = paths[0].d + `M${ pos(0.0, width) } ${ pos(1.0, height) } `;
  paths[0].d = paths[0].d + `L${ pos(0.0, width) } ${ pos(0.0, height) } `;
  paths[0].d = paths[0].d + `L${ pos(1.0, width) } ${ pos(0.0, height) } `;


  const mapVertical = scaleLinear()
    .domain([0, 1])
    .range([0, 0.1])
    .clamp(true);

  const mapHorizontal = scaleLinear()
    .domain([0, 1])
    .range([0, 0.2])
    .clamp(true);


  let v = mapVertical(ratio(width, height));
  let h = mapHorizontal(ratio(width, height));

  paths[1].d = paths[1].d + `M${ pos(0.0, width) } ${ pos(0.4+v, height) } `;
  paths[1].d = paths[1].d + `L${ pos(0.8+h, width) } ${ pos(0.4+v, height) } `;

  return paths;
}


export const calculateR = (width, height)=> {
  strokeWidth = calcStrokeWidth(width,height);
  let paths = [ { d:'', strokeWidth }, { d:'', strokeWidth } ];

  const scaleHorizontalCurve = scaleLinear()
    .domain([0, 1])
    .range([0.4, 0.5])
    .clamp(true);

  const scaleHorizontalTranslate = scaleLinear()
    .domain([0, 1])
    .range([0.2, 0.5])
    .clamp(true);

  const scaleVertialCurve = scaleLinear()
    .domain([0, 2])
    .range([0.2, 0.25])
    .clamp(true);

  const scaleVertialTranslate = scaleLinear()
    .domain([0, 2])
    .range([0, 0.25])
    .clamp(true);

  // Curve & Translate
  let hc = scaleHorizontalCurve(ratio(width,height));
  let ht = scaleHorizontalTranslate(ratio(width,height));
  let vc = scaleVertialCurve(ratio(width,height));
  let vt = scaleVertialTranslate(ratio(width,height));

  // Linie
  paths[0].d = paths[0].d + `M${ pos(0.0, width) } ${ pos(1.0, height) } `;
  paths[0].d = paths[0].d + `L${ pos(0.0, width) } ${ pos(0.0, height) } `;
  // Curve 1
  paths[0].d = paths[0].d + `L${ pos(0.5 + ht, width) } ${ pos(0.0, height) } `;
  paths[0].d = paths[0].d + `C${ pos(0.5 + hc, width) } ${ pos(0.0, height) } `;
  paths[0].d = paths[0].d + `,${ pos(1.0, width) } ${ pos(0.25 - vc, height) } `;
  paths[0].d = paths[0].d + `,${ pos(1.0, width) } ${ pos(0.25 - vt, height) } `;
  // Curve 2
  paths[0].d = paths[0].d + `L${ pos(1.0, width) } ${ pos(0.25 + vt, height) } `;
  paths[0].d = paths[0].d + `C${ pos(1.0, width) } ${ pos(0.25 + vc, height) } `;
  paths[0].d = paths[0].d + `,${ pos(0.5 + hc, width) } ${ pos(0.5, height) } `;
  paths[0].d = paths[0].d + `,${ pos(0.5 + ht, width) } ${ pos(0.5, height) } `;
  // Back
  paths[0].d = paths[0].d + `L${ pos(0.0, width) } ${ pos(0.5, height) } `;



  let guide = `M${ pos(1.0, width) } ${ pos(1.0, height)} `
  guide = guide + `L${ pos(0.5, width) } ${ pos(0.2, height)} `
  let inter = Snap.path.intersection(paths[0].d, guide);

  paths[1].d = paths[1].d + `M${ inter[0].x } ${ inter[0].y } `
  paths[1].d = paths[1].d + `L${ pos(1, width) } ${ pos(1, height) } `

  return paths;
}


export const calculateM = (width, height)=> {
  strokeWidth = calcStrokeWidth(width,height);
  let paths = [ { d:'', strokeWidth }];

  const scale = scaleLinear()
    .domain([-1, 1])
    .range([0.9, 0.1])
    .clamp(true);

  let middlePointY = scale(ratio(width, height));

  paths[0].d = paths[0].d + `M${ pos(0.0, width) } ${ pos(1.0, height) } `
  paths[0].d = paths[0].d + `L${ pos(0.0, width) } ${ pos(0.0, height) } `
  paths[0].d = paths[0].d + `L${ pos(0.5, width) } ${ pos(middlePointY, height) } `
  paths[0].d = paths[0].d + `L${ pos(1.0, width) } ${ pos(0.0, height) } `
  paths[0].d = paths[0].d + `L${ pos(1.0, width) } ${ pos(1.0, height) } `

  return paths;
}


export const calculateO = (width, height)=> {
  strokeWidth = calcStrokeWidth(width,height);
  let paths = [ { d:'', strokeWidth }];

  const scaleCurve = scaleLinear()
    .domain([-1, 0, 1])
    .range([0.3, 0.35, 0.5])
    .clamp(true);

  const scaleTranslate = scaleLinear()
    .domain([-1, 0, 1])
    .range([0.0, 0.05, 0.5])
    .clamp(true);

  // Curve & Translate
  let c = scaleCurve(ratio(width, height));
  let t = scaleTranslate(ratio(width, height));

  // Curve Bottom - Left
  paths[0].d = paths[0].d + `M${ pos(0.5 - t, width) } ${ pos(1.0, height) } `
  paths[0].d = paths[0].d + `C${ pos(0.5 - c, width) } ${ pos(1.0, height) } `
  paths[0].d = paths[0].d + `,${ pos(0.0, width) } ${ pos(0.5 + c, height) } `
  paths[0].d = paths[0].d + `,${ pos(0.0, width) } ${ pos(0.5 + t, height) } `
  // Curve Left - Top
  paths[0].d = paths[0].d + `L${ pos(0.0, width) } ${ pos(0.5 - t, height) } `
  paths[0].d = paths[0].d + `C${ pos(0.0, width) } ${ pos(0.5 - c, height) } `
  paths[0].d = paths[0].d + `,${ pos(0.5 - c, width) } ${ pos(0.0, height) } `
  paths[0].d = paths[0].d + `,${ pos(0.5 - t, width) } ${ pos(0.0, height) } `
  // Curve Right-Top
  paths[0].d = paths[0].d + `L${ pos(0.5 + t, width) } ${ pos(0.0, height) } `
  paths[0].d = paths[0].d + `C${ pos(0.5 + c, width) } ${ pos(0.0, height) } `
  paths[0].d = paths[0].d + `,${ pos(1.0, width) } ${ pos(0.5 - c, height) } `
  paths[0].d = paths[0].d + `,${ pos(1.0, width) } ${ pos(0.5 - t, height) } `
  // Curve Left-Top
  paths[0].d = paths[0].d + `L${ pos(1.0, width) } ${ pos(0.5 + t, height) } `
  paths[0].d = paths[0].d + `C${ pos(1.0, width) } ${ pos(0.5 + c, height) } `
  paths[0].d = paths[0].d + `,${ pos(0.5 + c, width) } ${ pos(1.0, height) } `
  paths[0].d = paths[0].d + `,${ pos(0.5 + t, width) } ${ pos(1.0, height) } `
  // Close
  paths[0].d = paths[0].d + `Z`;

  return paths;
}



// calculate Ratio
// 400 / 200 = 1 (statt 2.0)
// 200 / 400 = -1 (statt 0.5)
// 200 / 200 = 0 (statt 1.0)

const ratio = (width, height) => {
  let ratio = ( width / height ) -1 ;
  ratio < 0 && ( ratio = ( height / width * -1 ) + 1 );
  return ratio;
}

// calculate Postion
const pos = (percent, size) => {
  let margin = 7;
  let map = scaleLinear()
    .domain([0, size])
    .range([margin, size - margin]);
  return map(size * percent);
}

const calcStrokeWidth = () =>{
  return 3;
}

export default calculateA