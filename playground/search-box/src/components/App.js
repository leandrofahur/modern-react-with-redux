import React from "react";
import Profile from "./Profile";
import ApprovalCard from "./ApprovalCard";

import faker from "faker";

class App extends React.Component {
  render() {
    return (
      <div className="ui card">
        <ApprovalCard>
          <Profile
            avatar={faker.image.avatar()}
            user={`${faker.name.firstName()} ${faker.name.lastName()}`}
            age={Math.floor(Math.random() * 50) + 18}
            message="Some dummy text..."
          />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
