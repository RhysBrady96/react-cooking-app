import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    return (
      <div className="row" style={{'border': 1 + 'px solid #ddd', 'borderRadius': 4 + 'px', 'padding': 5 + 'px'}}>
        <div className='col-xs-12'>
          <img src="/resources/crazy-pedros.jpg" alt="pizza time" style={{'width': 400 + 'px', 'height':250 + 'px'}}/>
        </div>
        <div className='col-xs-12'>
          <h2>Recipe Title</h2>
          <p>Recipe script</p>
          <h3>Ingredients</h3>
          <ol>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ol>
        </div>
      </div>
    )
  }
}
