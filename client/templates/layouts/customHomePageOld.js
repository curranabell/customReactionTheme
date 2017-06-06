import React from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import { Grid, Row, Col } from "react-flexbox-grid";



    const welcomeBanner = {
      flex: 1,
      height: 420,
      padding: 20,
      paddingTop: 100,
      margin: 20,
      textAlign: 'center',
      backgroundColor: 'white' ,
    };

    const categoryBanner = {
      flex: 1,
      height: 200,
      padding: 20,
      margin: 20,
      textAlign: 'center',
      backgroundColor: 'white' ,
    };


    const customHomePage = () => (
      <Grid fluid>
        <Row center="md">
          <Col md={8}>
            <Paper style={welcomeBanner} zDepth={2}>
              <h1>Welcome To Our Shop</h1>
              <h3>We specialize in category 1 and category 2</h3>
              <RaisedButton label="Shop" primary={true} />
            </Paper>
          </Col>
          <Col md={4}>
            <Paper style={categoryBanner} zDepth={2}>
              <h1>Category 1</h1>
              <RaisedButton label="Shop Category 1" primary={true} />
            </Paper>
            <Paper style={categoryBanner} zDepth={2}>
              <h1>Category 1</h1>
              <RaisedButton label="Shop Category 2" primary={true} />
            </Paper>
          </Col>
        </Row>
      </Grid>
    );

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "customHomePage",
  component: customHomePage
});

export default customHomePage;
