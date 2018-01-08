import React, { Component } from 'react';
import { connect } from 'react-redux';

const images =
  [ "//d29u3c1wxehloe.cloudfront.net/vfml/1950/417/63343589/big.jpg",
   "//d29u3c1wxehloe.cloudfront.net/vfml/1950/417/63343581/big.jpg",
   "//d29u3c1wxehloe.cloudfront.net/vfml/1086/886/65082242/big.jpg" ];

class Hotels extends Component {
  renderHotel(hotel, type, photo){
    const image = `https:${images[photo]}`;
    return(
      <div>
        <h3 className="hotel-category raleway-big">{type.toUpperCase()}</h3>
        <div className="line"></div>
        <div className="card hotel-card raleway-big">
          <img className="card-img-top hotel-img" src={image}/>
          <div className="card-block">
            <h4 className="card-title">{hotel.name}</h4>
            <h5 className="card-text">${hotel.indicative_rate}</h5>
            <a href={`https://www.roomkey.com/hotels/${hotel.udicode}`} target="_blank" className="btn btn-primary card-btn">BOOK IT!</a>
          </div>
        </div>
      </div>

    )
  }

  render(){
    const {cheapestHotels, starsHotels, popularHotels} = this.props;
    return(
      <div className="card-deck">
        <div className="card-container">{starsHotels ? this.renderHotel(starsHotels[0], 'Most Stars', 1) : ''}</div>
        <div className="card-container">{popularHotels ? this.renderHotel(popularHotels[0], 'Most Popular', 2) : ''}</div>
        <div className="card-container">{cheapestHotels ? this.renderHotel(cheapestHotels[0], 'Cheapest', 0) : ''}</div>
      </div>
    )
  }
}

function mapStateToProps({hotels}){
  return {...hotels};
}

export default connect(mapStateToProps)(Hotels);
