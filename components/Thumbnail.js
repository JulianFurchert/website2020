import React, { useContext } from 'react';
import { Link } from "gatsby";
import styled, {css} from 'styled-components';
import { themeGet } from 'styled-system';
import { useGesture } from 'react-use-gesture'
import { Caption }  from './elements/Text';
import Lottie from './Lottie';
import { NavigationDispatch } from './Layout';


const Container = styled.div`
  position: relative;
  overflow:hidden;
  background-color: ${themeGet('colors.background')};
  border: 1px solid ${themeGet('colors.text')};
  cursor: pointer;
  &:hover{
    ${({theme}) => theme.mode === 'light' ? {
      backgroundColor: theme.colors.thumbnail
    } : {
      border: `1px solid ${theme.colors.thumbnail}`
    }}
  }
`

const CaptionRow = styled.div`
  display: none;
  @media (hover: none) {
    /* position:absolute;
    display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    height: 15.5%;
    padding: 0 5%; */
  }
`

const hoverDarkStyles = css`
  .fill-bg path{
    fill: ${themeGet('colors.background')};
  }
  .fill-hover-bg path{
    fill: ${themeGet('colors.background')};
  }
  .stroke-bg path{
  stroke: ${themeGet('colors.background')};
  }
  .fill-text path{
    fill: ${themeGet('colors.thumbnail')};
  }
  .fill-hover-text path{
    fill: ${themeGet('colors.thumbnail')};
  }
  .stroke-text path{
    stroke: ${themeGet('colors.thumbnail')};
  }
  .fill-surface path{
    fill: ${themeGet('colors.background')};
  }
`

const hoverLightStyles = css`
  .fill-bg path{
    fill: ${themeGet('colors.thumbnail')};
    /* transition: fill 200ms; */
  }
  .stroke-bg path{
  stroke: ${themeGet('colors.thumbnail')};
  }
  .fill-surface path{
    opacity: 0;
  }
  .fill-hover-bg path{
    opacity: 0;
  }
  .fill-hover-text path{
    fill: ${themeGet('colors.text')};
  }
`

const ImageContainer = styled.div`
  margin-bottom: -2%;
  .fill-bg path{
    fill: ${themeGet('colors.background')};
  }
  .stroke-bg path{
    stroke: ${themeGet('colors.background')};
  }
  .fill-text path{
    fill: ${themeGet('colors.text')};
  }
  .stroke-text path{
    stroke: ${themeGet('colors.text')};
  }
  .fill-surface path{
    fill: ${themeGet('colors.surface')};
  }
  .stroke-surface path{
    stroke: ${themeGet('colors.surface')};
  }
  &:hover  {
    ${({theme}) => theme.mode === 'light' ? hoverLightStyles : hoverDarkStyles }
  }
  @media (hover: none) {
    margin-bottom: 0;
  }
`

const Thumbnail = ({title, slug, lottie, state, onComplete }) => {
  const dispatch = useContext(NavigationDispatch);

  const bind = useGesture({ onHover: state => {
    if(state.hovering) {
      dispatch({type:"setNextPage", value: title})
    }
    else {
      dispatch({type:"setNextPage", value: null})
    }
  }})

  return (
    <Container {...bind()}>
      <Link to={slug}>
      <ImageContainer>
          <Lottie
            option={{
              animationData: lottie.animationData,
              speed: 1

            }}
            segment={lottie.segments[state.segmentIndex]}
            Snapshot={lottie.snapshot}
            lazyload={state.lazyload}
            onComplete={onComplete}
          />
        <CaptionRow>
          <Caption>
            {title}
          </Caption>
        </CaptionRow>
      </ImageContainer>
      </Link>
    </Container>
  )
}

export default Thumbnail;