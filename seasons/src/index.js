import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // This is the only time we do direct assignmet to this.state
    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    // Data loading:
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentWillMount() {
    console.log("My component was redered to the screen");
  }

  componentDidUpdate() {
    // Useful to update multiple states/props
    console.log("My component was updated - it rerendered!");
  }

  componentWillUnmount() {
    // Destructor...
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
