import React, { Component, createRef } from 'react';
import SimpleMap from './map.js';
import FlatList from './flat_list.js';
import flats from '../../data/data.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: flats[0].lat,
      lng: flats[0].lng,
      zoom: 12
    };
  };

    
  center = () => {
    return {
      lat: this.state.lat,
      lng: this.state.lng
    };
  };

  selectedFlat = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng, 
    });
  };

  
  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} selectedFlat={this.selectedFlat} selected={this.state.lat}/>
        </div>
        <div className="map-container">
          <SimpleMap lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom} center={this.center}/>
        </div>
      </div>
    );
  }
}

export default App;
