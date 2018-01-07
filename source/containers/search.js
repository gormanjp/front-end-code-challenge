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
    const results = this.state.suggestions.slice(0,5);
    return(
      <div className="container search-container">
        <input
          className="search raleway-small"
          type="text"
          align="middle"
          placeholder="City"
          onChange={this.onInputChange}
        />
        <div className="suggest" style={{ display: results.length ? 'block' : 'none'}}>
          <ul className="suggest-list">
            {results.map((s) => {
              return(<li key={s.id} className="raleway-small">{s.name}</li>)
            })}
          </ul>
        </div>
      </div>
    )
  }
}
