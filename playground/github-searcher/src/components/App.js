import React from "react";
import axios from "axios";

import "./SearchBar";
import SearchBar from "./SearchBar";
import GithubProfile from "./GithubProfile";

import "./App.css";

class App extends React.Component {
  state = {
    avatar: "",
    user: "",
    email: "",
    publicRepos: null,
    location: "",
  };

  onSubmitGithubSearch = async (username) => {
    const response = await axios(`https://api.github.com/users/${username}`);

    this.setState({
      avatar: response.data.avatar_url,
      user: response.data.name,
      email: response.data.email,
      publicRepos: response.data.public_repos,
      location: response.data.location,
    });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSubmitGithubSearch} />
        <br />
        <GithubProfile
          avatar={this.state.avatar}
          user={this.state.user}
          email={this.state.email}
          publicRepos={this.state.publicRepos}
          location={this.state.location}
        />
      </div>
    );
  }
}

export default App;
