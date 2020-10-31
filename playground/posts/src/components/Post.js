import React from "react";
import faker from "faker";

class Post extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="mini ui image">
          <img src={faker.image.avatar()} />
        </div>
      </div>
    );
  }
}

export default Post;
