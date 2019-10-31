import React, { Fragment } from 'react';
import { GlobalStyle } from './globalStyle';
import styled from 'styled-components';
import Header from './components/Header';

const Main =  styled.div`
  width: 100vw;
  background-color: #096FB9;
`;

class App extends React.Component {
  render(){
    
    return (
      <Fragment>
        <GlobalStyle />
        <Main>
          <Header />
        </Main>
      </Fragment>
      );
    }
}

export default App;
