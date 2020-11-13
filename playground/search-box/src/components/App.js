import React from "react";
import Profile from "./Profile";
import ApprovalCard from "./ApprovalCard";

import faker from "faker";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    username: "",
    country: "",
    avatar: "",
    matches: null,
    rejections: null,
  };

  onSubmitSearch = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    this.setState({
      username:
        response.data.results[0].name.first +
        response.data.results[0].name.last,
      country: response.data.results[0].location.country,
      avatar: response.data.results[0].picture.medium,
    });
  };

  onChangeRate = ({ matches, rejections }) => {
    this.setState({ matches, rejections });
  };

  render() {
    return (
      <div className="ui card" style={{ marginTop: "50px" }}>
        <ApprovalCard
          onClick={this.onSubmitSearch}
          onChange={this.onChangeRate}
        >
          <Profile
            avatar={this.state.avatar}
            user={this.state.username}
            country={this.state.country}
            message={faker.lorem.sentence()}
          />
        </ApprovalCard>
        <span id="numberOfMatches">Matched: {this.state.matches}</span>
        <span id="numberOfRejections">Rejected: {this.state.rejections}</span>
      </div>
    );
  }
}

export default App;
