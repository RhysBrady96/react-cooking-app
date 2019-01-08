import React, { Component } from 'react';
import './App.css';
import Header from './Components/HeaderComponents/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faUser);
library.add(faUserPlus)

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
      </div>
    );
  }
}

export default App;
