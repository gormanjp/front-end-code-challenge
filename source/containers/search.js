import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { fetchCheapest, fetchStars, fetchPopular } from '../actions/index';

const URL = 'http://localhost:3000/autofill?query=';
const apple = {banana: 2};
const banana = {...apple, tulip: 4}

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      suggestions: [],
      value: '',
      placeholder: 'city'
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectLocation = this.onSelectLocation.bind(this);
  }

  onInputChange(e){
    const searchInput = e.target.value;
    this.setState({ value: searchInput })
    axios(`${URL}${searchInput}`)
      .then(s => this.setState({ suggestions: s.data.locations }));
  }

  onSelectLocation(location){
    this.props.fetchCheapest(location.id);
    this.props.fetchStars(location.id);
    this.props.fetchPopular(location.id);
    this.setState({
      suggestions: [],
      value: location.name
    })
  }

  render(){
    const results = this.state.suggestions.slice(0,5);
    return(
      <div className="container search-container">
        <input
          className="search raleway-small"
          type="text"
          align="middle"
          value={this.state.value ? this.state.value : ''}
          placeholder={this.state.placeholder}
          onChange={this.onInputChange}
          onFocus={() => this.setState({ placeholder: '', value: '' })}
        />
        <div className="suggest" style={{ display: results.length ? 'block' : 'none'}}>
          <ul className="suggest-list">
            {results.map((l) => {
              return(
                <li
                  key={l.id}
                  className="raleway-small"
                  onClick={() => this.onSelectLocation(l)}
                >
                  {l.name}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCheapest, fetchStars, fetchPopular }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
