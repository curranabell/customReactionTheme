import React, { Component } from "react";
import { registerComponent, getComponent } from "/imports/plugins/core/layout/lib/components";
import { Grid, Row, Col } from "react-flexbox-grid";

    class customFooter extends Component {
      render () {
        const footerStyles = {
          color: '#000',
          paddingTop: 50,
          paddingBottom: 50,
        };
        return (
          <Grid>
            <Row  style={ footerStyles }>
              <Col md={4}>
                <h3>COMPANY:</h3>
                <p>HOME</p>
                <p>ABOUT</p>
              </Col>

              <Col md={4}>
              <h3>CONTACT:</h3>
              <p>CONTACT @ NATURALMEDICINEPHARMACY.COM</p>
              <p>KILAUEA, HAWAII 96754 USA</p>
              </Col>

              <Col md={4}>
                <h3>NATURAL MEDICINE PHARMACY</h3>
                <img src="/images/nalu-logo.png" />
              </Col>
            </Row>
          </Grid>
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
