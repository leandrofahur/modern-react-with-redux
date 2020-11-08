import React from "react";
import axios from "axios";

class App extends React.Component {
  state = { res: [] };

  onButtonClick = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    this.setState({ res: response.data.results[0].gender });
  };

  render() {
    return (
      <div on>
        Gender: {this.state.res}
        <br />
        <button onClick={this.onButtonClick} type="submit">
          Submit
        </button>
      </div>
    );
  }
}

export default App;
