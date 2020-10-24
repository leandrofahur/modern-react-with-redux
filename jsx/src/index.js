// Import libraries such as React and ReactDOM:
import React from "react";
import ReactDOM from "react-dom";

// Create a React component
const App = function () {
  const buttonText = { text: "Click me!" };
  const labelText = "Enter name:";
  return (
    <div>
      <label className="label" for="name">
        {labelText}
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
