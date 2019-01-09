import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import RecipeThumbnail from './RecipeThumbnail';
import Recipe from './Recipe';

export default class RecipieList extends Component {
  render() {
    return (
      <LinkContainer to="recipes/pizza">
        <div className='row'>
          <div className="col-xs-6">
            <RecipeThumbnail/>
          </div>
          <div className='col-xs-6'>
            <Route path="/recipes/:recipeID" component={Recipe} />
          </div>
        </div>
      </LinkContainer>
    )
  }
}
