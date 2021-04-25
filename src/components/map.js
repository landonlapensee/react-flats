import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.js';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDAClAl5OTMUzPM_ir7PzoHP_wqIQqzrGc" }}
          defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
          // defaultCenter={this.props.center()}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
