import React, { Component } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3000/autofill?query='

export class Search extends Component {
  constructor(props){
    super(props);
    this.state = { suggestions: [] };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e){
    axios(`${URL}${e.target.value}`)
      .then(s => this.setState({ suggestions: s.data.locations }));
  }

  render(){
    return(
      <div className="container search-container">
        <input
          className="search raleway-small"
          type="text"
          align="middle"
          placeholder="City"
          onChange={this.onInputChange}
        />
      </div>
    )
  }
}
