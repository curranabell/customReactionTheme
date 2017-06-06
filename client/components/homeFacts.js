import React from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";
import Paper from "material-ui/Paper";
import { Grid, Row, Col } from "react-flexbox-grid";

    const categoryBanner = {
      height: 150,
      padding: 20,
      margin: 20,
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)' ,
      color: '#fefefe',
    };

    const factsRow = {
      alignItems: 'flex-end',
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'auto',
      height: '20vh',
    };

    const homeFacts = () => (
      <Grid fluid>
        <Row center="sm" style={ factsRow }>
          <Col lg={4}>
            <Paper style={categoryBanner} zDepth={2}>
              <h1>Quality</h1>
              <h4>All Products Are Made With The Highest Quality 100% Organic Ingredients</h4>
            </Paper>
          </Col>

          <Col lg={4}>
            <Paper style={categoryBanner} zDepth={2}>
              <h1>Delivered To You</h1>
              <h4>Schedule Regular Deliveries With Fast And Secure Shipping</h4>
            </Paper>
          </Col>

          <Col lg={4}>
            <Paper style={categoryBanner} zDepth={2}>
              <h1>Trusted Suppliers</h1>
              <h4>Our Suppliers Have Been Working With Us For Over 30 Years</h4>
            </Paper>
          </Col>

        </Row>
      </Grid>
    );

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "home-facts",
  component: homeFacts
});

export default homeFacts;
