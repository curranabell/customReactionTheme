import React, { Component } from "react";
import { registerComponent, getComponent } from "/imports/plugins/core/layout/lib/components";
import homeBanner from "../../components/homeHero";
import homeCategories from "../../components/homeCategories";

    class customHomePage extends Component {
      render () {

        const homeHero = React.createElement(getComponent("home-hero"), {
          // ... custom props
        });

        const homeCategories = React.createElement(getComponent("home-categories"), {
          // ... custom props
        });

        const customFooter = React.createElement(getComponent("customFooter"), {
          // ... custom props
        });

        return (
          <div>
            <div>{ homeHero }</div>
            <div>{ homeCategories }</div>
            <div>{ customFooter }</div>
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
