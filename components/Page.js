import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { themeGet, space } from 'styled-system';
import { NavigationDispatch } from './Layout';


const StyledPage = styled.div`
  min-height:120vh;
  background-color: ${themeGet('colors.background')};
  ${space}
`

const Page = ({ title, children }) =>{
  const dispatch = useContext(NavigationDispatch);

  useEffect(()=>{
    dispatch({type:"setCurrentPage", value: title});
    dispatch({type:"setNextPage", value: null});
  },[])

  return (
    <StyledPage pt={48} pb={96} px={[16, 40]}>
      {children}
    </StyledPage>
  )
}

export default Page;
