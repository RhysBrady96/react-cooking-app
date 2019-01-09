import React, { Component } from 'react';
import './App.css';
import Header from './Components/HeaderComponents/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUserPlus, faPlus, faImage } from '@fortawesome/free-solid-svg-icons'
import { Route } from 'react-router-dom';

import Home from './Components/Home';
import RecipieList from './Components/RecipeComponents/RecipieList';
import AddRecipe from './Components/RecipeComponents/AddRecipe';


library.add(faUser);
library.add(faUserPlus);
library.add(faPlus);
library.add(faImage);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
            <div className="container">
              <Route path='/recipes' component={RecipieList}/>
              <Route path='/addrecipe' component={AddRecipe} />
              <Route exact path='/' component={Home}/>
            </div>
      </div>
    );
  }
}

export default App;
