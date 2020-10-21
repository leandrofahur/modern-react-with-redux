// Import libraries such as React and ReactDOM:
import React from "react";
import ReactDOM from "react-dom";

// Create a React component
const App = function () {
  return (
    <div>
      <label class="label" for="name">
        Enter name:{" "}
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));