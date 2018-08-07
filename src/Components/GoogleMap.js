import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const API_KEY = "AIzaSyBGeoBESPH0kTy2I514MrZWfQqOi2CXZag"

class GoogleMap extends Component {

  render() {

    const center = {
        lat: this.props.lat,
        lng: this.props.lon
    }

    return (
        <div >
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY}}
                defaultCenter={center}
                defaultZoom={12}
            />
        </div>
    )
  }
}

export default GoogleMap;