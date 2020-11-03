// React libs:
import React from "react";

// API's:
import faker from "faker";

// Styles:
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="ui card">
        <div className="content">
          <div className="header">Post</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">User name</h4>
          <input type="text" placeholder="username" />
          <h4 className="ui sub header">Message</h4>
          <textarea placeholder="maximum 200 characteres" />
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
      {/* <div className="ui card comments">
        <div className="comment">
          <div className="avatar">
            <img src={faker.image.avatar()}></img>
          </div>
          <div className="content">
            <div className="author">John Doe</div>
            <div className="metadata">
              <div className="text">{faker.lorem.sentence()}</div>
            </div>
          </div>
          <div className="ui buttons">
            <div className="ui basic green button">
              <i class="check link icon"></i>
            </div>
            <div className="ui basic right red button">
              <i class="close link icon"></i>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default App;
