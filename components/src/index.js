import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Alex"
        time="Today 7:00PM"
        comment="Nice to meet you!"
      />
      <CommentDetail author="Jane" time="Today 6:00PM" comment="Hello world!" />
      <CommentDetail author="Sam" time="Yesterday 5:00AM" comment="Hi there!" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
