import React, { Component } from "react";
import { registerComponent, getComponent } from "/imports/plugins/core/layout/lib/components";

    class customFooter extends Component {
      render () {

        const footerStyles = {
          color: '#000',
          paddingTop: 50,
          paddingBottom: 50,
          justifyContent: 'center',
          flex: 1,
        };

        const containerStyles = {
            backgroundColor: '#efefef',
            display: 'flex',
            flexWrap: 'wrap',
        };

        return (
          <div className="container-fluid" style={ containerStyles }>
            <div className="container-fluid">
              <div className="row" style={ footerStyles }>
                <div className="col-xs-4">
                  <h3>COMPANY:</h3>
                  <p>HOME</p>
                  <p>ABOUT</p>
                </div>

                <div className="col-xs-4">
                  <h3>CONTACT:</h3>
                  <p>CONTACT @ YOURDOMAINNAME.COM</p>
                  <p>KAUAI, HAWAII 96754 USA</p>
                </div>

                <div className="col-xs-4">
                  <h3>COMPANY LOGO HERE</h3>
                  <img src="/images/nalu-logo.png" />
                </div>
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
