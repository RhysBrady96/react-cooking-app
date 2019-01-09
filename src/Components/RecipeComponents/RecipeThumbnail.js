import React, { Component } from 'react'

export default class RecipeThumbnail extends Component {
  render() {
    return (
        <div className="row" style={{'border': 1 + 'px solid #ddd', 'borderRadius': 4 + 'px', 'padding': 5 + 'px'}}>
            <div className="col-md-4">
                <img src="/resources/crazy-pedros.jpg" alt="pizza time" style={{'width' :150 + 'px', 'height':150 + 'px'}}/>
            </div>
            <div className='col-md-8'>
                <h2>Pizza time</h2>
                <p>I dont really know what to put here.</p>
            </div>
      </div>
    )
  }
}
