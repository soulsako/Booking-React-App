import React, { Fragment } from 'react';
import { GlobalStyle } from './globalStyle';
import styled from 'styled-components';
import Header from './components/Header';
import Search from './components/Search';

const Main =  styled.div`
  width: 100vw;
  background-color: #096FB9;
`;

class App extends React.Component {

  state = {
    navEnabled: false
  }

  navEnabledHandler = (navEnabled) => this.setState({navEnabled})

  render(){
    const { navEnabled } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <Main>
          <Header navEnabled={this.navEnabledHandler}/>
          {navEnabled ? null : <Search />}
        </Main>
      </Fragment>
      );
    }
}

export default App;
