import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="image">
          <img src={this.props.avatar} alt="user avatar" />
        </div>
        <div className="content">
          <a className="header">{this.props.user}</a>
          <div className="meta">
            <span className="date">Age: {this.props.age}</span>
          </div>
          <br />
          <p className="description">{this.props.message}</p>
        </div>
        <br />
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            {Math.floor(Math.random() * 50)} Matches
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;
