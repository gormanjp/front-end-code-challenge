import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hotels extends Component {

  renderHotel(hotel, type){
    return(
      <div>
        <h1>{type.toUpperCase()}</h1>
        <div>
          {hotel.name}
        </div>
      </div>
    )
  }

  render(){
    const {cheapestHotels, starsHotels, popularHotels} = this.props;
    return(
      <div className="row">
        <div>{cheapestHotels ? this.renderHotel(cheapestHotels[0], 'Cheapest') : ''}</div>
        <div>{starsHotels ? this.renderHotel(starsHotels[0], 'Most Stars') : ''}</div>
        <div>{popularHotels ? this.renderHotel(popularHotels[0], 'Most Popular') : ''}</div>
      </div>
    )
  }
}

function mapStateToProps({hotels}){
  debugger
  return {...hotels};
}

export default connect(mapStateToProps)(Hotels);
