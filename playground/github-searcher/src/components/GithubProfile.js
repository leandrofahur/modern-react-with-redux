import React from "react";
import "./GithubProfile.css";

class GithubProfile extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <img src={this.props.avatar} />
        <div className="profile-content">
          <div className="group">
            <i className="large user circle icon"></i>Username:{" "}
            {this.props.user}
          </div>
          <br />
          <div className="group">
            <i className="large envelope icon"></i>Email: {this.props.email}
          </div>
          <br />
          <div className="group">
            <i className="large cubes icon"></i>
            <i className="hashtag icon"></i>Public Repos:{" "}
            {this.props.publicRepos}
          </div>
          <br />
          <div className="group">
            <i class="location arrow icon"></i>Location: {this.props.location}
          </div>
        </div>
      </div>
    );
  }
}

export default GithubProfile;
