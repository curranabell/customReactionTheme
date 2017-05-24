import React, { Component } from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";
import Paper from "material-ui/Paper";

    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    const homeBanner = () => (
      <div>
        <Paper style={style} zDepth={2}>
          <h1>Testing Testing</h1>
        </Paper>

      </div>
    );

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "home-banner",
  component: homeBanner
});

export default homeBanner;
