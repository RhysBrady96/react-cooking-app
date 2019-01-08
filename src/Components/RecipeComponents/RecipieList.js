import React, { Component } from 'react';
import RecipeThumbnail from './RecipeThumbnail';
import Recipe from './Recipe';

export default class RecipieList extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-md-6">
          <RecipeThumbnail/>
        </div>
        <div className='col-md-6'>
          <Recipe/>
        </div>
      </div>
    )
  }
}
