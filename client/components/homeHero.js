import React, { Component } from "react";
import { registerComponent, getComponent } from "/imports/plugins/core/layout/lib/components";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import { Grid, Row, Col } from "react-flexbox-grid";
import homeFacts from "./homeFacts";
import homeBanner from "./homeBanner";

  class homeHero extends Component {
    render () {

      const heroStyles = {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundImage: "url(' /images/waterfall-full.jpeg ')",
          backgroundSize: 'cover',
          alignItems: 'center',
          height: '94.9vh',
          width: 'auto',
          flex: 1,
      };

      const backgroundOverlay = {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        height: '94.9vh',
      };

      const homeBanner = React.createElement(getComponent("home-banner"), {
        // ... custom props
      });
      const homeFacts = React.createElement(getComponent("home-facts"), {
           // ... custom props
      });

      return (
          <div style={ heroStyles }>
            <div style={ backgroundOverlay }>
              <div>{ homeBanner }</div>
              <div>{ homeFacts }</div>
            </div>
          </div>
      );
    }
  }

  // Register react component.
  // Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
  registerComponent({
    name: "home-hero",
    component: homeHero
  });

  export default homeHero;
