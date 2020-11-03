// React libs:
import React from "react";

// Styles:
import "./PostCard.css";

class PostCard extends React.Component {
  state = { username: "", message: "" };

  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">Post</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">User name</h4>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
          />
          <h4 className="ui sub header">Message</h4>
          <textarea
            placeholder="maximum 200 characteres"
            value={this.state.message}
            onChange={(e) => {
              this.setState({ message: e.target.value });
            }}
          />
        </div>
        <div className="ui buttons">
          <div className="ui left green button">
            <i class="check link icon"></i>
          </div>
          <div className="ui right red button">
            <i class="close link icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
