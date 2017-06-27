import React from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";
import { Router, Link } from "/client/api";

    const welcomeBanner = {
      display: 'flex',
      height: '70vh',
    };

    const messageStyles = {
      justifyContent: 'center',
      textAlign: 'center',
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center',
      color: '#fefefe',
      textShadow: 4,
      marginTop: 50,
    };

    const buttonStyles = {
      marginTop: 40,
      fontSize: 20,
      backgroundColor: '#00bcd4',
      color: '#fefefe',
    };

    const homeBanner = () => (
      <div style={ welcomeBanner }>
        <div style={ messageStyles }>
          <h1>The Natural Medicine Pharmacy</h1>
          <h3>Natural Medicine Delivered To Your Door</h3>
        </div>
      </div>
    );

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "home-banner",
  component: homeBanner
});

export default homeBanner;
