import React, {useReducer} from 'react';
import Header from'./Header';
import { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';
import { ThemeStore } from '../stores/ThemeStore';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${themeGet('colors.background')};
  }
`

const initialState = {
  currentPage: null,
  nextPage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setCurrentPage':
      return {
        ...state,
        currentPage: action.value
      }
    case 'setNextPage':
      return {
        ...state,
        nextPage: action.value
      }
    default:
      return state;
  }
}

const NavigationDispatch = React.createContext(null);

const App = ({children}) => {
  const [navigation, dispatch] = useReducer(reducer, initialState);;
  return (
    <NavigationDispatch.Provider value={dispatch}>
      <ThemeStore>
        <>
          <GlobalStyle />
          <Header navigation={navigation} />
          {children}
        </>
      </ThemeStore>
    </NavigationDispatch.Provider>
  )
}

export default App
export { NavigationDispatch }