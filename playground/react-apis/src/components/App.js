import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    name: "",
    gender: "",
    country: "",
    image: "",
  };

  onButtonClick = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    this.setState({
      name:
        response.data.results[0].name.first +
        " " +
        response.data.results[0].name.last,
      gender: response.data.results[0].gender,
      country: response.data.results[0].location.country,
      image: response.data.results[0].picture.large,
    });

    // this.setState({ res: response.data.results[0] });
  };

  render() {
    return (
      <div on>
        Name: {this.state.name}
        <br />
        Gender: {this.state.gender}
        <br />
        Country: {this.state.country}
        <br />
        <img src={this.state.image} />
        <br />
        <br />
        <button onClick={this.onButtonClick} type="submit">
          Search
        </button>
      </div>
    );
  }
}

export default App;
