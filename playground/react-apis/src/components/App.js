import React from "react";
import axios from "axios";

class App extends React.Component {
  state = { res: [] };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/")
      // .then((response) => console.log(response.data.results[0].gender));

      .then((response) => {
        this.setState({ res: response.data.results[0].gender });
      });
  }

  render() {
    return <div>Gender: {this.state.res}</div>;
  }
}

export default App;
