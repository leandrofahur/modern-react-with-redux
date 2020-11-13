import React from "react";
import "./ApprovalCard.css";

class ApprovalCard extends React.Component {
  matches = 0;
  rejections = 0;

  state = {
    numOfMatches: null,
    numOfRejections: null,
  };

  onMatchClick = () => {
    console.log("Match button clicked!");
    this.matches++;
    this.setState({ numOfMatches: this.matches });
    this.props.onClick();
    this.props.onChange({ matches: this.matches, rejections: this.rejections });
  };

  onRejectClick = () => {
    console.log("Reject button clicked!");
    this.rejections++;
    this.setState({ numOfRejections: this.rejections });
    this.props.onClick();
    this.props.onChange({ matches: this.matches, rejections: this.rejections });
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
