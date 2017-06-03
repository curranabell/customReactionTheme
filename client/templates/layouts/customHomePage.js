import React, { Component } from "react";
import { registerComponent, getComponent } from "/imports/plugins/core/layout/lib/components";
import homeBanner from "../../components/homeBanner";
import homeFacts from "../../components/homeFacts";


    class customHomePage extends Component {
      render () {

        const homeBanner = React.createElement(getComponent("home-banner"), {
          // ... custom props
        });
        const homeFacts = React.createElement(getComponent("home-facts"), {
             // ... custom props
        });

        return (
          <div>
            <div>{ homeBanner }</div>
            <div>{ homeFacts }</div>
          </div>
      );
    }
  }

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "customHomePage",
  component: customHomePage
});

export default customHomePage;
