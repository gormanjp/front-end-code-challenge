import React, { Component } from 'react';

export class Search extends Component {

  render(){

    return(
      <div className="container search-container">
        <input
          className="search raleway-small"
          type="text"
          align="middle"
          placeholder="City"
        />
      </div>
    )
  }
}
