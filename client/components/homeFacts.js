import React from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import { Grid, Row, Col } from "react-flexbox-grid";

    const categoryBanner = {
      flex: 1,
      height: 200,
      padding: 20,
      margin: 20,
      textAlign: 'center',
      backgroundColor: 'white' ,
    };


    const homeFacts = () => (
      <Grid fluid>
        <Row center="md">
          <Col lg={4}>
            <Paper style={categoryBanner} zDepth={2}>
              <h1>Heading 1</h1>
              <h3>Shop with us because...</h3>
              <RaisedButton label="Shop" primary={true} />
            </Paper>
          </Col>

          <Col lg={4}>
            <Paper style={categoryBanner} zDepth={2}>
              <h1>Heading 2</h1>
              <h3>Shop with us because...</h3>
              <RaisedButton label="Shop" primary={true} />
            </Paper>
          </Col>

          <Col lg={4}>
            <Paper style={categoryBanner} zDepth={2}>
              <h1>Heading 3</h1>
              <h3>Shop with us because...</h3>
              <RaisedButton label="Shop" primary={true} />
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
