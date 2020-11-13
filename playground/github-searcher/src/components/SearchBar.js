import React from "react";

import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { username: "" };

  onCLickSearch = (ev) => {
    ev.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  onCLickClear = (ev) => {
    ev.preventDefault();
    this.setState({ username: "" });
  };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={(ev) => {
              this.setState({ username: ev.target.value });
            }}
          />
        </div>
        <button
          className="ui button blue"
          type="submit"
          onClick={this.onCLickSearch}
        >
          Search
        </button>
        <button className="ui button" type="reset" onClick={this.onCLickClear}>
          Clear
        </button>
      </form>
    );
  }
}

export default SearchBar;
