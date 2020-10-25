import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        authorImg={faker.image.avatar()}
        author="Alex"
        time="Today at 7:00PM"
        comment="Wtf guys..."
      />
      <CommentDetail
        authorImg={faker.image.avatar()}
        author="Jane"
        time="Today at 6:00PM"
        comment="World!"
      />
      <CommentDetail
        authorImg={faker.image.avatar()}
        author="Sam"
        time="Yesterday at 5:00AM"
        comment="Hello"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
