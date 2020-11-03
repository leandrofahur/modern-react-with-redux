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
      <div className="ui comments">
        <div className="comment">
          <div className="avatar">
            <img src={faker.image.avatar()}></img>
          </div>
          <div className="content">
            <div className="author">{faker.name.findName()}</div>
            <div className="metadata">
              <div className="text">{faker.lorem.sentence()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
