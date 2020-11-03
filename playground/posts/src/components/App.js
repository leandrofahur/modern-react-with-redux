// React libs:
import React from "react";

// API's:
import faker from "faker";

// Components:
import PostCard from "./PostCard";

const App = () => {
  return (
    <div>
      {/* <PostCard /> */}
      <div className="ui card comments">
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
      </div>
    </div>
  );
};

export default App;
