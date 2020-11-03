// React libs:
import React from "react";

// API's:
import faker from "faker";

// Styles:
import "./App.css";

const App = () => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Post</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">User name</h4>
        <input type="text" />
        <h4 className="ui sub header">Message</h4>
        <textarea />
      </div>
      <div className="ui buttons">
        <div className="ui green button">Send</div>
        <div className="ui red button">Cancel</div>
      </div>
    </div>
  );
};

export default App;
