import React from "react";
import "./ApprovalCard.css";

class ApprovalCard extends React.Component {
  onMatchClick = () => {
    console.log("Match button clicked!");
    window.location.reload(false);
  };

  onRejectClick = () => {
    console.log("Reject button clicked!");
    window.location.reload(false);
  };

  render() {
    return (
      <div className="ui card">
        <div className="content">{this.props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui green button" onClick={this.onMatchClick}>
              {" "}
              <i className="heart icon"></i>Match
            </div>
            <div className="ui red button" onClick={this.onRejectClick}>
              {" "}
              <i className="thumbs down icon"></i>Reject
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovalCard;
