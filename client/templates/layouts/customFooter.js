import React, { Component } from "react";
import { registerComponent, getComponent } from "/imports/plugins/core/layout/lib/components";

    class customFooter extends Component {
      render () {
        const footerStyles = {
          color: '#000',
          paddingTop: 50,
          paddingBottom: 50,
        };
        return (
          <div className="container">
            <div className="row" style={ footerStyles }>
              <div className="col-md-4">
                <h3>COMPANY:</h3>
                <p>HOME</p>
                <p>ABOUT</p>
              </div>

              <div className="col-md-4">
              <h3>CONTACT:</h3>
              <p>CONTACT @ NATURALMEDICINEPHARMACY.COM</p>
              <p>KILAUEA, HAWAII 96754 USA</p>
              </div>

              <div className="col-md-4">
                <h3>NATURAL MEDICINE PHARMACY</h3>
                <img src="/images/nalu-logo.png" />
              </div>
            </div>
          </div>
      );
    }
  }

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "customFooter",
  component: customFooter
});

export default customFooter;
