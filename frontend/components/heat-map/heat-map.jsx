import React, { Component } from 'react';

class HeatMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bleeds: ["Left foot", "Right shoulder", "Nose"]
    };
  }



  render() {
    return(
      <div className="heat-map">
        <h1 className="heat-map__title"> Bleed History Heat Map</h1>
        <div className="heat-map__diagram">
        </div>
      </div>
    );
  }
}

export default HeatMap;