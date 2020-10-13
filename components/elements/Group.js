import styled from 'styled-components';
import {space, gridGap, style} from 'styled-system';

const gridTemplateColumns = style({
  prop: 'columnsMin',
  cssProperty: 'gridTemplateColumns',
  transformValue: n => `repeat(auto-fit, minmax(${n}px, 1fr))`,
})

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({direction}) => direction ? direction : "row" };
  ${space}
`


const Grid = styled.div`
  display: grid;
  width: 100%;
  ${gridGap}
  ${gridTemplateColumns}
  ${space}
`

Grid.defaultProps = {
  gridGap: 12,
  columnsMin: 320
}

export { Grid };
export default Group;