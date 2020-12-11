import "./App.css";

import React from "react";
import mapboxgl, { Marker, GeolocateControl } from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVhbmRyb2ZhaHVyIiwiYSI6ImNqemJpeHAzdzAwcXgzbW1ub2p5YXlxZWwifQ.0jquNUq8yTAfeiVV6SDVkg";

class App extends React.Component {
  state = {
    lat: 49.103569,
    lng: -122.656563,
    zoom: 10,
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lat: map.getCenter().lat.toFixed(4),
        lng: map.getCenter().lng.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAcuracy: true,
      },
      trackUserLocation: true,
    });

    map.addControl(geolocate);

    map.on("load", () => {
      geolocate.trigger();
    });
  }

  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default App;
