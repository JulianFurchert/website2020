import React, { useReducer, useState, useEffect } from 'react'
import {Grid} from './elements/Group'
import Thumbnail from './Thumbnail'
import thumbnailsData from '../thumbnails';
import shuffle from '../utils/shuffle';

const thumbnailSequence  = shuffle(
  thumbnailsData.map( (thumbnail, index) => index )
)

const initialState = thumbnailsData.map( (thumbnail,index) => ({
  id: thumbnail.slug,
  segmentIndex: 0,
  lazyload: false
}))

const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT_SEGMENT':
			return state.map((thumb, index) =>
        index === action.index ? { ...thumb, segmentIndex: (thumb.segmentIndex + 1) % 3 } : thumb
      )
    case 'LAZYLOAD_THUMBNAIL':
      return state.map((thumb, index) =>
        index === action.index ? { ...thumb, lazyload: true } : thumb
      )
		case 'RESET_LAZYLOAD':
			return state.map( thumb => ({
	      ...thumb,
	      lazyload: false
      }))
    default:
      return state
	}
}


const ProjectOverview = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    let index = thumbnailSequence[progress % thumbnailSequence.length];
    if(state[index].lazyload){
      dispatch({
        type: 'INCREMENT_SEGMENT',
        index: index
      })
    }
    else{
      dispatch({
        type: 'LAZYLOAD_THUMBNAIL',
        index: index
      })
    }
    if(progress === 1){
      setProgress(prevProgress => prevProgress+1)
    }
    if(progress === 4){
      setProgress(prevProgress => prevProgress+1)
    }
    if(progress === 8){
      setProgress(prevProgress => prevProgress+1)
    }
  },[progress])

  useEffect(()=>{
    return () => {
      dispatch({
        type: 'RESET_LAZYLOAD',
      })
    }
  },[])

  return(
      <Grid columnsMin={[320, 320, 360, 400]} mt={24} mb={40} >
        {thumbnailsData.map( (thumbnail, index) => (
          <Thumbnail
            key={thumbnail.slug}
            categorie={thumbnail.work}
            title={thumbnail.title}
            slug={thumbnail.slug}
            lottie={thumbnail.lottie}
            state={state[index]}
            onComplete={()=> {
              setProgress(prevProgress => prevProgress+1)
            }}
          />
        ))}
      </Grid>
  )
}

export default ProjectOverview