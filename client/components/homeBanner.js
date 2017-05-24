import React, { Component } from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";

// Create a react component
class homeBanner extends Component {
  render() {
    return (
      <div>
        <h1>Testing Home Banner</h1>
      </div>
    )
  }
}

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "home-banner",
  component: homeBanner
});

export default homeBanner;
