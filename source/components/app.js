import React from 'react';
import { Search } from '../containers/search';

export const App = () => {
  return(
    <div className="main">
        <div className="center-text">
          <h1 className="raleway-big title">3 ROOMS</h1>
          {/* <div className="line"/>
          <h4 className="raleway-small">CHEAPEST.  HIGHEST RATED.  BEST.</h4> */}
        </div>
        <Search />
      </div>
  )
}
