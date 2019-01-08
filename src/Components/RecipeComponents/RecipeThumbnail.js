import React, { Component } from 'react'

export default class RecipeThumbnail extends Component {
  render() {
    return (
        <div Style="border: 1px solid #ddd; border-radius: 4px; padding: 5px;">
            <div className="col-md-4">
                <img src="./resources/crazy-pedros.jpg" alt="pizza time" Style="width:150px; height:150px"/>
            </div>
            <div className='col-md-8'>
                <h2>Pizza time</h2>
                <p>I dont really know what to put here.</p>
            </div>
      </div>
    )
  }
}
