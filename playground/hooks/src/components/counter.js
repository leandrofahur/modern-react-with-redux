import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  const onCount = () => {
    setCounter(count + 1);
  };

  return (
    <React.Fragment>
      <div className='ui container'>
        <div>{count}</div>
        <div
          className='ui button blue'
          onClick={() => {
            onCount();
          }}
        >
          Counter
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
