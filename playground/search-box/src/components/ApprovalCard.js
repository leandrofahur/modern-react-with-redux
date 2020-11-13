import React from "react";
import "./ApprovalCard.css";

class ApprovalCard extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">{this.props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui green button">
              {" "}
              <i class="heart icon"></i>Match
            </div>
            <div className="ui red button">
              {" "}
              <i class="thumbs down icon"></i>Reject
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovalCard;
